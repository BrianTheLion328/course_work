const BASE_URL = "https://api.harvardartmuseums.org";
const KEY = "apikey=6bbf1bd9-1fcb-434a-807d-719cf65512e7"; // USE YOUR KEY HERE


function onFetchStart() {
    $('#loading').addClass('active');
  }

  function onFetchEnd() {
    $('#loading').removeClass('active');
  }


async function fetchObjects() {
  const url = `${BASE_URL}/object?${KEY}`;
  onFetchStart();
  try {
    const response = await fetch(url);
    const data = await response.json();

    // console.log(data);
  } catch (error) {
    console.error(error);
  } finally {
    onFetchEnd();
  }
}

// fetchObjects().then((x) => console.log(x));

async function fetchAllCenturies() {
  const url = `${BASE_URL}/century?${KEY}&size=100&sort=temporalorder`;

  if (localStorage.getItem("centuries")) {
    return JSON.parse(localStorage.getItem("centuries"));
  }
  onFetchStart();
  try {
    const response = await fetch(url);
    const data = await response.json();
    const records = data.records;
    // add a line to set the centuries item in localStorage
    // after you get the records, but before returning them.
    localStorage.setItem("centuries", JSON.stringify(records));

    return records;
  } catch (error) {
    console.error(error);
  } finally {
    onFetchEnd();
  }
}

async function fetchAllClassifications() {
  const url = `${BASE_URL}/classification?${KEY}&size=100&sort=name`;

  if (localStorage.getItem("classifications")) {
    return JSON.parse(localStorage.getItem("classifications"));
  }

  onFetchStart();
  try {
    const response = await fetch(url);
    const data = await response.json();
    const records = data.records;
    // add a line to set the centuries item in localStorage
    // after you get the records, but before returning them.
    localStorage.setItem("classifications", JSON.stringify(records));

    return records;
  } catch (error) {
    console.error(error);
  } finally {
    onFetchEnd();
  }
}

async function prefetchCategoryLists() {
  try {
    const [classifications, centuries] = await Promise.all([
      fetchAllClassifications(),
      fetchAllCenturies(),
    ]);

    // This provides a clue to the user, that there are items in the dropdown
    $(".classification-count").text(`(${classifications.length})`);

    classifications.forEach((classification) => {
      const classDropdown = $("#select-classification");
      const optionTag = $(
        `<option value="${classification.name}">${classification.name}</option>`
      );
      classDropdown.append(optionTag);
      // append a correctly formatted option tag into
      // the element with id select-classification
    });

    // This provides a clue to the user, that there are items in the dropdown
    $(".century-count").text(`(${centuries.length})`);

    centuries.forEach((century) => {
      // append a correctly formatted option tag into
      // the element with id select-century
      const classDropdown = $("#select-century");
      const optionTag = $(
        `<option value="${century.name}">${century.name}</option>`
      );
      classDropdown.append(optionTag);
    });
  } catch (error) {
    console.error(error);
  }
}

async function buildSearchString() {
  let apiUrl = `${BASE_URL}/object?${KEY}`;
  let classificationUrl = `&classification=${$(
    "#select-classification"
  ).val()}`;
  let centuryUrl = `&century=${$("#select-century").val()}`;
  let keywords = `&keyword=${$("#keywords").val()}`;
  return apiUrl + classificationUrl + centuryUrl + keywords;
}

