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


//30.  Task
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


//  momentOfTimeInSpace("12:02 pm")


// 31. Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

// Examples
// n = 0  ==> [1]        # [2^0]
// n = 1  ==> [1, 2]     # [2^0, 2^1]
// n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]

 function powersOfTwo(n){
   let arrayFinal = []
   let multiplyer = 2
   let arrayOfExp = []
   for (let i = 0; i <= n; i++){
     arrayOfExp.push(i)
   }
    arrayOfExp.forEach(element => arrayFinal.push(multiplyer ** element))
    return arrayFinal
 }

//  powersOfTwo(2)


//32.  A Narcissistic Number is a number of length n in which the sum of its digits to the power of n is equal to the original number.
//  If this seems confusing, refer to the example below.

// Ex: 153, where n = 3 (number of digits in 153)
// 1^3 + 5^3 + 3^3 = 153

// Write a method is_narcissistic(i) (in Haskell: isNarcissistic :: Integer -> Bool) which returns whether or not i is a Narcissistic Number.


function isNarcissistic(n){
   //use length of number as the exponent
   let stringOfNum = `${n}`
   let sumOfDigitsRaisedN = 0
   //turn number into an array of numbers
   let arrayOfDigits = stringOfNum.split('')
   let arrayOfIntDigits = arrayOfDigits.map(element => parseInt(element))
   //loop through array and square each number, probably reduce? 
   for(let i = 0; i <= arrayOfIntDigits.length - 1; i++){
   iterationOfLoop = arrayOfIntDigits[i] ** stringOfNum.length
   sumOfDigitsRaisedN += iterationOfLoop
   }
   if(sumOfDigitsRaisedN === n){
      return true
   } else{
      return false
   }
 }


//  isNarcissistic(153)


//33. In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters,
//  lowercase, numbers and special characters, as follows.

// Solve("*'&ABCDabcde12345") = [4,5,5,3]. 
// --the order is: uppercase letters, lowercase, numbers and special characters.
// More examples in the test cases.

// Good luck!




// function solve(s){
//    //..//make variables that iterarte each time something is found
//    let lowerCaseCounter = 0
//    let upperCaseCounter = 0
//    let numCounter = 0
//    let speialCounter = 0
//    //split the incoming string into an array to better play with.
//    let arrayOfItems = s.split('')
//    // Maybe map into a new array, check if value is a number and convert it to a number.

// let numConvertedArray = arrayOfItems.map(function (element){
//    if(Number(element) === element){
//       return Number(element)
//    }

// }

// )
// }
// console.log(numConvertedArray)
//    //nested if else with 4 options, one for each option of character in a string ---need array first
  


//   solve("*'&ABCDabcde12345");


//34. In this simple exercise, you will create a program that will take two lists of integers, a and b. 
// Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. 
// You must find the difference of the cuboids' volumes regardless of which is bigger.

// For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.

// Your function will be tested with pre-made examples as well as random ones.

// If you can, try writing it in one line of code.

function findDifference(a, b) {
   let volumeA = a.reduce((multiplier, current) => multiplier * current, 1)
   let volumeB = b.reduce((multiplier, current) => multiplier * current, 1)

   return Math.abs(volumeA - volumeB)
 }

 findDifference([2, 2, 3], [5, 4, 1])

//  //35. Remove an exclamation mark from the end of a string.
//   For a beginner kata, you can assume that the input data is always a string, no need to verify it.

// Examples
// remove("Hi!") === "Hi"
// remove("Hi!!!") === "Hi!!"
// remove("!Hi") === "!Hi"
// remove("!Hi!") === "!Hi"
// remove("Hi! Hi!") === "Hi! Hi"
// remove("Hi") === "Hi"

function remove (string) {
   if(string[string.length - 1] === '!') {
      let noExclAtEnd = string.split('');
      noExclAtEnd.pop();
      return noExclAtEnd.join('')
   }
   else{
      return string
   }
 }

//  remove("Hi!")

// 36. Consider the word "abode". We can see that the letter a is in position 1 and b is in position 
// 2. In the alphabet, a and b are also in positions 1 and 2. Notice also that d and e in abode occupy the positions they would occupy in the alphabet, 
// which are positions 4 and 5.

// Given an array of words, return an array of the number of letters that occupy their positions in the alphabet for each word. For example,

// solve(["abode","ABc","xyzD"]) = [4, 3, 1]
// See test cases for more examples.

