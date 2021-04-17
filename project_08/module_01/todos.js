const TODOS_URL = `https://jsonplace-univclone.herokuapp.com/todos`

function fetchTodos() {
    return fetch(TODOS_URL)
        .then(function (response) {
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
    //    const todoElement = renderTodo(todo)
    //    if (todo.completed) {
    //         $('.complete').append(todoElement);
    //    } else {
    //        $('.incomplete').append(todoElement)
    //    }

    // });


    todos.filter(function(todo) {
        return todo.completed
    }).forEach(function (todo) {
        const todoElement = renderTodo(todo)
        $('.complete').append(todoElement);
    })

    todos.filter(function(todo) {
        return !todo.completed
    }).forEach(function (todo) {
        const todoElement = renderTodo(todo)
        $('.incomplete').append(todoElement);
    })
  }


function renderTodo(todo) {
    return $(`
    <div class="todo">
    <h3>${todo.title}</h3>
    <footer>
        <button>${todo.completed ? "DONE" : "UNDO"}</button>
    </footer>
    </div>
    `)
}

function bootstrap() {
    fetchTodos().then(function(data) {
        renderAllTodos(data)
    })
}

bootstrap();