$('#search').on('submit', async function (event) {
    // prevent the default
    event.preventDefault();
    onFetchStart();

    const searchString = await buildSearchString()
    const encodedUrl = encodeURI(searchString);

    try {
      // get the url from `buildSearchString`
      const response = await fetch(encodedUrl);
      const {info, records} = await response.json();
      // const records = data.records;
      // fetch it with await, store the result
      // log out both info and records when you get them
      updatePreview(info, records);
      // console.log(info)
      // console.log(records)


    } catch (error) {
      console.log(error)
    } finally {
        onFetchEnd();
    }

  });

  function renderPreview(record) {
    // grab description, primaryimageurl, and title from the record
    const { description, primaryimageurl, title} = record;

    // Template looks like this:
    const previewElement = $(`<div class="object-preview">
    <a href="#">
      <img src="${primaryimageurl}" />
      <h3>${title}</h3>
      <h3>${description}</h3>
    </a>
  </div>`)

  previewElement.data('record', record)
    // Some of the items might be undefined, if so... don't render them
    // With the record attached as data, with key 'record'
    return previewElement;
    // return new element
  }

  function updatePreview(info, records) {
    const root = $('#preview');
    const resultsElement = root.find('.results')
    console.log(resultsElement)
    resultsElement.empty()

    // grab the results element, it matches .results inside root
    // empty it
    // loop over the records, and append the renderPreview
    console.log(info, 'this is info from updatePreview function')

    if (info.next){
      $('.next').data('url', info.next)
      .attr('disabled', false)
    } else {
      $('.next').data('url', null)
      .attr('disabled', true)
    }

    if (info.prev){
      $('.previous').data('url', info.prev)
      .attr('disabled', false)
    } else {
      $('.previous').data('url', null)
      .attr('disabled', true)
    }

    records.forEach(function (record){
      resultsElement.append(renderPreview(record))
    })
  }

  $('#preview .next, #preview .previous').on('click', async function () {
    onFetchStart()
    try {
      const newUrl = $(this).data('url')
      const response = await fetch(newUrl)
      const {records, info} = await response.json()
      updatePreview(info, records)
    } catch(error) {
      console.error(error)
    } finally {
      onFetchEnd()
    }
    /*
      read off url from the target
      fetch the url
      read the records and info from the response.json()
      update the preview
    */
  });

  $('#preview').on('click', '.object-preview', function (event) {
    event.preventDefault(); // they're anchor tags, so don't follow the link
    // find the '.object-preview' element by using .closest() from the target
    const objectElement = $(this).closest('.object-preview')
    // recover the record from the element using the .data('record') we attached
    const record = objectElement.data('record')
    // log out the record object to see the shape of the data
    $('#feature').html(renderFeature(record))
    console.log(record)
  });

  function renderFeature(record) {
    const {title, dated, description, culture, style, technique,
    medium, dimensions, people, department, division, contact,
    creditline, images, primaryimageurl} = record

    const featureElement = $(`<div class="object-feature">
  <header>
    <h3>${title}</h3>
    <h4>${dated}</h4>
  </header>
  <section class="facts">
  ${ factHTML("Description", description) }
  ${ factHTML("Culture", culture, 'culture') }
  ${ factHTML("Style", style) }
  ${ factHTML("Technique", technique, 'technique') }
  ${ factHTML("Medium", medium, 'medium') }
  ${ factHTML("Dimensions", dimensions) }
  ${
    people
    ? people.map(function(person) {
        return factHTML('Person', person.displayname, 'person');
      }).join('')
    : ''
  }
  ${ factHTML("Department", department) }
  ${ factHTML("Division", division) }
  ${ factHTML("Contact", contact) }
  ${ factHTML("Creditline", creditline) }

  </section>
  <section class="photos">
  ${ photosHTML(images, primaryimageurl) }
  </section>
</div>`)

$('#feature').append(featureElement)
return featureElement
  }

  function searchURL(searchType, searchString) {
    return `${ BASE_URL }/object?${ KEY }&${ searchType}=${ searchString }`;
  }

  function factHTML(title, content, searchTerm = null) {
    if (!content) {
      return ''
    } else if (!searchTerm || searchTerm === null) {
      return `<span class="title">"${title}</span>
              <span class="content">${content}</span>`
    } else {
      return `<span class="title">${title}</span>
      <span class="content"><a href="${searchURL(searchTerm, content)}">${content}</a></span>`
    }
    // if content is empty or undefined, return an empty string ''

    // otherwise, if there is no searchTerm, return the two spans

    // otherwise, return the two spans, with the content wrapped in an anchor tag
  }

  function photosHTML(images, primaryimageurl) {
    // if images is defined AND images.length > 0, map the images to the correct image tags, then join them into a single string.  the images have a property called baseimageurl, use that as the value for src
    if (images && images.length > 0) {
      return images.map(function (image) {
        return `<img src="${image.baseimageurl}" />`;
      }).join('')
    } else if (primaryimageurl) {
      return `<img src="${primaryimageurl}" />`;
    } else {
      return ''
    }
    // else if primaryimageurl is defined, return a single image tag with that as value for src

    // else we have nothing, so return the empty string
  }

  $('#feature').on('click', 'a', async function (event) {
    // read href off of $(this) with the .attr() method
    const href = $(this).attr('href');
    if (href.startsWith('mailto')) {
      return;
    }
    // prevent default
    event.preventDefault();
    // call onFetchStart
    onFetchStart();
    // fetch the href
    try{
      const response = await fetch(href);
      const { info, records } = await response.json();

      updatePreview(info, records);
      console.log(data);

    } catch (error) {
      console.error(error)
    } finally {
      onFetchEnd();
    }
    // render it into the preview
    // call onFetchEnd
  });

  prefetchCategoryLists();