// Input will consist of alphabet characters, both uppercase and lowercase. No spaces.

// Good luck!

function solve(arr){  
   //set up alphabet array to compare to
   let alphabetArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 
'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
   let counterOfMatch = 0
   let arrayFinal = []

//map array, split each string in arrays plit the given array into strings of each word and  force to lower case
   let arrOfArrsLowerCase = arr.map(function (element){
      return element.toLowerCase().split('')
   })
//loop through new array, then looop through the array of arrays to check if deeply equal to
   for(let i = 0; i < arr.length; i++){
      for(let j = 0; j < arrOfArrsLowerCase[i].length; j++){
         console.log(arrOfArrsLowerCase[i][j])
         if (arrOfArrsLowerCase[i][j] === alphabetArray[j]){
            counterOfMatch++
         }
   
      }
      arrayFinal.push(counterOfMatch)
      counterOfMatch = 0
   }
   return arrayFinal
   };

   // solve(["abode","ABc","xyzD"])


   // 37.
//    An array is defined to be odd-heavy if it contains 
//    at least one odd element and every element whose value is odd is
//     greater than every even-valued element.

// eg.

// Array [11,4,9,2,8] is odd-heavy 
// because:- its odd elements [11,9] are greater than all the even elements [4,2,8]

// Array [11,4,9,2,3,10] is not odd-heav 
// because:- one of it's even element 10 from [4,2,10] is greater than two of its odd elements [9,3] from [ 11,9,3]
// write a function called isOddHeavy or is_odd_heavy that accepts an integer array and returns true if the array is odd-heavy else return false.

function isOddHeavy(n){
   //filter all even and all odd numbers into two seperate arrays
   let oddNum = n.filter(num => num % 2 !== 0);
   let evenNum = n.filter(num => (num % 2) === 0);
   //sort both arrays from lowest to highest value
   oddNum.sort((a, b) => a - b);
   evenNum.sort((a, b) => a - b);
   return (oddNum[0] > evenNum[evenNum.length - 1] ? true : false) 
 }


 isOddHeavy([11,4,9,2,8,0,0,0,0,0,0,0,0])



//  38. Make multiple functions that will
//   return the sum, difference, modulus, product, quotient, and the exponent 
//   respectively.

// Please use the following function names:

// addition = add

// multiply = multiply

// division = divide (both integer and float divisions are accepted)

// modulus = mod

// exponential = exponent

// subtraction = subt

// Note: All math operations will be: a (operation) b


function add(a,b){
   let x = a + b
   return x
}

function divide(a,b){
   let x = a / b
   return x
}

function multiply(a,b){
   let x = a * b
   return  x
}

function mod(a,b){
   let x = a % b
   return x
}
  
function exponent(a,b){
   let x = a ** b
   return x
}


function subt(a,b){
     let x = a - b
     return x
   }



   //39. Finish the solution so that it sorts the passed in array of numbers.
   //  If the function passes in an empty array or null/nil value then it should return an empty array.

   // For example:
   
   // solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
   // solution(null); // should return []

   function solution(nums){
      if(nums === null){
         return []
      }else{
         let x = nums.sort((a,b) => a - b)
         return x
      }
   }

//   console.log(solution([1,2,3,10,5]))


//40. Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

// function getCount(str) {
//    let vowelsCount = 0;
   
//    let vowelsArr = ['a', 'e', 'i', 'o', 'u']
//    let arrOfStr = str.split('')
//    let testStuff = vowelsArr.find('e')
//    console.log(vowelsCount)

//    arrOfStr.forEach(function(item) {
//       if(vowelsArr.find(item2 => item2 === 'a' || item2 === 'b' || item2 === 'c'){
//          vowelsCount++
//       }
//     })

//  }


// getCount('abracadabra')

// 41. Define a method hello that returns "Hello, Name!" to a given name, or says
//  Hello, World! if name is not given (or passed as an empty String).

// Assuming that name is a String and it checks for
//  user typos to return a name with a first capital letter (Xxxx).

// Examples:

// * With `name` = "john"  => return "Hello, John!"
// * With `name` = "aliCE" => return "Hello, Alice!"
// * With `name` not given 
//   or `name` = ""        => return "Hello, World!"



function hello(name) {
   if(name === ''){
      return "Hello, World!"
   }else{
      let firstLetter = name[0].toUpperCase()
      let restOfName = name.slice(1).toLowerCase()
      let fullName = firstLetter + restOfName
      console.log(fullName)
      return `Hello, ${fullName}!`
   }
}

