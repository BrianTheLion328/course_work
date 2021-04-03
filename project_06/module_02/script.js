// Vanilla functions


//smallOne
function smallOne(x, y) {
    if (x < y) {
        return x
    } else {
        return y
    }
}

// function smallOnePartTwo(x, y) {
//     if (x < y) {
//         return x
//     }
//         return y

// }

console.log(smallOne(4, 5))

console.log(smallOne(10, 11))

console.log(smallOne(1000, 4))

//rotateRight
const produceArray = ['apple', 'banana', 'potato',]

function rotateRight(someArray) {
    const popped = someArray.pop()
    someArray.unshift(popped)
}

console.log(produceArray)

rotateRight(produceArray);

console.log(produceArray)


// rotateLeft
const exerciseEquipmentArray = ['treadmill', 'barbell', 'peloton']
function rotateLeft(someArray) {
    const element = someArray.shift()
    someArray.push(element)
}

console.log(exerciseEquipmentArray)
rotateLeft(exerciseEquipmentArray)
console.log(exerciseEquipmentArray)
