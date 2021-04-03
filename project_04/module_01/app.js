function setActive (sectionNumber) {
    $('.content .active, .left-nav .active').removeClass('active')

    // const dataSectionSelector = "[data-section=" + sectionNumber + "]"
    // const dataLinkToSelector = "[data-link-to=" + sectionNumber + "]"

    $(`[data-section=${ sectionNumber }], [data-link-to=${ sectionNumber }]`).addClass('active')

}

$('.left-nav a').click(function () {
    let theNumberThatWeJustClicked = $(this).data('link-to')
    setActive(theNumberThatWeJustClicked)
})

