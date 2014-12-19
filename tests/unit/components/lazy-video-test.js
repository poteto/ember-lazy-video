import Ember from 'ember';
import {
  moduleForComponent,
  test
} from 'ember-qunit';
import makeSubject from '../../helpers/make-subject';

var resolve = Ember.RSVP.resolve;


moduleForComponent('lazy-video', 'LazyVideoComponent', {
  subject: makeSubject({
    providers: {
      getThumbnailUrl: function() {
        return resolve('http://example.com');
      }
    }
  })
});

test('it renders with correct style attribute', function() {
  expect(1);

  var component = this.subject({
    videoId: '123',
    provider: 'youtube'
  });

  this.append();

  var componentStyle = component.$().attr('style');
  ok(/url\(http:\/\/example\.com\)/.test(componentStyle));
});
