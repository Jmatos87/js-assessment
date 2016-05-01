if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
  return {
    count : function (start, end) {
    	var timeout;
    	function doIt () {
      	console.log(start++); // to see the count in console

	      	if (start <= end) { //conditioins set for it to end
	        	timeout = setTimeout(doIt, 100);
	      	}
    	}

    	doIt();

    	return {
     		cancel: function () {
        		timeout && clearTimeout(timeout); //ends the setTimeout Loop
      		}
    	};
    }
  };
});