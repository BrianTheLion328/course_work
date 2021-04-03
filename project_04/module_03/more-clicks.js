$('.task-input button').on('click', () => {
    const input = $('.task-input input')
    const value = input.val()

    if (value.length > 0) {
        const listItem = $('<li>')
        listItem.text(value)
        $('.task-list').append(listItem)
        input.val("")

    }
})

$('.decider button').on('click', () => {
    $('.status').toggleClass('active')


if( $('.status').hasClass('active')) {
    $('.status').text("on")
    $('.decider button').text("Turn Off")
    $('.decider img').attr('src', 'https://media.giphy.com/media/szmSyB2PnehgY/giphy.gif')
} else {
    $('.status').text("off")
    $('.decider button').text("Turn On")
    $('.decider img').attr('src', 'https://si.wsj.net/public/resources/images/BN-WB523_1109RO_12S_20171109172506.jpg')
}

})

$('.cool-kids button').on('click', function () {
    const backgroundColorSelected = $(this).css('backgroundColor')
    $('.cool-kids main').css('backgroundColor', backgroundColorSelected)
    console.log(backgroundColorSelected)
})
