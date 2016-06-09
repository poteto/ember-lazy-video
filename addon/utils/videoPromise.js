import Ember from 'ember';

var videoPromise = Ember.Object.extend({
  name: 'VideoPromise',

  simple: function(path) {
    return new Ember.RSVP.Promise(function (resolve) {
      return resolve(path);
    });
  },

  endPoint: function(path) {
    var resolvedPromise = new Ember.RSVP.resolve(path)._result;
    return resolvedPromise;
  },

  ajax: function(path, options) {
    return new Ember.RSVP.Promise(function(resolve, reject) {

      var options = options || {dataType: "json"};

      options.success = function(data){
        resolve(data);
      };

      options.error = function(jqXHR, status, error){
        reject(arguments);
      };

      $.ajax(path, options);
    });
  }

}).create();

export default videoPromise;
