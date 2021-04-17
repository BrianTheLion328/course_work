const BASE_GROCERIES = [
    { name: 'banana', price: 49 },
    { name: 'tomato', price: 129 },
    { name: 'orange', price: 99 },
    { name: 'pepper', price: 139 },
    { name: 'milk', price: 449 }
  ];


function populateBase() {
    BASE_GROCERIES.forEach(function (grocery, index) {
        console.log(index)
        const groceryItemElement = buildGroceryElement(grocery)
        $('.grocery-list').append(groceryItemElement)
    })
}

function buildGroceryElement(grocery) {
    let groceryItemPrice = grocery.price / 100
    let groceryItemName =  grocery.name
    let newGroceryItem = $(`<div class="grocery-item">${groceryItemName} : ${groceryItemPrice}</div>`)
    return newGroceryItem

}

$('#new-grocery').submit(function (event) {
    event.preventDefault()

    const groceryNameValue = $('#grocery-name').val()
    const groceryPriceValue = $('#grocery-price').val()

    const newObjectElement = {
        name: groceryNameValue,
        price: groceryPriceValue
     }

     const groceryItemElement = buildGroceryElement(newObjectElement)

     $('.grocery-list').append(groceryItemElement)
     $(this).trigger('reset')

});


populateBase()
