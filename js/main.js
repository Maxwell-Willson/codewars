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


   console.log(sumMul(2, 9))




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