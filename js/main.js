// 1. Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".


function greet(name){
   return `Hello, ${name} how are you doing today?`
  }


// 2. Create a class Ball. Ball objects should accept one argument for "ball type" when instantiated.

// If no arguments are given, ball objects should instantiate with a "ball type" of "regular."


const Ball = function(ballType) { ballType === undefined ? this.ballType = "regular" : this.ballType = ballType

   };

// 3.   Description:
//    It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string.
//     You're given one parameter, the original string. You don't have to worry with strings with less than two characters.


function removeChar(str){
let strArr = str.split('');
strArr.pop();
strArr.shift();
return strArr.join('');
   }
   

removeChar("testString")

//4. Your Job
// Find the sum of all multiples of n below m

// Keep in Mind
// n and m are natural numbers (positive integers)
// m is excluded from the multiples


function sumMul(n,m){
//declare the variables we are using and tracking
   let total = 0
   let num = n
//if invalid inputs return invalid
   if(n >= m){
     return "INVALID"
   }
   else{
      while(n < m){
      //add num to total
      total += num;
      //add num to itself
      n += n
      console.log(n)
      console.log(num)
      console.log(total)
   }
   return total
      }
   }


   // console.log(sumMul(2, 9))




   // 5. Write a function to split a string and convert it into an array of words.


function stringToArray(string){

   return string.split(' ')
      
   }


// 6. Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2


   function longest(s1, s2) {
      //turn both strings into array to analyze/execute methods on
      let s1Arr = s1.split('')
      let s2Arr = s2.split('')
      //combine the two arrays to have one array of the entire list of optoins'
      let combinedArr = s1Arr.concat(s2Arr)
      //filter the new combined array, if the index of the item is different then the indexOf() value its a duplicate, so we filter those out, return this value
      let finalAnswerArr = combinedArr.filter((c, index) => {
         return combinedArr.indexOf(c) === index;
      });
      // sort the combined array, then turn it into a string to return
      return finalAnswerArr.sort().join('');
    }

   //  let a = "xyaabbbccccdefww"

   //  let b = "xxxxyyyyabklmopq"

   //  console.log(longest("rjerawrkjearhiw", "reujwiaaj"))



   //7. Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value.



   // function explode(s) {
   //    //turn string into an array of each number
   //   let arrayString = parseInt(s.split(''));
   //   //iterate through array, index in the array take the item in the array and and check nested if else statement i guess? 
   // console.log(arrayString)
   //  }


   //  explode("0432120")



// 8. You get any card as an argument. Your task is to return the suit of this card (in lowercase).

// Our deck (is preloaded):

deck = ['2♣','3♣','4♣','5♣','6♣','7♣','8♣','9♣','10♣','J♣','Q♣','K♣','A♣',
        '2♦','3♦','4♦','5♦','6♦','7♦','8♦','9♦','10♦','J♦','Q♦','K♦','A♦',
        '2♥','3♥','4♥','5♥','6♥','7♥','8♥','9♥','10♥','J♥','Q♥','K♥','A♥',
        '2♠','3♠','4♠','5♠','6♠','7♠','8♠','9♠','10♠','J♠','Q♠','K♠','A♠'];

        function defineSuit(card) {
         if(card.includes("♣") === true){
            return "clubs"
         }else if(card.includes("♦") === true){
            return "diamonds"
         }else if(card.includes("♥") === true){
            return "hearts"
         }else{
            return "spades"
         }
       }

//9.  For every good kata idea there seem to be quite a few bad ones!

//  In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'.
//  If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'.
//  If there are no good ideas, as is often the case, return 'Fail!'


function well(x){
let filteredGoodArray = x.filter( item => item === 'good')
if (filteredGoodArray.length === 1 || filteredGoodArray.length === 2){
   return 'Publish!'
} else if (filteredGoodArray.length > 2){
   return 'I smell a series!'
}else{
   return 'Fail!'
}
}

// well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good'])


// 10. This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.


function accum(s) {
	// first split the string into an array to be better manageable.
   let stringToArray = s.toUpperCase().split('')
   console.log(stringToArray)
   //iterate through the array, each iteration is going to print an incrementing array and produce a string, map?  
   let mumbleArray = stringToArray.map(function(item, index){
      if(index === 0){
         return item
      }else {
         let totalItem = item
         for(let i = 0; i < index; i++){
         totalItem += item.toLowerCase()
         }
         return totalItem
      }
   }
   )
   return mumbleArray.join('-')
}


// accum("RqaEzty")


//11.  As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

