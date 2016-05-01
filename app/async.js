if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([ 'jquery' ], function($) {
  return {
    async : function(value) {
      // $.Deferred() makes a deffered object capable of registering multiple callbacks
      //the object start at the pending state
    	var dfd = $.Deferred();
    setTimeout(function() {
      // .resolve changes the object state to resolved and executes any doneCallbacks
      dfd.resolve(value);
    }, 10);
    return dfd.promise();

    },

    manipulateRemoteData : function(url) {

    var dfd = $.Deferred();

    $.ajax(url).then(function(resp) {
      var people = $.map(resp.people, function(person) {
        return person.name;
      });
      dfd.resolve(people.sort());
    });

    return dfd.promise();
  }

    
  };
});
