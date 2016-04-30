if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    fizzBuzz : function(num) {

      //The order of the if statements matters :/
       if(num%3===0 && num%5===0){
        // console.log('fizzbuzz')
        return'fizzbuzz'
      }
      if(num%3===0){
        // console.log('fizz')
        return 'fizz'
      }
      if(num%5===0){
        // console.log('buzz')
        return 'buzz'
      }
      else {
        // console.log('else')

        if(typeof num === 'number'){
          // console.log('number')
          return num
        }
        else{
          // console.log('NaN')
          return false
        }
      
      }
      // write a function that receives a number as its argument;
      // if the number is divisible by 3, the function should return 'fizz';
      // if the number is divisible by 5, the function should return 'buzz';
      // if the number is divisible by 3 and 5, the function should return
      // 'fizzbuzz';
      //
      // otherwise the function should return the number, or false if no number
      // was provided or the value provided is not a number
    }
  };
});
