function onMapClick(event) {
    console.log(this)
    console.log(event)

    const appElement = $(this);
    const target = $(event.target);
    const userPressedShiftKey = event.shiftKey;

    if( userPressedShiftKey === true && target.hasClass('pin') ) {
        target.remove()
    } else if (!target.hasClass('pin') ){
        const pinX = event.offsetX;
        const pinY = event.offsetY;
        const newPinElement = $('<div class="pin">')
        newPinElement.css('left', pinX)
        newPinElement.css('top', pinY)

        appElement.append(newPinElement)

    }
}



$('.app').click(onMapClick) ()
