$('.one button').click(function () {
    $('.one').text("Good Job!")
})
$('.two button').click(function () {
    $('.two').slideUp();
})
$('.three button').click(function () {
    let threeElement = $('<div>This is some text</div>')
    $('.three').append(threeElement)
})
$('.four button').on('click', () => {
    $('.four').html( $('.template-target').html() )

})
$('.five button').on('click', () => {
    $('.prepend-target').prepend( $('.five').clone() )

})
$('.six button').on('click', () => {
    $('.six').css('transform', 'rotate(180deg')
})

$('.seven button').on('click', () => {
    let newButton = $('<button>CLICK TO DISAPPEAR</button>')

    newButton.css({
        'margin': '5px',
        'padding':'5px',
        'background-color': 'red'
    })

    newButton.click(function () {
        $(this).fadeOut()
    })

    $('.seven').append(newButton)
})
