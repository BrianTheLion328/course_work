const BASE_URL = "https://desolate-shelf-78314.herokuapp.com";

function fetchPosts() {
  return fetch(`${BASE_URL}/posts`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      return data;
    })
    .catch(function (error) {
      console.error(error);
    });
}

function renderPosts(posts) {
  posts.forEach(function (post) {
    const postElement = createPostHTML(post);
    $("#posts").append(postElement);
  });
}

function createPostHTML(post) {
  return `
  <div class="card" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title">${post.title}</h5>
        <p class="card-text">${post.description}</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    `;
}

const registerUser = async (usernameValue, passwordValue) => {
  const url = `${BASE_URL}/auth/register`;
  try {
      const response = await fetch(url, {
          method: "POST",
          body: JSON.stringify({
              user: {
                username: usernameValue,
                password: passwordValue
            }
          }),
          headers: {
              "Content-Type": "application/json"
          }
      });
      const { data: {token} } = await response.json();
      localStorage.setItem("token", JSON.stringify(token))
      hideRegistration()
  } catch(error) {
      console.error(error);
  }
}

const loginUser = async (usernameValue, passwordValue) => {
  const url = `${BASE_URL}/auth/login`;
  try {
      const response = await fetch(url, {
          method: "POST",
          body: JSON.stringify({
              username: usernameValue,
              password: passwordValue
          }),
          headers: {
              "Content-Type": "application/json"
          }
      });
      const { data: {token} } = await response.json();
      localStorage.setItem("token", JSON.stringify(token))
      hideLogin()
  } catch(error) {
      console.error(error);
  }
}

$('.register form').on("submit", (event) => {
  event.preventDefault();
  const username = $('#registerInputUsername').val();
  const password = $('#registerInputPassword').val();
  registerUser(username, password);

});

$('.login form').on("submit", (event) => {
  event.preventDefault();
  const username = $('#loginInputUsername').val();
  const password = $('#loginInputPassword').val();
  loginUser(username, password);

});

const hideRegistration = () => {
  const token = localStorage.getItem("token");
  if (token) {
    $(".register").css("display", "none")
  } else {
  }
}

const hideLogin = () => {
  const token = localStorage.getItem("token");
  if (token) {
    $(".login").css("display", "none")
  } else {
  }
}

(async () => {
  hideRegistration();
  const posts = await fetchPosts()
  console.log(posts)
  renderPosts(posts)
})()


/////// Saturdays class code ///////