// hello('JoHnNNnn');


// 42.

// write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.

// the string should start with a 1.

// a string with size 6 should return :'101010'.

// with size 4 should return : '1010'.

// with size 12 should return : '101010101010'.

// The size will always be positive and will only use whole numbers.




function stringy(size) {
   let stringyArray = []
   for (let i = 1; i <= size; i++){
   if(stringyArray.length === 0 || stringyArray[stringyArray.length - 1] === 0){
      stringyArray.push(1)
   }else{
      stringyArray.push(0)
   }
   }
   return stringyArray.join('');
}

stringy(49)

// Task
// You have a string of length n consisting of zeroes and ones. Consider the following operation:

// Choose any two adjacent positions in the string
// If one of them is 0, and the other one is 1, 
// remove these two digits from the string.
// What is the length of the smallest string that you can get after applying this operation multiple times?

// Example
// For s = "01010", the result should be 1.

// "01010" -> " 010" -> " 0"

// For s = "110100", the result should be 2.

// "110100" -> "1 100" -> "1 0"

// Note that after the operations, the remaining digits are separated by spaces and thus not adjacent ;-)

// Input/Output
// [input] string s
// The initial string.

// [output] an integer
// The minimum length of the string that may remain after applying the described operations several times.

function zeroAndOne(s) {
   //coding and coding..
   return 0;
 }


 //44.

//  Given an array of integers.

// Return an array, where the first element is the count of positives
//  numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

function countPositivesSumNegatives(input) {
   let posCounter = 0
   let negCounter = 0
   for(let i = 0; i < input.length; i++){
      if(input[i === 0]){
         
      }
      else if (input[i] > 0){
         posCounter++
      } else{
         negCounter += input[i]
      }

   }
   let answer = [posCounter, negCounter]
   return answer
}

// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order.
//  Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

function descendingOrder(n){
   let arrayN = n.toString().split('')
   let arrOfNum = []
   let concat = ''
   arrayN.forEach(str => {
      arrOfNum.push(Number(str));
   })
   arrOfNum.sort((a,b) => b - a)
   for (let i = 0; i < arrOfNum.length; i++){
      concat += arrOfNum[i]
   }
   return Number(concat)
 }

//  descendingOrder(123456789)



// Implement a function which convert the given boolean value into its string representation.

// Note: Only valid inputs will be given.

function booleanToString(b){
   return b ? 'true' : 'false';
 }
// Don't give me five!
// In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it.
//  The start and the end number are both inclusive!

// Examples:

// 1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
// 4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12
// The result may contain fives. ;-)
// The start number will always be smaller than the end number. Both numbers can be also negative!

// I'm very curious for your solutions and the way you solve it. Maybe someone of you will find an easy pure mathematics solution.

// Have fun coding it and please don't forget to vote and rank this kata! :-)

// I have also created other katas. Take a look if you enjoyed this kata!


function dontGiveMeFive(start, end)
{
   fullArrOfN = []
   dontGiveFiveArr = []
  //populate an array with values from start to end
  for (let i = start; i <= end; i++){
   fullArrOfN.push(i)
  }
  //turn each individual item in array, into an array
  let splitArray = fullArrOfN.map(item => (item.toString().split('')));
  //look through each array and see if a '5' exists
  for(let i = 0; i < splitArray.length; i++){
     if(splitArray[i].includes('5') === false){
      dontGiveFiveArr.push(splitArray[i])
     }

}
return(dontGiveFiveArr.length)
}

// dontGiveMeFive(1,9)



// Given an input of an array of digits, return the array with each digit incremented by its position in the array: 
// the first digit will be incremented by 1, the second digit by 2, etc. Make sure to start counting your positions from 1 ( and not 0 ).

// Your result can only contain single digit numbers, so if adding a digit with its position gives you a multiple-digit number,
//  only the last digit of the number should be returned.

// Notes:
// return an empty array if your array is empty
// arrays will only contain numbers so don't worry about checking that
// Examples:
// [1, 2, 3]  -->  [2, 4, 6]   #  [1+1, 2+2, 3+3]

// [4, 6, 9, 1, 3]  -->  [5, 8, 2, 5, 8]  #  [4+1, 6+2, 9+3, 1+4, 3+5]
//                                        #  9+3 = 12  -->  2

