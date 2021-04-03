const USERS_URL = `https://reqres.in/api/users?per_page=2`;

const metadata = {
  minPage: 1,
  currentPage: null,
  maxPage: null
};

function renderUser(user) {
    return $(`
        <div>${user.email}</div>
        <div>${user.first_name} ${user.last_name}</div>
        <img src="${user.avatar}"/>
    `)
}

function renderUserList(userList) {
    $('#user-list').empty()
    userList.forEach(function(user) {
        const userElement = renderUser(user)
        $('#user-list').append(userElement)
    })
}

function updatePageInfo() {
    $('#page-info').text(
        `Page Number ${metadata.currentPage} out of ${metadata.maxPage}`
      );
}

function updateButtons() {
    if (metadata.currentPage === metadata.minPage) {
        $('#back').attr('disabled', true)
    } else if (metadata.currentPage === metadata.maxPage) {
        $('#forward').attr('disabled', true)
    } else {
        $('#back').removeAttr('disabled')
        $('#forward').removeAttr('disabled')

    }
}

function fetchUserList(currentPage = 1) {
    fetch(`${ USERS_URL }&page=${ currentPage }`)
      .then(function (res) {
        return res.json();
      })
      .then(function (userData) {
          console.log(userData)
        // update metadata
        metadata.currentPage = userData.page
        metadata.maxPage = userData.total_pages
        renderUserList(userData.data)
        updatePageInfo()
        updateButtons()
      })
      .catch(function (error) {
        console.log(error)
      });
  }

$('#back').on('click', function () {
    if(metadata.currentPage > metadata.minPage) {
        fetchUserList(metadata.currentPage - 1)
    }
});

$('#forward').on('click', function () {
    if(metadata.currentPage < metadata.maxPage) {
        fetchUserList(metadata.currentPage + 1)
    }
});

function bootstrap() {
    fetchUserList()
}

bootstrap();
