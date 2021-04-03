const headerEl = $('<header>')

 headerEl.html('<span>Company Name</span><nav><a href="#link">Link</a></nav>')

 // Creates a NEW header tag with inner HTML as above, result is:
 // <header><span>Company Name</span><nav><a href="#link">Link</a></nav></header>

 $('body').append(headerEl)
 // adds the header element to the end of the body element

const sloMoH3 = $('<h3>')
sloMoH3.text('Hello, World!')

const sloMoP = $('<p>')
sloMoP.html('<b>This</b> is my text')

const sloMoImg = $('<img>')
sloMoImg.attr('src', "http://placeimg.com/640/480/nature?1")

$('.slo-mo').append(sloMoH3)
$('.slo-mo').append(sloMoP)
$('.slo-mo').append(sloMoImg)

$('.normal-speed').append(
    $('<h3>Hello, World</h3>'),
    $('<p><b>This</b> is my text</p>'),
    $('<img src="http://placeimg.com/640/480/nature?1"/>')
)

$('.rewind')
    .prepend(sloMoH3)
    .prepend('<p><b>This</b> is my text</p>')
    .prepend('<img src="http://placeimg.com/640/480/nature?1"/>')

$('.turbo').html(`
    <h3>Hello, World</h3>
    <p><b>This</b> is my text</p>
    <img src="http://placeimg.com/640/480/nature?1"/>
`)

















// $('.normal-speed').append(
// $('<h3>Hello, World!</h3>'),
// $('<p>This is my text</p>'),
// $('<img src="http://placeimg.com/640/480/nature?1"/>'),
// )

// $('.rewind')
//     .prepend($('<h3>Hello, World!</h3>'))
//     .prepend($('<p>This is my text</p>'))
//     .prepend($('<img src="http://placeimg.com/640/480/nature?1"/>'))


// $('.turbo').html(`
// $('<h3>Hello, World!</h3>'),
// $('<p>This is my text</p>'),
// $('<img src="http://placeimg.com/640/480/nature?1"/>'),
// `)
