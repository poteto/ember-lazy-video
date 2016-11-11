import Ember from 'ember';
import {
  moduleForComponent,
  test
} from 'ember-qunit';
import makeSubject from '../../helpers/make-subject';

const {
  RSVP: {
    resolve
  },
  run
} = Ember;

moduleForComponent('lazy-video', 'LazyVideoComponent', {
  unit: true,
  subject: makeSubject({
    providers: {
      getThumbnailUrl() {
        return resolve('http://example.com');
      }
    }
  })
});

test('it renders with correct style attribute', function(assert) {
  assert.expect(1);

  let component = this.subject({
    url: 'https://www.youtube.com/watch?v=gvdf5n-zI14'
  });

  run(function() {
    component.append();
  });

  let componentStyle = component.$().attr('style');
  assert.ok(/url\(http:\/\/example\.com\)/.test(componentStyle));
});
