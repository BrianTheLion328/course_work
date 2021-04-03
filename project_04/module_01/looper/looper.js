for (let index = 0; index < 10; index++) {
    let newImage = $('<img>')
    let srcOfNewImage = 'http://placeimg.com/640/480/nature?' + index
    newImage.attr('src', 'http://placeimg.com/640/480/nature')
    $('body').append(newImage)
}
// http://res-4.cloudinary.com/ybmedia/image/upload/c_crop,h_1074,w_1911,x_89,y_135/c_fill,f_auto,h_495,q_auto,w_880/v1/m/0/d/0dd67126380ea162792935113bba2341ca1f5b0d/seahawks-asking-price-russell-wilson-three-first.jpg
