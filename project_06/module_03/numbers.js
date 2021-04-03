const VALUES = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12
  ];

  function draw(valueList) {
      let cardList = $('.card-list')
      cardList.empty()
      valueList.forEach(function (value) {
          const numberCard = $(`<div class="card">${value}</div>`)
      cardList.append(numberCard)

      })
  }

  $('.controls button').click(function () {
    $('.controls .selected').removeClass('selected');
    $(this).addClass('selected');
  });

$('.even').click(function (){
    let evenNumbers = VALUES.filter(function (value){
        return value % 2 === 0
    })

    draw(evenNumbers)
})


$('.odd').click(function (){
    let oddNumbers = VALUES.filter(function (value) {
        return value % 2 !== 0
    })
    draw(oddNumbers)
})


$('.all').click(function (){
    draw(VALUES)
})

$('.card-list').on('click', '.card', function () {
    let textValue = $(this).text()
    let numberValue = Number(textValue)

    let indexOfNumberThatMatches = VALUES.indexOf(numberValue)
    VALUES.splice(indexOfNumberThatMatches, 1)
    $(this).remove()

  });


  draw(VALUES);
