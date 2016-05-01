if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
        return fn.apply(null,arr)

    },

    speak : function(fn, obj) {
        return fn.call(obj)

    },

    functionFunction : function(str) {
        return function(nextArg) {
      return str + ', ' + nextArg;
    };

    },

    makeClosures : function(arr, fn) {

    var functionArr = [];

    var applyFunction = function(val) {
      return function() { return fn(val); };
    };

    for (var i = 0; i < arr.length; i++) {
      functionArr.push(applyFunction(arr[i]));
    }

    return functionArr;

    },
    //Only needs one argument but really has 3 that work with the user's original argument
    partial : function(fn, str1, str2) {
        return function(userInput){
            return fn(str1,str2,userInput)
        }

    },

    useArguments : function(argument) {

    var sum = 0;

    for (var i = 0; i < arguments.length; i++) {
      sum += arguments[i];
    }

    return sum;

    },

    callIt : function(fn) {
        var args = Array.prototype.slice.call(arguments, 1, arguments.length);
        fn.apply(null, args);
    },

    partialUsingArguments : function(fn) {
        var args = Array.prototype.slice.call(arguments, 1, arguments.length);
        return function() {
            var moreArgs = args.concat(Array.prototype.slice.call(arguments));
            return fn.apply(null, moreArgs);
        };

    },

    curryIt : function(fn) {
    function applyArguments(_fn, args) {
      return _fn.apply(null, args);
    }

    function getArgumentAccumulator(accumulatedArguments, expectedArgumentsCount) {
      return function (currentArgument) {
        accumulatedArguments.push(currentArgument);

        var allArgumentsProvided = accumulatedArguments.length === expectedArgumentsCount;

        if (allArgumentsProvided) {
          return applyArguments(fn, accumulatedArguments);
        }

        return getArgumentAccumulator(accumulatedArguments, expectedArgumentsCount);
      };
    }

    return getArgumentAccumulator([], fn.length);
    }
  };
});
