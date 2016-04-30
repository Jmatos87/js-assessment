if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {

       
        var value = 0
        for (var i = 0; i < arr.length; i++){
            if(arr[i]===item){

                return value=i;
            }
            else{
                value= -1;
            }
        }
        return value;
          
    },

    sum : function(arr) {
       var sum = 0
       for(var i=0; i<arr.length;i++){
            sum += arr[i];
       }
       return sum

    },

    remove : function(arr, item) {
        var newArray = []
        arr.map(function(element){

            if (element!==item){
                newArray.push(element);

            }
            

        })
        
        return newArray

    },

    removeWithoutCopy : function(arr, item) {

  
    

    for (var i= 0; i < arr.length; i++) {
      if (arr[i] === item) {
        arr.splice(i, 1);
        i--;
        arr.length--;
      }
    }

    return arr;

    },

    append : function(arr, item) {
        arr.push(item);
        return arr;

    },

    truncate : function(arr) {
        arr.pop();
        return arr;
    },

    prepend : function(arr, item) {
      var newArray = [];
      newArray.push(item);
      arr.forEach(function(element){
          newArray.push(element);
      })
      return newArray;

     
      

    },

    curtail : function(arr) {
      var newArray = [];
      for (var i= 1; i < arr.length; i++) {
        newArray.push(arr[i]);
      }
      return newArray;

    },

    concat : function(arr1, arr2) {
        var newArray = []
        arr1.forEach(function(element){
            newArray.push(element);
        })
        arr2.forEach(function(element){
            newArray.push(element);
        })

        return newArray;
    },

    insert : function(arr, item, index) {

      arr.splice(index,0,item);
      return arr;

    },

    count : function(arr, item) {
      var count = 0;
      for (var i= 0; i < arr.length; i++) {
        if(arr[i]===item){
          count+=1;
        }
      }
      return count;

    },


//This one had me stumped. Will have to revisit to study.
    duplicates : function(arr) {


    var seen = {};
    var dupes = [];

    for (var i = 0; i < arr.length; i++) {
      seen[arr[i]] = seen[arr[i]] ? seen[arr[i]] + 1 : 1;
    }

    for (var item in seen) {
      if (seen.hasOwnProperty(item) && seen[item] > 1) {
        dupes.push(item);
      }
    }

    return dupes;

    },

    square : function(arr) {
        var newArr = arr.map(function(element){
            return element*element

        })

        return newArr


    },

    findAllOccurrences : function(arr, target) {

      var newArr = [];

      for (var i = 0; i < arr.length; i++) {
        if(arr[i]===target) {
          newArr.push(i);
        }
      }

      return newArr

    

    }
  };
});
