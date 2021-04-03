const BASE_URL = "https://jsonplace-univclone.herokuapp.com";

function fetchUsers() {
  return fetchData(`${BASE_URL}/users`);
  // .then(function (response) {
  //     return response.json();
  // })
  // .catch(function (error) {
  //   console.error(error);
  // });
}

fetchUsers().then(function (data) {
  console.log(data);
});

function renderUser(user) {
  return $(`<div class="user-card">
    <header>
      <h2>${user.name}</h2>
    </header>
    <section class="company-info">
      <p><b>Contact:</b> ${user.email}</p>
      <p><b>Works for:</b> ${user.company.name}</p>
      <p><b>Company creed:</b> ${user.company.catchPhrase}</p>
    </section>
    <footer>
      <button class="load-posts">POSTS BY ${user.username}</button>
      <button class="load-albums">ALBUMS BY ${user.username}</button>
    </footer>
  </div>`).data("user", user);
}

function renderUserList(userList) {
  $("#user-list").empty();

  userList.forEach(function (user) {
    const userElement = renderUser(user);
    $("#user-list").append(userElement);
  });
}

$("#user-list").on("click", ".user-card .load-posts", function () {
  $(this).closest();
  // loads post for this user
  // render posts for this user
  console.log(this);
});

$("#user-list").on("click", ".user-card .load-albums", function () {
  let parent = $(this).closest(".user-card").data("user");
  fetchUserAlbumList(parent.id).then(function (albumList) {
    renderAlbumList(albumList)
  })
  // loads albums for this user
  // render albums for this user
  console.log(this);
  // fetchUserAlbumList(userId)
  console.log(parent);
});

//module 2

function fetchUserAlbumList(userId) {
  return fetchData(
    `${BASE_URL}/users/${userId}/albums?_expand=user&_embed=photos`
  );
  // .then(function (response) {
  //   return response.json()
  //   // convert from JSON to an object, and return
  // }).catch(function (error) {
  //   // console.error out the error
  //   console.error(error)
  // })
}


function fetchData(url) {
  return fetch(url)
    .then(function (response) {
      return response.json();
    })
    .catch(function (error) {
      console.log(error);
    });
}

/* render a single album */
function renderAlbum(album) {
  const albumElement = $(`
    <div class="album-card">
  <header>
    <h3> ${album.title}, by ${album.user.username}</h3>
  </header>
  <section class="photo-list">
  </section>
</div>
    `);
    const photoListClass = albumElement.find(".photo-list");
// when finished, comment out line above and change photo-list-class to the jquery element .photo-list
    album.photos.forEach(function (photo) {
      const photoElement = renderPhoto(photo);
      photoListClass.append(photoElement);
    });
    return albumElement;
}

/* render a single photo */
function renderPhoto(photo) {
  return $(`
    <div class="photo-card">
  <a href="${photo.url}" target="_blank">
    <img src="${photo.thumbnailUrl}">
    <figure>${photo.title}</figure>
  </a>
</div>
    `);
}

/* render an array of albums */
function renderAlbumList(albumList) {
  $('#app section.active').removeClass('active')
  $('#album-list').addClass('active').empty()


  albumList.forEach(function (album){
    const listElement = renderAlbum(album)
    $('#album-list').append(listElement)
  })
}

function bootstrap() {
  fetchUsers().then(renderUserList);
}


bootstrap();
