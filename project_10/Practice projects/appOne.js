// // Alex's practice problems # 1
// //Reverse

const numbers = [8, 3, 5, 11, 12, 17, 29];
const moreNumbers = [111, 323, 546, 999, 22, 8094, 17, 4, 328];
const helloDavid = ["d", "i", "v", "a", "D", "o", "l", "l", "e", "H"];
const goodnightBrian = ["Brian", "Goodnight"];
const pracArray = [true, "hello", 17, null];

/* Write your code below */
function reverseFunc(array) {
  let reversedNumbers = [];

  for (let index = array.length - 1; index >= 0; index--) {
    let currentNumber = array[index];
    reversedNumbers.push(currentNumber);
  }

  return reversedNumbers;
  // use for loop to repeat process until theres no more numbers inside array
  // create a variable that represents the new reverse-array
  // .pop off the last number from the original array (or just use array[index] instead of array.pop())
  // then .push() that popped off number into that new reverse-array
  // return the new array
}

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

//  sanitizedObject should be:
//   {
//     publicCode: "gimme a break",
//     currentUserEmail: "matt@foo.bar"
//   }
// /////////////// end of problem 2 /////////////////

// //Alex's practice problems #3
// // Drop Lowest Score

// Write your code below //
function findLowestScore(scoreList) {
  // enter an array of scores
  // highlight(return) the lowest score. Thats it.
  // use Math.min(...variableName)
  const lowestNumber = Math.min(...scoreList)

  return lowestNumber
}
function dropLowestScore(scoreList) {
  // taking an array and cutting out the lowest score from the array.
  // return a new array with the lowest score cut out.
  const lowestScore = findLowestScore(scoreList)
  if(scoreList.length > 0){
    for (i = 0; i < scoreList.length; i++) {
     if(scoreList[i] == lowestScore){
       scoreList.splice(i,1)
       return scoreList
     }
  }
  } else {
    // if the array argument is empty, just return an empty array
    return scoreList
  }
}
function dropLowestScores(scoreList, dropCount) {
  // here, just use the previous 2 functions to run as many times as is the value of dropCount
  if (dropCount)
  // if the drop count exists...
  for (let i = 0; i < dropCount; i++){
    // then loop through the number of times as is the value of dropCount...
    if (dropCount > 0) {
      // and as long as that value is NOT 0...
      dropLowestScore(scoreList)
      // call the dropLowestScore function as many times to match the value of dropCount. So...
      //... if dropCount is 6, you want to call dropLowestScore 6 times to remove the lowest 6 numbers.
    }
  }
  return scoreList
  // holy crap this actually worked!!!!!!!!
 }

/* Test your code below */
const studentScores = [10, 30, 17, 4, 9, 11, 25];
const classScores = [98, 75, 68, 45, 100, 106, 97, 96, 86, 88, 82, 80, 79, 77, 94]

// findLowestScore(studentScores); // should be 4
// dropLowestScore(studentScores); // should be [ 10, 30, 17, 9, 11, 25 ] (maybe we modify studentScores? maybe not?)
// dropLowestScores(studentScores, 3); // should be [ 30, 17, 11, 25 ] (again, maybe we modify studentScores? maybe not?)

// ///////////// end of problem  3 //////////////

// Alex's practice problems # 4
// Very important constant, DO NOT TOUCH //
const decoderRing = [
  'l', 'w', 'a', 'i', 'f', 'v', 'y', 'u', 'o', 'e',
  'r', 's', 'z', 'n', 'm', 'b', 'j', 'k', 'h', 'g',
  'd', 't', 'q', 'x', 'c', 'p', ' ', ',', '.', '!',
  '?'
]

/* Write your code below */
function decode( codedText ) {
  // take an array of string values and pull them out to make a word
  let decodedMessage = '';

for (let i = 0; i < codedText.length; i++){
  decodedMessage += decoderRing[codedText[i]]
}
return decodedMessage
}

function encode( plainText ) {
// take a string/word and break it up into individual array indexes
const encodedText = [];
for (let i = 0; i < plainText.length; i++){
  let newArray = decoderRing.indexOf(plainText[i])
  encodedText.push(newArray)
}
return encodedText
}

// /* Test your code below */
const secretMessage = "shhh!"
const encodedMessage = encode( secretMessage ) // what should this look like?
const decodedMessage = decode( encodedMessage ) // what should this look like?

//////////// end of problem 4 ///////////////

// Alex's practice problems # 5
// Shopping

/* Important constants, don't modify: */
const PRICES = {
  "sweater": { cost: 3999 },
  "jeans": { cost: 4999 },
  "blouse": { cost: 3999 },
  "chinos": { cost: 2999 },
  "distressed jeans": { cost: 7499 },
}

const DISCOUNTS = {
  "sweater": 30,
  "jeans": 15,
  "chinos": 10,
}

