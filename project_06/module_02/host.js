const GUEST_LIST = [
    { name: 'Leonard', count: 6 },
    { name: 'Sharon', count: 4 }
  ];


function buildGuestCard(guest) {
    let guestObject = $(`<div class="guest-card">
    <span>${guest.name}, party of ${guest.count}</span>
  </div>`
    );
    return guestObject
}
// let newGuest = {
//     name: 'Brian',
//     count: 2,
// }


function renderGuestList() {
    GUEST_LIST.forEach(function (guest) {
        let card = buildGuestCard(guest)
        $('.guest-list').append(card)
    })

}
renderGuestList()


function addGuestToList(event) {

}

$('.guest-form').submit(addGuestToList);