// The input to the function will be an array of three distinct numbers (Haskell: a tuple).

// For example:

// gimme([2, 3, 1]) => 0
// 2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

// Another example (just to make sure it is clear):

// gimme([5, 10, 14]) => 1
// 10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.




//12.  Rock Paper Scissors
// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples:

// rps('scissors','paper') // Player 1 won!
// rps('scissors','rock') // Player 2 won!
// rps('paper','paper') // Draw!


const rps = (p1, p2) => {
   //three outcomes so do an if, if else, else statement. Starting with P1 wins
   if ( (p1 === 'rock' && p2 === 'scissors') || (p1 === 'paper' && p2 === 'rock') || (p1 === 'scissors' && p2 === 'paper') ){
      return "Player 1 won!"
   } //player 2 wins outcome 
   else if ( (p2 === 'rock' && p1 === 'scissors') || (p2 === 'paper' && p1 === 'rock') || (p2 === 'scissors' && p1 === 'paper')){
      return "Player 2 won!"
   }// draw outcome
   else{
      return "Draw!"
   }
};

// 13. Write a function called repeatStr which repeats the given string string exactly n times.

// repeatStr(6, "I") // "IIIIII"
// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

function repeatStr (n, s) {
   let combinedStr = ''
   for (let i = 0; i < n; i++){
     combinedStr += s
   }
   return combinedStr
 }



// 14.  In John's car the GPS records every s seconds the distance travelled from an origin (distances are measured in an arbitrary but consistent unit).
// For example, below is part of a record with s = 15:

// x = [0.0, 0.19, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0, 2.25]
// The sections are:

// 0.0-0.19, 0.19-0.5, 0.5-0.75, 0.75-1.0, 1.0-1.25, 1.25-1.50, 1.5-1.75, 1.75-2.0, 2.0-2.25
// We can calculate John's average hourly speed on every section and we get:

// [45.6, 74.4, 60.0, 60.0, 60.0, 60.0, 60.0, 60.0, 60.0]
// Given s and x the task is to return as an integer the *floor* of the maximum average speed per hour obtained on the sections of x. If x length is less than or equal to 1 return 0 since the car didn't move.

// Example:
// with the above data your function gps(s, x)should return 74

// Note
// With floats it can happen that results depends on the operations order. To calculate hourly speed you can use:

// (3600 * delta_distance) / s.

// function gps(s, x) {
//    // your code
// }


// 15. Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-') between each two odd digits in num. 
// For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd digit.

// Note that the number will always be non-negative (>= 0).

function insertDash(num){
   //split into an array to work on each number indivdually have to turn the number into a string, to split it up into an array, then convert the elements back into a number
   let arrayNum = num.toString().split('').map(element => parseInt(element))
   //where we will store the index where dashses need to be added
   let finalAnswerArray = []
  //loop through elements
  for(let i = 0; i <= arrayNum.length - 1; i++){
     // -> ID when two elements next to each other are odd, excluding last value in an array
    if(arrayNum[i] % 2 !== 0 && arrayNum[i+1] % 2 !== 0){
      //if ID'd correctly push the number and then a dash
      finalAnswerArray.push(arrayNum[i], '-')
      }
   else{
      //if not IDed as both odd push the normal number
      finalAnswerArray.push(arrayNum[i])
   }
   }
   //remove dash from end if its an odd number
  if(finalAnswerArray[finalAnswerArray.length - 1] === '-'){
     finalAnswerArray.pop()
  }
  return finalAnswerArray.join('')
 
  }


// console.log(insertDash(5802979));



//16. Complete the solution so that it returns true if the first argument(string) passed in
// ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') //returns true
// solution('abc', 'd')  //returns false

function solution(str, ending){
   if(ending === ''){
      return true
   }
   else{
   //find length of ending
   let lenOfEnd = ending.length
   //turn str into an array to be able to better manage it
   let arrayOfStr = str.split('');
   //slice the last of the length off of str
   let sliceOfEndAmt = arrayOfStr.slice(-(lenOfEnd))
   let testingEquality = sliceOfEndAmt.join('')
   return testingEquality === ending ? true : false
   }
 }

// solution('abc', 'bc')
// solution('abc', 'd')


//17. Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]


function maps(x){
   return x.map(element => element * 2)
   }


// 18.   Implement the method indexOf (index_of in PHP), which accepts a linked list (head) and a value,
//  and returns the index (zero based) of the first occurrence of that value if exists, or -1 otherwise.

