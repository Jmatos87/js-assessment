if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    containsNumber : function(str) {
//         var char = str.split('')

//         for(var i =0; i< char.length; i++){
//             var reChar = char[i]
//             if(reChar==='0'||
//                reChar==='1'||
//                reChar==='2'||
//                reChar==='3'||
//                reChar==='4'||
//                reChar==='5'||
//                reChar==='6'||
//                reChar==='7'||
//                reChar==='8'||
//                reChar==='9'){
//                 return true
//             }
            
//         else return false
// }
    return (/\d/).test(str);

    },

    containsRepeatingLetter : function(str) {
        // var char = str.toLowerCase().split('')
        // var testArr = []
        // for(var i =0; i<char.length; i++){
        //     testArr.push(char[i])
        //     if(char[i]===testArr.find(function(element){
        //         return element===char[i]
        //     })){
        //         console.log('true')
        //         return true
        //     }

        // }
        // console.log('false')
        // return false
        return (/([A-Za-z])\1/).test(str);
    },

    endsWithVowel : function(str) {

        var char = str.toLowerCase().split('')
         console.log(char)


        var last = char[char.length-1]

        console.log(last)

        if(last=== 'a'||last==='e'||last==='i'||last==='o'||last==='u'){
            return true
        }
        else return false

    },

    captureThreeNumbers : function(str) {
        var matches = (/\d{3}/).exec(str);
        return matches ? matches[0] : false;
    },

    matchesPattern : function(str) {
        return (/^\d{3}-\d{3}-\d{4}$/).test(str);
    },
    isUSD : function(str) {
        return (/^\$\d{1,3}(,\d{3})*(\.\d{2})?$/).test(str);
    }
  };

});
