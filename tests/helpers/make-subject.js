import Ember from 'ember';
const {
  merge
} = Ember;

export default function makeSubject(options) {
  return function(updates, klass, container) {
    let defaults = options;
    if (typeof options === 'function') {
      defaults = options.call(this, container);
    }

    return klass.create(merge(defaults, updates));
  };
}