// For example: Given the list: 1 -> 2 -> 3 -> 3, and the value 3, indexOf / index_of should return 2.

// The linked list is defined as follows:

// function Node(data, next = null) {
//   this.data = data;
//   this.next = next;
// }

// function indexOf(head, value) {
//    return -1;
//  }

// 19.

// The BOPE is the squad of special forces of police that usually handle
// the operations in the Favelas in Rio de Janeiro.

// In this Kata you have to write a function that determine the number o
// f magazines that every soldier has to have in his bag.

// You will receive the weapon and the number of streets that they have
//  to cross. Considering that every street the officer shoots 3 times. Bellow there is the relation of weapons:

// PT92 - 17 bullets
// M4A1 - 30 bullets
// M16A2 - 30 bullets
// PSG1 - 5 bullets

// Example:

// ["PT92", 6] => 2 (6 streets 3 bullets each)
// ["M4A1", 6] => 1

// The return Will always be an integer so as the params.


function magNumber(info){
  
}



// 20. Write a function that returns a string in which firstname is swapped with last name.

// nameShuffler('john McClane'); => "McClane john"

function nameShuffler(str){
   return str.split(' ').reverse().join(' ')

 }

//  //21 Given 2 strings, a and b, return a string of the form short+long+short, 
//  with the shorter string on the outside and the longer string on the inside. 
//  The strings will not be the same length, but they may be empty ( zero length ).

// Hint for R users:

// The length of string is not always the same as the number of characters
// For example: (Input1, Input2) --> output

// ("1", "22") --> "1221"
// ("22", "1") --> "1221"


 function solution(a, b){
   if(a.length > b.length){
     return `${b}${a}${b}`
   } else{
     return `${a}${b}${a}`
   }
 }

//  22. #To square(root) or not to square(root)

//  Write a method, that will get an integer array as parameter and will process 
//  every number from this array.
//  Return a new array with processing every number of the input-array like this:
 
//  If the number has an integer square root, take this, otherwise square the number.
 
//  [4,3,9,7,2,1] -> [2,9,3,49,4,1]
//  The input array will always contain only positive numbers and will never be empty
//   or null.
 
//  The input array should not be modified!
 
//  Have fun coding it and please don't forget to vote and rank this kata! :-)
 
//  I have also created other katas. Take a look if you enjoyed this kata!

function squareOrSquareRoot(array) {
   let finalArray = array.map(function(element, index, array){
      if(Math.sqrt(element) === Math.floor(Math.sqrt(element))){
         return Math.sqrt(element)
      }else{
         return element * element
      }
   })
   return finalArray
 }


// 23.  Create a function that takes an array of letters, and combines them into words in a sentence.

// The array will be formatted as so:

// [['J','L','L','M']
// ,['u','i','i','a']
// ,['s','v','f','n']
// ,['t','e','e','']]
// The function should combine all the 0th indexed letters to create the word 'just',
//  all the 1st indexed letters to create the word 'live', etc.

// Shorter words will have an empty string in the place once the word has already been
//  mapped out (see the last element in the last element in the array).

// Examples:

// arrAdder([
// ['J','L','L','M'],
// ['u','i','i','a'],
// ['s','v','f','n'],
// ['t','e','e','']
// ]) // => "Just Live Life Man"

// arrAdder([ 
//   [ 'T', 'M', 'i', 't', 'p', 'o', 't', 'c' ],
//   [ 'h', 'i', 's', 'h', 'o', 'f', 'h', 'e' ],
//   [ 'e', 't', '', 'e', 'w', '', 'e', 'l' ],
//   [ '', 'o', '', '', 'e', '', '', 'l' ],
//   [ '', 'c', '', '', 'r', '', '', '' ],
//   [ '', 'h', '', '', 'h', '', '', '' ],
//   [ '', 'o', '', '', 'o', '', '', '' ],
//   [ '', 'n', '', '', 'u', '', '', '' ],
//   [ '', 'd', '', '', 's', '', '', '' ],
//   [ '', 'r', '', '', 'e', '', '', '' ],
//   [ '', 'i', '', '', '', '', '', '' ],
//   [ '', 'a', '', '', '', '', '', '' ] ]) // => "The Mitochondria is the powerhouse of the cell


// function arrAdder(arr) {

// //find the first array where arrPosition is null, this will eventually be looped to go through each value of //lenOfSentance above
// let loopCounter = 0
// let arrWordAcum = []
// //loop through the length of the sentance by looking at arr[0]'s length
// for(let i = 0; i <= arr[0].length - 1; i++){
// let indexExecuteAt = 0
//    function completeAWord(indexOfLetters){ 
      
