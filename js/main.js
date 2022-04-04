// 1. Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".


function greet(name){
   return `Hello, ${name} how are you doing today?`
  }


// 2. Create a class Ball. Ball objects should accept one argument for "ball type" when instantiated.

// If no arguments are given, ball objects should instantiate with a "ball type" of "regular."


const Ball = function(ballType) { ballType === undefined ? this.ballType = "regular" : this.ballType = ballType

   };

//    Description:
//    It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string.
//     You're given one parameter, the original string. You don't have to worry with strings with less than two characters.


function removeChar(str){
let strArr = str.split('');
strArr.pop();
strArr.shift();
return strArr.join('');
   }
   

removeChar("testString")

// Your Job
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




   // Write a function to split a string and convert it into an array of words.


function stringToArray(string){

   return string.split(' ')
      
   }


   //Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2


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



   // Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value.



   // function explode(s) {
   //    //turn string into an array of each number
   //   let arrayString = parseInt(s.split(''));
   //   //iterate through array, index in the array take the item in the array and and check nested if else statement i guess? 
   // console.log(arrayString)
   //  }


   //  explode("0432120")


   //  function toFreud(string) {
   //    let arrayOfStrings = string.split(' ');
   //    let sexString = arrayOfStrings.forEach(item => item = "sex");
   //    console.log(sexString)
   //  }

   //  toFreud("this is a test")


//    You get any card as an argument. Your task is to return the suit of this card (in lowercase).

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

//  For every good kata idea there seem to be quite a few bad ones!

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


// This time no story, no theory. The examples below show you how to write function accum:

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


// As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

// The input to the function will be an array of three distinct numbers (Haskell: a tuple).

// For example:

// gimme([2, 3, 1]) => 0
// 2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

// Another example (just to make sure it is clear):

// gimme([5, 10, 14]) => 1
// 10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.