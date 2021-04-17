const DEFAULT_PREFERENCES = {
  darkMode: false,
  largeFont: false,
  expertMode: false,
}

let userPreferences = {};

function setPreferences() {
  localStorage.setItem('preferences', JSON.stringify(userPreferences));
}

function getPreferences() {
  const gotValue = localStorage.getItem('preferences');
  if(gotValue) {
    userPreferences = JSON.parse(gotValue);
  }
}

function updateInterface() {
  setColorMode()
  setBaseFontSize()
  drawAside()
}

function setColorMode() {
  $('#app').attr('class', userPreferences.darkMode ? 'dark' : 'light');
}

function setBaseFontSize() {
  $('#app').css('font-size', userPreferences.largeFont ? '24px' : '16px')
}

function drawAside() {
  $('aside').html(
    `<button>ALL USERS</button>
        <button>ALL USERS</button>
        ${ userPreferences.expertMode
            ? `<button>EXPERT MODE</button>
               <button>EXPERT MODE</button>
            `: "" }
        <button>ALL USERS</button>`
  )
}

function populateCustomControls() {
  // console.log('Object.keys(userPreferences) : ', Object.keys(userPreferences));
  const preferencesNames = Object.keys(userPreferences);
  preferencesNames.forEach(function (userPreference) {
    $(`[name=${userPreference}]`).attr('checked', userPreferences[userPreference])
  })
}

$('.trigger').click(function () {
  $('.custom-controls').toggleClass('open');
});

$('.custom-controls').on('input', 'input', function (event) {
  let preferenceValue = $(this).is(':checked')
  let preferenceKey = $(this).attr('name')
  userPreferences[preferenceKey] = preferenceValue
  setPreferences()
  updateInterface()
});

getPreferences();
populateCustomControls();
updateInterface();