//       while(arr[loopCounter][indexOfLetters] !== ''){
//          arrWordAcum.push(arr[loopCounter][0]);
//          loopCounter++;
//          console.log(arrWordAcum.join(''))
//          return arrWordAcum.join('')
//       } 
//    }

// }
// //once a null has been found, slice the array into a new value, ending at null index position -1
// // function arrOfSingleWord {


// // //Take values from the new sliced array, where the value you pull is from the wordPosition[i], loop through new sliced array until end of array once, concatinating all of word one.



// // //store finished word one in finalSentance value, ensuring spaces are present when needed.
// // }

// //return final answer 

// }


// arrAdder([ 
//   [ 'T', 'M', 'i', 't', 'p', 'o', 't', 'c' ],
//   [ 'h', 'i', 's', 'h', 'o', 'f', 'h', 'e' ],
//   [ 'e', 't', '', 'e', 'w', '', 'e', 'l' ],
//   [ '', 'o', '', '', 'e', '', '', 'l' ],
//   [ '', 'c', '', '', 'r', '', '', '' ],
//   [ '', 'h', '', '', 'h', '', '', '' ],
//   [ '', 'o', '', '', 'o', '', '', '' ],
//   [ '', 'n', '', '', 'u', '', '', '' ],
//   [ '', 'd', '', '', 's', '', '', '' ],
//   [ '', 'r', '', '', 'e', '', '', '' ],
//   [ '', 'i', '', '', '', '', '', '' ],
//   [ '', 'a', '', '', '', '', '', '' ] ])

// //24. Create a function that accepts a list/array and a number n, 
// and returns a list/array of the first n elements from the list/array.

// If you need help, here's a reference:

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

function take(arr, n) {
   return arr.slice(0, n)
 }
 


//  25. Count the number of Duplicates
//  Write a function that will return the count of distinct case-insensitive
//   alphabetic characters and numeric digits that occur more than once in the input
//    string. The input string can be assumed to contain only alphabets 
//    (both uppercase and lowercase) and numeric digits.
 
//  Example
//  "abcde" -> 0 # no characters repeats more than once
//  "aabbcde" -> 2 # 'a' and 'b'
//  "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
//  "indivisibility" -> 1 # 'i' occurs six times
//  "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
//  "aA11" -> 2 # 'a' and '1'
//  "ABBA" -> 2 # 'A' and 'B' each occur twice

function duplicateCount(text){
 //final value that will be returned
 let finalValue = 0
 //convert the text into an array, force it to lower case, then sort it to get all like character next to each other
let arrayOfText = text.toLowerCase().split('').sort()
//make a new array of the unique values
let arrayOfUnique = arrayOfText.filter((value, index) =>  arrayOfText.indexOf(value) === index)
//loop through unique values, find the index of first, and index of second value of each unique value, loop until unique values is exhausted
for(let i = 0; i <= arrayOfUnique.length - 1; i++){
if(arrayOfText.indexOf(arrayOfUnique[i]) !== arrayOfText.lastIndexOf(arrayOfUnique[i])){
finalValue++
}
}
return finalValue
 }


// duplicateCount("Indivisibilities")


// 26. If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
//  The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
//  Additionally, if the number is negative, return 0 (for languages that do have them).

// Note: If the number is a multiple of both 3 and 5, only count it once.

// Courtesy of projecteuler.net (Problem 1)

function solutionSumMultiplesFiveOrThree(number){
  //make variables we are using
  let arrayOfAllNums = []
  let finalAnswer = 0
    //populate an array with every value less then the passed in number
  for(let i = 1; i < number; i++){
     arrayOfAllNums.push(i)
  }
  //loop through new array, if the value in the array is divisible by 3 or 5 add it to the total
  arrayOfAllNums.forEach(function(item){
     if(item % 3 === 0 || item % 5 === 0){
        console.log(item)
        finalAnswer += item
     }
  })
  return finalAnswer
}

// solutionSumMultiplesFiveOrThree(10)


// 27. In this Kata we are passing a number (n) into a function.

// Your code will determine if the number passed is even (or not).

// The function needs to return either a true or false.

// Numbers may be positive or negative, integers or floats.

// Floats with decimal part non equal to zero are considered UNeven for this kata.


function testEven(n) {
  if (Math.floor(n) !== n){
     return false
  } else if(n % 2 === 0){
     return true
  }else{
     return false
  }
}

// 28.

