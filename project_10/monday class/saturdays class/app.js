

$("form").on("submit", (e) => {
    e.preventDefault();

    const blogTitle = $('#blog-title').val()
    const blogDescription = $('#blog-description').val()
    const blogAuthor = $('#blog-author').val()

    console.log(blogTitle, blogDescription, blogAuthor)
});