function incrementer(nums) {
   let finalArray = []
   let numsPlusIndex = nums.map((item, index) => item + (index + 1));

   let arrOfNumsPlusIndex = numsPlusIndex.map(item => item.toString().split(''))


   for (let i = 0; i < arrOfNumsPlusIndex.length; i++){
      finalArray.push(Number(arrOfNumsPlusIndex[i][arrOfNumsPlusIndex[i].length - 1]))

   }
   return finalArray
 }

//  incrementer([4, 6, 9, 1, 3, 8, 43]);

// Introduction
// Digital Cypher assigns to each letter of the alphabet unique number. For example:

//  a  b  c  d  e  f  g  h  i  j  k  l  m
//  1  2  3  4  5  6  7  8  9 10 11 12 13
//  n  o  p  q  r  s  t  u  v  w  x  y  z
// 14 15 16 17 18 19 20 21 22 23 24 25 26
// Instead of letters in encrypted word we write the corresponding number, eg. The word scout:

//  s  c  o  u  t
// 19  3 15 21 20
// Then we add to each obtained digit consecutive digits from the key. For example. In case of key equal to 1939 :

//    s  c  o  u  t
//   19  3 15 21 20
//  + 1  9  3  9  1
//  ---------------
//   20 12 18 30 21
  
//    m  a  s  t  e  r  p  i  e  c  e
//   13  1 19 20  5 18 16  9  5  3  5
// +  1  9  3  9  1  9  3  9  1  9  3
//   --------------------------------
//   14 10 22 29  6 27 19 18  6  12 8
// Task
// Write a function that accepts str string and key number and returns an array of integers representing encoded str.

// Input / Output
// The str input string consists of lowercase characters only.
// The key input number is a positive integer.

// Example
// Encode("scout",1939);  ==>  [ 20, 12, 18, 30, 21]
// Encode("masterpiece",1939);  ==>  [ 14, 10, 22, 29, 6, 27, 19, 18, 6, 12, 8]


