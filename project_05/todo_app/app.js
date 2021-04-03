let allTodos = [];

// let allTodos = [
//   {
//     title: "Make Bed",
//     dueDate: "03-10-2021",
//     description: "Fold blanket over bed",
//     isComplete: true,
//   },
//   {
//     title: "Cook Dinner",
//     dueDate: "04-24-2022",
//     description: "Boil crab",
//     isComplete: false,
//   },
//   {
//     title: "Exercise",
//     dueDate: "05-30-2025",
//     description: "Go for a run",
//     isComplete: false,
//   },
//   {
//     title: "Vacation",
//     dueDate: "09-12-2021",
//     description: "Horror convention in Dallas",
//     isComplete: false,
//   },
//   {
//     title: "Study Coding",
//     dueDate: "02-08-2021",
//     description: "Enroll in Fullstack Academy",
//     isComplete: true,
//   },
//   {
//     title: "Graduate from coding school",
//     dueDate: "08-14-2021",
//     description: "Graduate from Fullstack Academy",
//     isComplete: false,
//   },
// ];

let pendingTodos, completedTodos, expiredTodos;


function createElementFromTodo(todo) {
  // builds an element and returns it
  let todoElementTitle = todo.title;
  let todoElementdueDate = todo.dueDate;
  let todoElementDescription = todo.description;
  let todoElementIsComplete = todo.isComplete;
  let footer = $('<footer class="actions"></footer>')
  let deleteButton =  $('<button class="action delete">DELETE</button>')
  let completeButton = $('<button class="action complete">COMPLETE</button')
  console.log(deleteButton)
  console.log(completeButton)


  // work in progress start

  // return $(
  //       `<div class="todo">
  //       <h3><span class="title">${todoElementTitle}</span><span class="due-date">${todoElementdueDate}</span></h3>
  //       <pre>${todoElementDescription}</pre>

  //       ${todoElementIsComplete ? `<button class="action delete">DELETE</button>` : `<button class="action complete">COMPLETE</button>` }

  //     </div>`
  //     )

  // work in progress end

  if (todo.isComplete === true) {
    let todoElement = $(
      `<div class="todo">
      <h3><span class="title">${todoElementTitle}</span><span class="due-date">${todoElementdueDate}</span></h3>
      <pre>${todoElementDescription}</pre>
      <footer class="actions">

        <button class="action delete">Delete</button>
      </footer>
    </div>`
    );
    todoElement.data("todo", todo);
    return todoElement;
  } else {
    let todoElement = $(`<div class="todo">
      <h3><span class="title">${todoElementTitle}</span><span class="due-date">${todoElementdueDate}</span></h3>
      <pre>${todoElementDescription}</pre>
      <footer class="actions">
        <button class="action complete">Complete</button>

      </footer>
    </div>`);
    todoElement.data("todo", todo);
    return todoElement;
  }
}

$("main").on("click", ".action.complete", function () {
  let parentTodo = $(this).closest(".todo");
  let parentTodoObject = parentTodo.data("todo");
  console.log(parentTodo.html())
  parentTodoObject.isComplete = true;
  parentTodo.slideUp(function () {
    storeData();
    splitTodos();
    renderTodos();
  });
});

$("main").on("click", ".action.delete", function () {
  let parentTodo = $(this).closest(".todo");
  let deletedIndexOfItem = parentTodo.data("todo");
  let deletedTodos = allTodos.indexOf(deletedIndexOfItem);
  allTodos.splice(deletedTodos, 1)
  parentTodo.slideUp(function () {
    storeData();
    splitTodos();
    renderTodos();
  });
});


$('.left-drawer').hover(function (){
  let leftDrawer = $(this);

  leftDrawer.hasClass('left-drawer');
  $('#app').toggleClass('drawer-open');
});

function renderTodos() {
  // uses allTodos
  $("main .content").empty();

  // allTodos.forEach(function (everyToDo) {
  //   const todoList = createElementFromTodo(everyToDo);

  //   if (everyToDo.isComplete === false) {
  //     $(".pending-todos").append(todoList);
  //   } else {
  //     $(".completed-todos").append(todoList);
  //   }
  // });

  // rewriting RenderTodos section (module 3)

  pendingTodos.forEach(function (todo){
    $('.pending-todos').append(createElementFromTodo(todo))
  });

  completedTodos.forEach(function (todo) {
    $('.completed-todos').append(createElementFromTodo(todo))
  });

  expiredTodos.forEach(function (todo){
    $('.expired-todos').append(createElementFromTodo(todo))
  });

}


// Module 2

$(".add-todo").click(function () {
  $(".modal").addClass("open");
});

$(".create-todo").click(function (event) {
  event.preventDefault();
  console.log("This is the create todo function");
  let newObject = createTodoFromForm();
  allTodos.unshift(newObject);
  $(".todo-form").trigger("reset");
  $(".modal").removeClass("open");
  storeData();
  splitTodos();
  renderTodos();
});

$(".cancel-create-todo").click(function () {
  $('.modal').removeClass('open');
});

$(".remove-completed").click(function () {
  allTodos = allTodos.filter(function (todoItem) {
    return todoItem && !todoItem.isComplete;
  });
  storeData();
  splitTodos();
  renderTodos();
});

$(".remove-expired").click(function () {
  allTodos = allTodos.filter(function (todoItem) {
    return isCurrent(todoItem);
  });
  storeData();
  splitTodos();
  renderTodos();
});

function createTodoFromForm() {
  let todoForm = $(".todo-form");
  let newTodoTitle = $("#todo-title").val();
  let newTodoDate = $("#todo-due-date").val();
  let newTodoDescription = $("#todo-description").val();
  let todoObject = {
    title: newTodoTitle,
    dueDate: newTodoDate,
    description: newTodoDescription,
    isComplete: false,
  };
  return todoObject;
}
createTodoFromForm();

//Module 3

// let pendingTodos, completedTodos, expiredTodos ;

function isCurrent(todo) {
  const todoDueDate = new Date(todo.dueDate);
  const now = new Date();

  return now < todoDueDate;
}

function splitTodos() {
  pendingTodos = allTodos.filter(function (eachObjectInAllTodos){
    if (eachObjectInAllTodos.isComplete === false && isCurrent(eachObjectInAllTodos)){
      return eachObjectInAllTodos
    }
  })
  completedTodos = allTodos.filter(function(eachObjectInAllTodos){
    if (eachObjectInAllTodos.isComplete === true){
      return eachObjectInAllTodos
    }
  })
  expiredTodos = allTodos.filter(function (eachObjectInAllTodos){
    if (eachObjectInAllTodos.isComplete === false && !isCurrent(eachObjectInAllTodos)){
      return eachObjectInAllTodos
    }
  })

}

// Module 4

function storeData(){
  localStorage.setItem('allTodos', JSON.stringify(allTodos))
}

function retrieveData(){
  allTodos = localStorage.getItem('allTodos') === null ? [] :
  JSON.parse(localStorage.getItem('allTodos'))
}

function fetchDefaultTodos(){
  let todoDefault = [{
    title: 'insert title here',
    dueDate: 'insert date here',
    description: 'describe here',
    isComplete: false,
  }];
  return todoDefault;
}

retrieveData();
splitTodos();
renderTodos();
