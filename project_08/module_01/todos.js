const TODOS_URL = `https://jsonplace-univclone.herokuapp.com/todos`

function fetchTodos() {
    fetch(TODOS_URL)
  .then(function (response) {
    // This converts the response body to an object, returning is crucial here
    return response.json();
  })
  .catch(function (error) {
    // do something with the error
  });
}

function renderAllTodos(todos) {
    // if we want to purge old ones with successive calls:
    // $('.todo-list').empty();
    // todos.forEach(function (todo) {
    //   // build a todoElement
    //   console.log(todo)
    //   const todoElement = renderTodo(todo)
    //   // append it to the right thing
    //   if (todo.completed) {
    //     $('.complete').append(todoElement)
    //   } else {
    //     $('.incomplete').append(todoElement)
    //   }
    // });
    todos.filter(function(todo) {
        return todo.completed
    }).forEach(function (todo){
        const todoElement = renderTodo(todo)
        $('.complete').append(todoElement);
    })
    todos.filter(function(todo) {
        return !todo.completed
    }).forEach(function (todo){
        const todoElement = renderTodo(todo)
        $('.incomplete').append(todoElement)
    })
}

function renderTodo(todo) {
    return $(`<div class="todo">
    <h3>${todo.title}</h3>
    <footer>
      <button>${todo.completed ? "DONE" : "UNDO"}</button>
    </footer>
  </div>
    `)
}

function bootstrap() {
    fetchTodos().then(function (data) {
        renderAllTodos(data)
    })
}

bootstrap();
