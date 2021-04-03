function reverse(text) {
    return text.split('').reverse().join('');
  }
  function scream(text) {
    return text.toUpperCase() + "!!!";
  }
  function drawOut(text) {
    return text.split('').join("...");
  }
  let textFunction = reverse;

  function updateText() {
      const userInput = $('#user-input').val()
      const outputText = textFunction(userInput)

      $('#transformed').text( outputText )
  }
  $('input[type=radio]').click(function (){
      const id = $(this).attr('id')

      if( id === "reverse" ) {
          textFunction = reverse
      } else if (id === "scream") {
          textFunction = scream
      } else if (id === "draw-out") {
          textFunction = drawOut
      }

      updateText()
  })
  
  $('#user-input').on('input', updateText)