/* Write code below */
function convertBasketToItemCounts(basket) {
  /* your code goes here */

  return itemCounts
}

function convertItemCountsToCosts(itemCounts) {
  /* your code goes here */

  return costs
}

function applyDiscountsToCosts(costs) {
  /* your code goes here */

  return discountedCosts
}

function buildReceiptFromDiscountedCosts(discountedCosts) {
  /* your code goes here */

  return receipt
}

function printReceipt( receipt ) {
  /* your code goes here */
}


/* Test code below */
const customerBasket = [
  "sweater", "sweater", "blouse",
  "chinos", "sweater", "blouse",
  "distressed jeans", "sweater"
]

// const itemCounts = convertBasketToItemCounts( customerBasket )
// const costs = convertItemCountsToCosts( itemCounts )
// const discountedCosts = applyDiscountsToCosts( costs )
// const receipt = buildReceiptFromDiscountedCosts( discountedCosts )

// printReceipt( receipt )

// Alex's practice problems # 6
// Immortality

let celebs = [
  { id: 1, email: "keanu@foo.bar", isMortal: false, age: 33 },
  { id: 2, email: "matt@foo.bar", isMortal: true, age: 40 },
  { id: 3, email: "nic.cage@foo.bar", isMortal: false, age: 40 },
  { id: 4, email: "swinton@foo.bar", isMortal: false, age: 45 },
  { id: 5, email: "brodie@foo.bar", isMortal: true, age: 30 },
  { id: 6, email: "katz@foobar", isMortal: true, age: 40 }
]

let marvel = [
  {id: "Thanos", isMortal: false},
  {id: "Ironman", isMortal: false},
  {id: "Thor", isMortal: true},
  {id: "Gambit", isMortal: true},
  {id: "Spiderman", isMortal: true},
]

function age(people) {
  let immortals = []
  // your code here
  people.forEach(function (person) {
    if (person.isMortal) {
      immortals.push(person.id)
    }
  })
  return immortals
}

// age(celebs) // [2, 5, 6] <~ returns the id of those that aged

// // celebs is now equal to this:
// [
//   { id: 1, email: "keanu@foo.bar", isMortal: false, age: 33 },
//   { id: 2, email: "matt@foo.bar", isMortal: true, age: 41 },
//   { id: 3, email: "nic.cage@foo.bar", isMortal: false, age: 40 },
//   { id: 4, email: "swinton@foo.bar", isMortal: false, age: 45 },
//   { id: 5, email: "brodie@foo.bar", isMortal: true, age: 31 },
//   { id: 6, email: "katz@foobar", isMortal: true, age: 41 }
// ]
// //

/////////// end of problem 6 /////////////

// Alex's Practice Problems # 7
// Coin Flip

// Write a function that simulates a coin flip 50 times and return the number of heads and number of tails you got.

function coinflip() {
  let heads = 0;
  let tails = 0;

  for (let i = 1; i <= 50000; i++) {
    let randomCoinFlip = Math.random()

    if (randomCoinFlip >= 0.5) {
      heads = heads + 1;
    } else {
      tails = tails + 1
    }
  }
  return [heads, tails]
}


////////// end of problem 7 //////////

// Alex's practice problems #8
// Literally

let manyPosts = [
  {
      title:  "Lorem ipsum dolor sit amet",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      tags: [
          "lorem",
          "ipsum",
          "dolor"
      ],
  },
  {
      title:  "Quis nostrud exercitation",
      excerpt: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
      body: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      tags: [
          "quis",
          "nostrud",
          "exercitation"
      ],
  },
  {
      title:  "Excepteur sint",
      excerpt: "Excepteur sint occaecat cupidatat non",
      body: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      tags: [
          "excepteur",
          "sint",
          "occaecat"
      ],
  }
]

function renderPosts(posts) {
  // your code here
  posts.forEach(function (post){
    const postElement = $(`
  <article>
<header>
    <h1>${post.title}</h1>
</header>
<section>
    <div>${post.excerpt}</div>
    <div>${post.body}</div>
</section>
<footer>
    <ul>
      <li>${post.tags[0]}</li>
      <li>${post.tags[1]}</li>
      <li>${post.tags[2]}</li>
    </ul>
</footer>
  `)

  $('.posts').append(postElement)
  })
}

renderPosts(manyPosts)




////// brian logan prompt

function XO(exampleString) {
	// Your code goes here.
  let xValue = 0;
  let oValue = 0;
  // enter a string, compare the number of x's and o'string
  // if same value, return true, otherwise return false
  for (let i = 0; i < exampleString.length; i++){
    if (exampleString[i] == "x"){
      // count the number of x's and o's
      xValue = xValue + 1;
    } if (exampleString[i] == "o"{
      oValue = oValue + 1
    }

  if (xValue === oValue){
    return true
  } else {
    return false
  }
}



const testVariable = "BrianxxLoganoo";
