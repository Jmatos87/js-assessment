if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    alterContext : function(fn, obj) {
    	
    // console.log(obj)
    // console.log(fn)

    
    obj.sayIt = fn
    // console.log(obj.sayIt)
    return obj.sayIt()


    },

    alterObjects : function(constructor, greeting) {

      constructor.prototype.greeting = greeting;

    },

    iterate : function(obj) {
    	var newArray = []

      for(var prop in obj){
        if(obj.hasOwnProperty(prop)){
          newArray.push(prop + ': ' + obj[prop])
        }
        
    	}
      return newArray
    

    }
  };
});