function encode(str, n)
{  
   let finalCode = []

   //set up a constant alphaValue with a dummy value in 0 so the index matches value
 const alphaValue = ['dummy','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
   //split code into an array of the code
 const codeValue = n.toString().split('').map(v => Number(v));
   //split the incoming string into an array
 const arrOfInput = str.split('');
   //figure out number of runs for internal loop-get mod of codeValue length into arrOfInput length
const numOfExtra = arrOfInput.length % codeValue.length;
const numOfRunsBeforeRepeat = (Math.floor(arrOfInput.length / codeValue.length))
let arrOfInputCounter = 0
for(let j = 0; j < numOfRunsBeforeRepeat; j++){
   for(let i = 0; i < codeValue.length; i++){
      finalCode.push((codeValue[i] + alphaValue.indexOf(arrOfInput[arrOfInputCounter])));
      arrOfInputCounter++;
   }
}
for(let k = 0; k < numOfExtra; k++){
   finalCode.push((codeValue[k] + alphaValue.indexOf(arrOfInput[arrOfInputCounter])));
   arrOfInputCounter++;
}

   return finalCode
}

// encode("masterpiece",1939);



// We have the first value of a certain sequence, we will name it initVal. We define pattern list, patternL
// , an array that has the differences between contiguous terms of the sequence. E.g: patternL = [k1, k2, k3, k4]

// The terms of the sequence will be such values that:

// term1 = initVal
// term2 - term1 = k1
// term3 - term2 = k2
// term4 - term3 = k3
// term5 - term4 = k4
// term6 - term5 = k1
// term7 - term6 = k2
// term8 - term7 = k3
// term9 - term8 = k4
// ....  - ..... = ...
// ....  - ..... = ...
// So the values of the differences between contiguous terms are cyclical and are repeated as the differences values of the pattern list stablishes.

// Let's see an example with numbers:

// initVal = 10
// patternL = [2, 1, 3]
// term1 = 10
// term2 = 12
// term3 = 13
// term4 = 16
// term5 = 18
// term6 = 19
// term7 = 22  # and so on...
// We can easily obtain the next terms of the sequence following the values in the pattern list. We see that the sixth term of the sequence, 19, has the sum of its digits 10.

// Make a function sumDig_nthTerm(), that receives three arguments in this order

// sumDig_nthTerm(initVal, patternL, nthTerm(ordinal number of the term in the sequence))

// This function will output the sum of the digits of the n-th term of the sequence.

// Let's see some cases for this function:

// sumDig_nthTerm(10, [2, 1, 3], 6) -----> 10 # because the sixth term is 19 sum of Dig = 1 + 9 = 10. The sequence up to the sixth-Term is: 10, 12, 13, 16, 18, 19

// sumDig_nthTerm(10, [1, 2, 3], 15) ----> 10 # 37 is the 15-th term, and 3 + 7 = 10
// Enjoy it and happy coding!!


function sumDigNthTerm(initval, patternl, nthterm) {

   //set first value of the full term array to be manipulated by later loops
let arrayOfFullTerms = [initval]

   //outer-most loop that decides how many reps before hitting nth term
while(arrayOfFullTerms.length < nthterm){
   //internal loop through the pattern patternl[i]
   for(let i = 0; i < patternl.length; i++){
      initval += patternl[i];
      arrayOfFullTerms.push(initval);
   }
}
let arrayOfFinalNum = arrayOfFullTerms[nthterm - 1].toString().split('').map(v => Number(v))

return arrayOfFinalNum.reduce((sum, current) => sum + current, 0);
}

// sumDigNthTerm(10, [1, 2, 3], 15)


// We need a function prime_bef_aft() that gives the largest prime below a certain given value n,

// befPrime or bef_prime (depending on the language),

// and the smallest prime larger than this value,

// aftPrime/aft_prime (depending on the language).

// The result should be output in a list like the following:

// primeBefAft == [befPrime, aftPrime]
// If n is a prime number it will give two primes, n will not be included in the result.

// Let's see some cases:

// primeBefAft(100) == [97, 101]

// primeBefAft(97) == [89, 101]

// primeBefAft(101) == [97, 103]
// Range for the random tests: 1000 <= n <= 200000

// (The extreme and special case n = 2 will not be considered for the tests. Thanks Blind4Basics)

// Happy coding!!


function primeBefAft(num) {
   finalAnswer = []
   checkPrime = false
   //check if each number below given number is prime
   //make an array of every number below given number except for 1 and 0 and the number itself 
   //run each value in the array through a forEach method that checks if value is prime: return boolean true if prime, false if not prime
   // if true exists in array
   //move to next number, loop until hitting 2, stop at and return first value that is prime to an array named finalAnswer.
   



   //check at above 1, do same return first value equal to or higher then num that is prime. Add values to an array named finalAnswer
}




// Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

// I love you
// a little
// a lot
// passionately
// madly
// not at all
// When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

// Your goal in this kata is to determine which phrase the girls would say for a flower of a given number of petals, where nb_petals > 0.

function howMuchILoveYou(nbPetals) {
   //make array of answers
   answerArray = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all']
   //nbPetals mod 6 should give the result we want yeah?
   answerKey = (nbPetals % 6) - 1
   return answerArray[answerKey]
}



// Your task is to sum the differences between consecutive pairs in the array in descending order.

// Example
// [2, 1, 10]  -->  9
// In descending order: [10, 2, 1]

// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

// If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell, None in Rust).


function sumOfDifferences(arr) {
   let arrSumOfResults = []
   //if array length is 0 or 1 return 0 else do logic
   if(arr.length <= 1){
      return 0
   }
   //rest of the logic
   else{
   //sort the array highest to lowest
   arr = arr.sort((a,b) => b - a)
   //loop through length of array, not conducting the funtion on the last value of the array, push new values to sum to a new array arrSumOfResults(initialize array at start)
   for(let i = 0; i < (arr.length - 1); i++){
      //subtract i by i+1 in the array
      arrSumOfResults.push(arr[i] - arr[i + 1])
   } 
   }
//return the reduced value summing all of the arrSumOfResults
return arrSumOfResults.reduce((sum, current) => sum + current, 0);
}

// sumOfDifferences([2, 1, 10])


// Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

// If two words have the same last letter, they returned array should show them in the order they appeared in the given string.

// All inputs will be valid.

function last(x){
//split the string into an array (arrWord)
let arrWord = x.split(' ');
//find the length of each word, ensure these values are captured in a new array (lenWord)
let lenWord = arrWord.map(item => item.length);
//sort arrWord based off of the last value in each word
arrWord.sort((a, b) => a.charAt(a.length - 1) - b.charAt(b.length - 1))
console.log(arrWord);
console.log(lenWord);
}
last('man i need a taxi up to ubud')