const BASE_URL = "https://strangers-things.herokuapp.com/api/2102-CPU-RM-WEB-PT";

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
const {author, title, description, price } = post;


  return $(`
  <div class="card" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title">${title}</h5>
        <p class="card-text">${description}</p>

        <ul class="list-group list-group-flush">
            <li class="list-group-item"><b>Seller:</b> ${author.username}</li>
            <li class="list-group-item"><b>Price:</b> ${price}</li>
        </ul>

        <button id="messageBtn" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Message
          </button>

            <button id="editBtn" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Edit
          </button>

           <a href="#" id="delete-button"> <svg class="svg-icon" viewBox="0 0 20 20">
            <path d="M10.185,1.417c-4.741,0-8.583,3.842-8.583,8.583c0,4.74,3.842,8.582,8.583,8.582S18.768,14.74,18.768,10C18.768,5.259,14.926,1.417,10.185,1.417 M10.185,17.68c-4.235,0-7.679-3.445-7.679-7.68c0-4.235,3.444-7.679,7.679-7.679S17.864,5.765,17.864,10C17.864,14.234,14.42,17.68,10.185,17.68 M10.824,10l2.842-2.844c0.178-0.176,0.178-0.46,0-0.637c-0.177-0.178-0.461-0.178-0.637,0l-2.844,2.841L7.341,6.52c-0.176-0.178-0.46-0.178-0.637,0c-0.178,0.176-0.178,0.461,0,0.637L9.546,10l-2.841,2.844c-0.178,0.176-0.178,0.461,0,0.637c0.178,0.178,0.459,0.178,0.637,0l2.844-2.841l2.844,2.841c0.178,0.178,0.459,0.178,0.637,0c0.178-0.176,0.178-0.461,0-0.637L10.824,10z"></path>
          </svg> </a>
  </div>
</div>
    `).data("post", post);
}

const registerUser = async (usernameValue, passwordValue) => {
  const url = `${BASE_URL}/users/register`;
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
  const url = `${BASE_URL}/users/login`;
  try {
      const response = await fetch(url, {
          method: "POST",
          body: JSON.stringify({user:
            {
              username: usernameValue,
              password: passwordValue
          }}),
          headers: {
              "Content-Type": "application/json"
          }
      });
      const { data: {token} } = await response.json();
      localStorage.setItem("token", JSON.stringify(token))
      hideLogin()
      hideRegistration();
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
  }
}

const hideLogin = () => {
  const token = localStorage.getItem("token");
  if (token) {
    $(".login").css("display", "none")
  }
}

(async () => {
  hideRegistration();
  hideLogin();
  const postPromise = await fetchPosts();
  const posts = await postPromise.data.posts;
  console.log(postPromise)
  renderPosts(posts)
})()


////// Post blog entry section //////

const postBlogEntry = async (requestBody) => {
   const token = JSON.parse(localStorage.getItem('token'))
    // if (token) {
    try{
  const request = await fetch(`${BASE_URL}/posts`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify(requestBody),
    });
} catch (error){
    console.error(error)
// }
}
}

$("#post-blog").on("submit", (e) => {
    e.preventDefault();

    const blogTitle = $('#blog-title').val()
    const blogDescription = $('#blog-description').val()
    const blogAuthor = $('#blog-author').val()
    const blogPrice = '$ ' + $("#blog-price").val();

    const requestBody = {
        post: {
          title: blogTitle,
          description: blogDescription,
          author: blogAuthor,
          price: blogPrice
        }
    }

    $('#posts').push(postBlogEntry(requestBody))
    $("form").trigger('reset')

    console.log(blogTitle, blogDescription, blogAuthor)
});


// editing a blog post

const editBlogEntry = async (requestBody, postId) => {
  const token = JSON.parse(localStorage.getItem('token'))
	try {
		const request = await fetch(`${BASE_URL}/posts/${postId}`, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
				"Authorization": `Bearer ${token}`
			},
			body: JSON.stringify(requestBody),
		})
	} catch(e) {
		console.error(e)
	}
}

$(posts).on("click", "#editBtn", () => {
  $("#exampleModal").modal('show');
  $("#exampleModal .modal-body").empty()
  $("#exampleModal .modal-title").text("Edit Post")
  $("#exampleModal .modal-body").append(`
  <form id="post-blog">
  <div class="mb-3 mt-5">
    <label for="blog-title" class="form-label">Blog Title</label>
    <input id="blog-title" class="form-control" type="text" required />
  </div>

  <div class="mb-3">
    <label for="blog-description" class="form-label">Description</label>
    <textarea
      id="blog-description"
      class="form-control"
      rows="4"
      cols="50"
      required
    ></textarea>
  </div>

  <div class="mb-3">
    <label for="blog-author" class="form-label">Author</label>
    <input id="blog-author" class="form-control" type="text" required />
  </div>

  <div class="mb-3">
    <label for="blog-price" class="form-label">Price</label>
    <input
      id="blog-price"
      class="form-control"
      type="number"
      required
    />
  </div>
</form>
  `)

  $("button").on("click", () => {
      $("#exampleModal").modal('hide')
  })
})

$('#posts').on('click', '#edit-post', function (){

  const blogTitle = $('#blog-title').val()
    const blogDescription = $('#blog-description').val()
    const blogAuthor = $('#blog-author').val()
    const blogPrice = $("#blog-price").val();

    const requestBody = {
        post: {
          title: blogTitle,
          description: blogDescription,
          author: blogAuthor,
          price: blogPrice
        }
    }

let editCard = $(this).closest('.card');
let editedData = editCard.data('post');
editBlogEntry(requestBody, editedData._id)
})

// deleting a blog entry //

async function fetchUser() {
  const token = JSON.parse(localStorage.getItem('token'))
  try {
    const currentUser = await fetch(`${BASE_URL}/users/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    })
    const result = await currentUser.json()
    console.log(result, "this is the fetch user result")
    return result;
  }catch (error){
    console.error(error)
  }
}

const deleteBlogEntry = async (postId) => {
  const user = await fetchUser()
  const userId = user.data._id
  const token = JSON.parse(localStorage.getItem('token'))
  console.log(userId, "this is userId")
  console.log(postId, "this is the PostId")
  if (userId == postId.author._id){
	try {
		const request = await fetch(`${BASE_URL}/posts/${postId._id}`, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
				"Authorization": `Bearer ${token}`
			}
		})
	} catch(e) {
		console.error(e)
	}
 } else {
   alert("You are not authorized to delete this post!")
 }
}

$('#posts').on('click', '#delete-button', function (){
  // console.log('delete testing testing')
  console.log(this)
  let deletedCard = $(this).closest('.card')
  let postData = deletedCard.data('post')
  console.log("this is the post data", postData)
  deleteBlogEntry(postData)
})

$('#logout').on('click', (event) => {
  localStorage.removeItem('token')
})

// message section //

$(posts).on("click", "#messageBtn", () => {
  $("#saveChanges").val("Send Message")
  $("#exampleModal").modal('show');
  $("#exampleModal .modal-body").empty()
  $("#exampleModal .modal-title").text("Send Message")
  $("#exampleModal .modal-body").append(`
          <div class="container">
          <form id="message-body">
          <div class="mb-3">
              <label for="message-body" class="form-label">Message Description</label>
              <textarea id="blog-description" class="form-control"  rows="4" cols="50" required></textarea>
          </div>
          </form>
      </div>
  `)

    $("button").on("click", () => {
      $("#exampleModal").modal('hide')
  })
})

