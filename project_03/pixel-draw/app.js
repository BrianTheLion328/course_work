// Module 1 JS code

// for( let i = 0; i < 64; i++) {
//     let newDiv = $('<div class="cell">')
//     $('.grid').append(newDiv)
// };

const PALETTE = ['blue', 'red', 'yellow', 'green', 'orange', 'purple', 'white', 'black'];

// for( let colorIndex = 0; colorIndex < PALETTE.length; colorIndex++) {
//     const nextColor = PALETTE[colorIndex];
//     let newButton = $('<button>').css('backgroundColor', nextColor);
//     $('.palette').append(newButton);

// }

// Module 2 JS code

function makePalette() {
    for( let colorIndex = 0; colorIndex < PALETTE.length; colorIndex++) {
        const nextColor = PALETTE[colorIndex];
        let newButton = $('<button>').css('backgroundColor', nextColor);
        $('.palette').append(newButton);
    }
    $('.palette button').first().addClass('active');
}

makePalette();

function makeGrid() {
    for( let i = 0; i < 64; i++) {
        let newDiv = $('<div class="cell">')
        $('.grid').append(newDiv)
    }
}

makeGrid();

function onPaletteClick() {
    $('.palette .active').removeClass('active');
    $(this).addClass('active');
}
$('.palette button').click(onPaletteClick)

function onGridClick() {
    const color = $('.palette .active').css('backgroundColor');
    const cellColor = $(this).css('backgroundColor');


    if(cellColor == color) {
        $(this).css('backgroundColor', "");
    } else {
        $(this).css('backgroundColor', color);
    }
}


$('.grid .cell').click(onGridClick);

// Module 3 JS code

function onClearClick() {
    $('.grid .cell').css('backgroundColor', '');
}

$('.controls .clear').click(onClearClick);

function onFillAllClick() {
    let thisColor = $('.palette .active').css('backgroundColor');
    $('.grid .cell').css('backgroundColor', thisColor);
}
$('.controls .fill-all').click(onFillAllClick);

function onFillEmptyClick() {
    let thisColor = $('.palette .active').css('backgroundColor');
    let cells = $('.cell');

    for (let i = 0; i < cells.length; i++) {
      let thisCell = cells[i];

      console.log( $(thisCell).css('backgroundColor') )

      if ( $(thisCell).css('backgroundColor') == 'rgba(0, 0, 0, 0)') {
        $(thisCell).css('backgroundColor', thisColor);
      }
    }
  }

  $('.fill-empty').click(onFillEmptyClick);
