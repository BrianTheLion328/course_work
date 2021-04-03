let gameState = {

    canvas:[
        ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],


    ]

};



let snake = {
    body: [ [10, 5], [10, 6], [10, 7], [10, 8] ],


    nextDirection: [0, -1],
    apple: [10, 5]
}



function buildInitialState() {
    renderState()
    buildSnake()
}

// render the state
function renderState() {
    const canvasElement = $('#canvas');
    canvasElement.empty()

    gameState.canvas.forEach(function (row, rowIndex){
        row.forEach(function (segment, segmentIndex){

            const segmentElement =$(`<div class="segment" data-x="${rowIndex}" data-y="${segmentIndex}"></div>`)
            canvasElement.append(segmentElement)
        })

    })
}


function buildSnake(){
    $('.segment').removeClass('snake')

    const snakeHead = snake.body[0]
    const snakeHeadX = snakeHead[0]
    const snakeHeadY = snakeHead[1]

    const newSnakeHeadX = snakeHeadX + snake.nextDirection[0]
    const newSnakeHeadY = snakeHeadY + snake.nextDirection[1]
    const newSnakeHead = [newSnakeHeadX, newSnakeHeadY]

    snake.body.unshift(newSnakeHead)
    snake.body.pop()



    snake.body.forEach(function (coordinates) {
        const coordinateX = coordinates[0]
        const coordinateY = coordinates[1]



        const segmentElement = $(`[data-x="${coordinateX}"][data-y="${coordinateY}"]`)

        segmentElement.addClass('snake')
    })
}


// listeners
function onBoardClick() {


  renderState() // show the user the new state
}

$('.board').on('click', onBoardClick);


setInterval(tick, 150)


//refresh the screen in an interval
function tick() {
    buildSnake()
  }


//   setInterval(tick, 1000 / 30) // as close to 30 frames per second as possible

  $(window).on('keydown', function (event) {
    if(event.keyCode === 37) {
        snake.nextDirection = [0, -1]
    }
    if(event.keyCode === 39) {
        snake.nextDirection = [0, 1]
    }
  });

  buildInitialState()
