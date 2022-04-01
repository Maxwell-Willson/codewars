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