let red;
let blue;
let green;

function updateValues() {
    red = $('#red').val()
    blue = $('#blue').val()
    green = $('#green').val()
}

function updatePage() {
    $('.red-value').text(red)
    $('.blue-value').text(blue)
    $('.green-value').text(green)

    $('.preview').css('background-color', `rgb( ${red}, ${green}, ${blue})` )
}

function updateAll() {
    updateValues()
    updatePage()
}

$('.controls input').on('input', function () {
    updateAll();
})
