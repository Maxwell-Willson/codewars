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