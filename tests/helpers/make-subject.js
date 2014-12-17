import Ember from 'ember';
var merge = Ember.merge;

export default function makeSubject(options) {
  return function(updates, klass, container) {
    var defaults = options;
    if (typeof options === 'function') {
      defaults = options.call(this, container);
    }

    return klass.create(merge(defaults, updates));
  };
}
