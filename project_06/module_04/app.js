const DEFAULT_PREFERENCES = {
  darkMode: false,
  largeFont: false,
  expertMode: false,
};

let userPreferences;

function setPreferences() {
  localStorage.setItem('userPreferences', JSON.stringify(userPreferences));
}

function getPreferences() {

  userPreferences = localStorage.getItem('userPreferences')
    ? JSON.parse(localStorage.getItem('userPreferences')) :
     DEFAULT_PREFERENCES
}

function updateInterface() {}

function setColorMode() {
    $('#app').attr('class', userPreferences.darkMode ? 'dark' : 'light')
}

function setBaseFontSize() {
    $('html').css('fontSize', userPreferences.largeFont ? '24px' : '16px')
}

function drawAside() {
    // $('aside').html(`
    // <button>ALL USERS</button>
    // <button>ALL USERS</button>
    // ${ userPreferences.expertMode ?
    // `<button>EXPERT MODE</button>
    // <button>EXPERT MODE</button>
    // : ""`}
    // <button>ALL USERS</button>
    // `
}

function populateCustomControls() {
    Object.keys(userPreferences).forEach(function(preferenceKey){
        let preferenceValue = userPreferences[preferenceKey]
        $(`[name=${preferenceKey}`).attr('checked', preferenceValue)

    })
}

$(".trigger").click(function () {
  $(".custom-controls").toggleClass("open");
});

$(".custom-controls").on("input", "input", function () {
    let preferenceKey = $(this).attr('name')
    let preferenceValue = $(this).is(':checked')
    userPreferences[preferenceKey] = preferenceValue
    setPreferences()
    updateInterface();
});

getPreferences();
populateCustomControls();
updateInterface();
