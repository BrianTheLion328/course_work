$('.red h3').text('Abacus Central');

$('.blue h3').text('Grenadine Dreams');

$('.white h3').html('<code>CODE</code> Central');

$('header h1').text('Hello, World!');

$('body').css('font-family', 'sans-serif');

$('body').css('background-color', '#777');

$('section').css('display', 'flex');

$('.red, .blue, .white')
.css('border', '1px solid black')
.css('padding', '15px')
.css('margin', '5px')
.css('flex', '1');

$('.red')
.css('background-color', 'red')
.css('color', 'white');


$('.blue')
.css('background-color', 'blue')
.css('color', 'white');

$('code').css('font-size', '1.7em');

$('.lead-cards p')
.css('font-family', 'cursive');

$('section:nth-of-type(2)')
.css('transition', 'transform 3s ease')
.css('transform', 'rotate(30deg) scale(.5)');

$('.deprecated').remove()
