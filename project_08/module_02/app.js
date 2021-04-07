const CARD_URL = `https://api.magicthegathering.io/v1/cards?pageSize=20`

function renderCard(card) {
    return `
    <div class="card">
        <h3>${card.name} - ${card.manaCost}</h3>
        <h4>${card.type}</h4>
        <h5 class="set-name" data-setname="${card.setName}">${card.setName}</h5>
        <pre>${card.text}</pre>
        ${card.imageUrl ? `<img src="${card.imageUrl}">`: ''}
    </div>
`
}

function renderCardList(cardList) {
    const resultsSection = $('#results')
    resultsSection.empty()

    cardList.forEach(function(card) {
        const cardElement = renderCard(card)
        resultsSection.append(cardElement)
    })
}

function fetchCardList(url) {
    return fetch(url)
        .then(function(response) {
            return response.json()
        })
        .then(function(data) {
            $('.searching').removeClass('active')
            return data.cards
        })
        .catch(function(error) {
            $('.searching').removeClass('active')
            console.log(error)
        })
}
$('#card-search').on('submit', function (event) {
    // prevent the form from actually submitting
    event.preventDefault()
    // read the `cardName` and `cardText` from the #cname and #ctext
    let name = $('#cname').val()
    let text = $('#ctext').val()
    // clear the values for the two elements
    $('#card-search').trigger('reset')
    // build the URL for fetchCardList
    let url = `${CARD_URL}` +
        `${name ? `&name=${name}` : ''}` +
        `${text ? `&text=${text}` : ''}`
    // call fetchCardList
    $('.searching').addClass('active');
    fetchCardList(url)
        .then(function(cardList) {
            renderCardList(cardList)
        }
    )
});

$('#results').on('click', '.card .set-name', function () {
    const setName = $(this).data('setname')
    let url = `${CARD_URL}&setName=${setName}`

    fetchCardList(url)
    .then(function(cardList) {
        renderCardList(cardList)
    })
});


const CARD_URL = `https://api.magicthegathering.io/v1/cards?pageSize=20`

function fetchData(url) {
    return fetch(url)
    .then(function (res) {
        return res.json();
    })
    .catch(function (err) {
      console.error(err);
    });
}
