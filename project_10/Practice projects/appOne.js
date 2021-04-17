// // Alex's practice problems # 1
// //Reverse

// const numbers = [8, 3, 5, 11, 12, 17, 29];
// const moreNumbers = [111, 323, 546, 999, 22, 8094, 17, 4, 328];
// const helloDavid = ["d", "i", "v", "a", "D", "o", "l", "l", "e", "H"];
// const goodnightBrian = ["Brian", "Goodnight"];
// const pracArray = [true, "hello", 17, null];

// /* Write your code below */
// function reverseFunc(array) {
//   let reversedNumbers = [];

//   for (let index = array.length - 1; index >= 0; index--) {
//     let currentNumber = array[index];
//     reversedNumbers.push(currentNumber);
//   }

//   return reversedNumbers;
//   // use for loop to repeat process until theres no more numbers inside array
//   // create a variable that represents the new reverse-array
//   // .pop off the last number from the original array (or just use array[index] instead of array.pop())
//   // then .push() that popped off number into that new reverse-array
//   // return the new array
// }

// //////////////// end of problem 1 /////////////////

// // Practice Problem # 2
// // Whitespace

/* Write your code below */
function whiteList(sensitiveObject, allowedKeys) {
  let finalObject = {}

  for(let i = 0; i < allowedKeys.length; i++) {
    let currentKeyName = allowedKeys[i]

    if (sensitiveObject.hasOwnProperty(currentKeyName)) {
      finalObject[`${currentKeyName}`] = sensitiveObject[`${currentKeyName}`]
  }
}
return finalObject
}
/* Test your code below */
const importantObject = {
  secretCode: "blah blah blah",
  publicCode: "gimme a break",
  currentUserEmail: "matt@foo.bar",
  currentUserPassword: "hunter2",
};

const safeKeys = ["publicCode", "currentUserEmail"];

const sanitizedObject = whiteList(importantObject, safeKeys);

/* sanitizedObject should be:
  {
    publicCode: "gimme a break",
    currentUserEmail: "matt@foo.bar"
  }
*/

// // Alex practice problems #3
// // Drop lowest score


// /////////////// end of problem 2 /////////////////


// //Alex's practice problems #3
// // Drop Lowest Score


// /* Write your code below */
// function findLowestScore(scoreList) {}

// function dropLowestScore(scoreList) {}

// function dropLowestScores(scoreList, dropCount) {}

// /* Test your code below */
// const studentScores = [10, 30, 17, 4, 9, 11, 25];

// findLowestScore(studentScores); // should be 4
// dropLowestScore(studentScores); // should be [ 10, 30, 17, 9, 11, 25 ] (maybe we modify studentScores? maybe not?)
// dropLowestScores(studentScores, 3); // should be [ 30, 17, 11, 25 ] (again, maybe we modify studentScores? maybe not?)

// ///////////// end of problem  3 //////////////

// Alex's practice problems # 6
// Immortality

// let celebs = [
//   { id: 1, email: "keanu@foo.bar", isMortal: false, age: 33 },
//   { id: 2, email: "matt@foo.bar", isMortal: true, age: 40 },
//   { id: 3, email: "nic.cage@foo.bar", isMortal: false, age: 40 },
//   { id: 4, email: "swinton@foo.bar", isMortal: false, age: 45 },
//   { id: 5, email: "brodie@foo.bar", isMortal: true, age: 30 },
//   { id: 6, email: "katz@foobar", isMortal: true, age: 40 }
// ]

// let marvel = [
//   {id: "Thanos", isMortal: false},
//   {id: "Ironman", isMortal: false},
//   {id: "Thor", isMortal: true},
//   {id: "Gambit", isMortal: true},
//   {id: "Spiderman", isMortal: true},
// ]

// function age(people) {
//   let immortals = []
//   // your code here
//   people.forEach(function (person) {
//     if (person.isMortal) {
//       immortals.push(person.id)
//     }
//   })
//   return immortals
// }

// age(celebs) // [2, 5, 6] <~ returns the id of those that aged

// /* celebs is now equal to this:
// [
//   { id: 1, email: "keanu@foo.bar", isMortal: false, age: 33 },
//   { id: 2, email: "matt@foo.bar", isMortal: true, age: 41 },
//   { id: 3, email: "nic.cage@foo.bar", isMortal: false, age: 40 },
//   { id: 4, email: "swinton@foo.bar", isMortal: false, age: 45 },
//   { id: 5, email: "brodie@foo.bar", isMortal: true, age: 31 },
//   { id: 6, email: "katz@foobar", isMortal: true, age: 41 }
// ]
// */

/////////// end of problem 6 /////////////

// Alex's Practice Problems # 7
// Coin Flip

// Write a function that simulates a coin flip 50 times and return the number of heads and number of tails you got.

// function coinflip() {
//   let heads = 0;
//   let tails = 0;

//   for (let i = 1; i <= 50000; i++) {
//     let randomCoinFlip = Math.random()

//     if (randomCoinFlip >= 0.5) {
//       heads = heads + 1;
//     } else {
//       tails = tails + 1
//     }
//   }
//   return [heads, tails]
// }


////////// end of problem 7 //////////