// Your coworker was supposed to write a simple helper function 
// to capitalize a string (that contains a single word) before they went on vacation.

// Unfortunately, they have now left and the code they gave you doesn't work. 
// Fix the helper function they wrote so that it works as intended (i.e. make the first character in the string "word" upper case).

// Don't worry about numbers, special characters, or non-string types being passed to the function.
//  The string lengths will be from 1 character up to 10 characters, but will never be empty.


 function capitalizeWord(word) {
  let wordArray = word.split('')
  wordArray[0] = wordArray[0].toUpperCase()
  return wordArray.join('')
 }

// 29.  Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):

//  Example: (Input1, Input2 -->Output)
 
//  "4",  "5" --> "9"
//  "34", "5" --> "39"
//  "", "" --> "0"
//  "2", "" --> "2"
//  "-5", "3" --> "-2"
//  Notes:
 
//  If either input is an empty string, consider it as zero.
 
//  Inputs and the expected output will never exceed the signed 32-bit integer limit (2^31 - 1)

 function sumStr(a,b) {
   return String(Number(a)+Number(b));
 }


//  Task
// You are given a moment in time and space. What you must do is break it down into time and space, to determine if that moment is from the past, present or future.

// Time is the sum of characters that increase time (i.e. numbers in range ['1'..'9'].

// Space in the number of characters which do not increase time (i.e. all characters but those that increase time).

// The moment of time is determined as follows:

// If time is greater than space, then the moment is from the future.
//  If time is less than space, then the moment is from the past. Otherwise, it is the present moment.

// You should return an array of three elements, two of which are false, and one is true.
//  The true value should be at the 1st, 2nd or 3rd place for past, present and future respectively.

// Examples
// For moment = "01:00 pm", the output should be [true, false, false].

// time equals 1, and space equals 7, so the moment is from the past.

// For moment = "12:02 pm", the output should be [false, true, false].

// time equals 5, and space equals 5, which means that it's a present moment.

// For moment = "12:30 pm", the output should be [false, false, true].

// time equals 6, space equals 5, so the moment is from the future.

// Input/Output
// [input] string moment
// The moment of time and space that the input time came from.

// [output] a boolean array
// Array of three elements, two of which are false, and one is true. The true value should be at the 1st, 2nd or 3rd place for past, present and future respectively.


function momentOfTimeInSpace(moment) {
   //decalre variables used
   let fullNumArray = [];
   let spaceCounter = 0;
   //convert the string into an array, make sure all numbers are convereted to actual numbers
   let arraySniff = moment.split('');
   // loop through the arraySniff and convert all numbers into values, and anything thats not a number into NaN
   for(let i = 0; i <= arraySniff.length - 1; i++){
      fullNumArray.push(parseInt(arraySniff[i]))
   }
   // filter NaNs out of the array returning an array of only numbers
   let onlyNumArray = fullNumArray.filter(element => Number(element) === element);
   //remove 0s and increment spaceCounter
   for(let i = 0; i <= arraySniff.length - 1; i++)
   console.log(fullNumArray);
   console.log(onlyNumArray);
   // sum the array of only numbers
   // let sumOfNums = onlyNumArray.reduce((sum, current) => sum + current, 0)
   // //determine number of NaN values, subtract length of fullNumArray by onlyNumArray
   // let notNumbers = fullNumArray.length - onlyNumArray.length
   //three way decider answer
   // if(notNumbers === sumOfNums){
   //    return [false, true, false]
   // }else if(notNumbers < sumOfNums){
   //    return [false, false, true]
   // }else{
   //    return [true, false, false]
   // }
 }

//  function momentOfTimeInSpace(moment) {
//    //decalre variables used
//    let fullNumArray = [];
//    //convert the string into an array, make sure all numbers are convereted to actual numbers
//    let arraySniff = moment.split('');
//    // loop through the arraySniff and convert all numbers into values, and anything thats not a number into NaN
//    for(let i = 0; i <= arraySniff.length - 1; i++){
//       fullNumArray.push(parseInt(arraySniff[i]))
//    }
//    // filter NaNs out of the array returning an array of only numbers
//    let onlyNumArray = fullNumArray.filter(element => Number(element) === element)
//    // sum the array of only numbers
//    let sumOfNums = onlyNumArray.reduce((sum, current) => sum + current, 0)
//    //determine number of NaN values, subtract length of fullNumArray by onlyNumArray
//    let notNumbers = fullNumArray.length - onlyNumArray.length
//    //three way decider answer

//    }
//  }


 momentOfTimeInSpace("12:02 pm")