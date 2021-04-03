let game;
let totalTime = 30;
let result = 0;

const timeLeftDisplay = $("#timer-display");
const startButtonEasy = $(".starteasy");
const startButtonHard = $(".starthard");

// making moles appear on gameboard

function buildMoles() {

//   Here, I'm setting the attribute "value" for all
//   ".moles" DIVs to be reset to 1 after each cycle
//   of setInterval in "easyGame()" and "hardGame()"
  $('.moles').attr("value", 1)

  if ($('#timer-display').text() >= 1) {

    $(".moles").removeClass("active-mole");
    let moles = [];
    for (i = 0; i < 3; i++) {
      let randomNumber = Math.floor(Math.random() * 10);
      moles.push(randomNumber);
    }

    moles.forEach(function (mole) {
      $(`.mole${mole}`).addClass("active-mole");
    });

    buildRabbit();

  } else {
      $('.moles').removeClass("active-mole");
      $('.moles').removeClass("active-rabbit");
  }
};
// making rabbit appear on gameboard

function buildRabbit() {
  $(".moles").removeClass("active-rabbit");
  let moles = [];
  for (i = 0; i < 1; i++) {
    let randomNumber = Math.floor(Math.random() * 10);
    moles.push(randomNumber);
  }
  moles.forEach(function (mole) {
    $(`.mole${mole}`).removeClass("active-mole");
    $(`.mole${mole}`).addClass("active-rabbit");
  });
};

// I added this function to simplify the
// board clearing logic at the end of each game
function clearBoard() {
  $('.moles').removeClass("active-mole");
  $('.moles').removeClass("active-rabbit");
};

// I added this function to simplify the
// disable button logic at the beginning of each game
function disableButtons() {
  startButtonEasy.attr("disabled", true);
  startButtonHard.attr("disabled", true);
};

// I added this function to simplify the
// enable button logic at the end of each game
function enableButtons() {
  startButtonEasy.attr("disabled", false);
  startButtonHard.attr("disabled", false);
};

// start buttons section
function easyGame() {

  // When a User begins a new Easy game,
  // the countdown will be reset to 30
  $('#timer-display').text(30);
  $('.score').text(0);

  // I refined this code to capture the return
  // value of "setInterval" into the variable
  // "timer," which is passed into clearInterval
  let timer = setInterval(function () {

    // I refined the logic here to make the
    // "clearInterval()" and "clearBoard()"
    // dependent upon the timer display being "0"
    if ($('#timer-display').text() == 0) {
      clearBoard();
      clearInterval(timer);
    } else {
      buildMoles();
    }
  }, 1000);
};

function hardGame() {

  // When a User begins a new Hard game,
  // the countdown will be reset to 30
  $('#timer-display').text(30);
  $('.score').text(0);

  // I refined the logic here to make the
  // "clearInterval()" and "clearBoard()"
  // dependent upon the timer display being "0"
  let timer = setInterval(function () {
    // I refined the logic here to make the
    // "clearInterval()" and "clearBoard()"
    // dependent upon the timer display being "0"
    if ($('#timer-display').text() == 0) {
      clearBoard();
      clearInterval(timer);
    } else {
      buildMoles();
    }
  }, 400);
};
// changed the interval speed here to 400ms since 200ms was near impossible!
startButtonEasy.click(function (event) {
  // When a User clicks on "Start Game (Easy)",
  // the "result" variable used in the "addPoints()"
  // function and the score are automatically reset to "0"
  result = 0;
  disableButtons();
  countDown();
  // turn on clock and end game when clock reaches 0.
  easyGame();
});

startButtonHard.click(function () {
  // When a User clicks on "Start Game (Easy)",
  // the "result" variable used in the "addPoints()"
  // function and the score are automatically reset to "0"
  result = 0;
  disableButtons();
  countDown();
  // turn on clock and end game when clock reaches 0.
  hardGame();
});

// Countdown timer function

function countDown() {

  // Call "addPoints" function to run at the beginning of each countdown
  addPoints();

  let timeLeft = 30;

  // Here, I have captured the return value of "setInterval"
  // into a variable named "timer" and used it to clear the
  // interval
  let timer = setInterval(function () {

  if (timeLeft == 0) {
    // Here, I'm using the return value of "setInterval"
    // stored in "timer" to properly clear the interval.
    clearInterval(timer);
    enableButtons();
  }

  timeLeftDisplay.html(timeLeft);
  timeLeft -= 1;

  }, 1000);
}

// adding points for hitting moles
// here is where im having trouble below, not sure this is right?

const addPoints = function () {
  // To begin, I set up the click behavior to be observable across all
  // of the game board instead of just each mole circle.
  $('.moles').click(function () {
    // Here, the ".moles" DIV must have both the "active-mole" class and
    // the "value" attribute as "1" in order to be clickable.
    if ( $(this).hasClass("active-mole") && $(this).attr('value') != 0 ) {
      // Here, I set the attribute "value" to "0" if it has been clicked.
      // In other words, it's "used up" it's available clicks (1) for the
      // current cycle.
      $(this).attr('value', 0);
      $(".score").text(result += 1);
    } else if ( $(this).hasClass("active-rabbit") && $(this).attr('value') != 0 ) {
      // Here, I set the attribute "value" to "0" if it has been clicked.
      // In other words, it's "used up" it's available clicks (1) for the
      // current cycle.
      $(this).attr('value', 0);

      // This prevents the user's score from going into negative values
      // if they are already at "0"
      if ( result != 0 ) {
        $(".score").text(result -= 1);
      }
    }
  });
};
