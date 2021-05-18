const CARD_URL = `https://api.magicthegathering.io/v1/cards?pageSize=20`;

function renderCard(card) {
    const cardElement = $(`
    <div class="card">
  <h3>${card.name} - ${card.manaCost}</h3>
  <h4>${card.type}</h4>
  <h5 class="set-name">${card.setName}</h5>
  <pre>Flying, vigilance</pre>
  <img src="${card.imageUrl}">
</div>
    `);
    return cardElement
}

function renderCardList(cardList) {
    $('#results').append(cardList.map(renderCard));

    // take the data from cardList
}

function fetchCardList(url) {
  // SECRET THING HERE
  // add the class of active to the element that matches "class=searching"
  $(".searching").addClass("active");

  fetch(url)
    .then(function (response) {
      return response.json();
    }) // convert to json
    .then(function (data) {
      console.log(data.cards);
      $(".searching").removeClass("active");
      renderCardList(data.cards)
    }) // render the card list && SECRET THING HERE
    .catch(function (err) {
      console.error(err);
    }); // render an error message
}

// fetchCardList(CARD_URL);

$("#card-search").on("submit", function (event) {
  // prevent the form from actually submitting
     event.preventDefault()
  // read the `cardName` and `cardText` from #cname and #ctext
  let cardName = $('#cname').val()
  let cardText = $('#ctext').val()
  // clear the values for the two elements
  $(this).trigger('reset')
  // build the URL for fetchCardList
  const urlToFetch = `${CARD_URL}&name=${cardName}`;
  // call fetchCardList
    fetchCardList(urlToFetch)
});

$("#results").on("click", ".card .set-name", function () {
 // read the setName from $(this) using .data()
  // build the URL for fetchCardList. The query param is `set` so we'd add `&set=` concatenated with the set name to the url!
  // call fetchCardList
});
