import Ember from 'ember';
import LazyVideoProviders from 'ember-lazy-video/services/lazy-video-providers';
import { module, test } from 'qunit';

const {
  run
} = Ember;

let service;

module('Lazy Video Providers - Youtube', {
  beforeEach() {
    service = LazyVideoProviders.create({
      youtube: 'YOUTUBE'
    });
  },

  afterEach() {
    run(service, 'destroy');
    service = null;
  }
});

test('_getProvider from Youtube based on `url`', function(assert) {
  let provider, expectedProvider;

  expectedProvider = 'YOUTUBE';

  provider = service._getProvider('https://www.youtube.com/watch?v=gvdf5n-zI14');
  assert.equal(provider, expectedProvider);

  provider = service._getProvider('http://youtu.be/duKL2dAJN6I');
  assert.equal(provider, expectedProvider);

  provider = service._getProvider('https://www.youtube.com/watch?v=duKL2dAJN6I&feature=youtu.be');
  assert.equal(provider, expectedProvider);

  assert.throws(function() {
    service._getProvider(null, 'something invalid');
  });
});

test('_getVideoId from Youtube based on `url`', function(assert) {
  let videoId, expectedVideoId;

  expectedVideoId = 'gvdf5n-zI14';

  videoId = service._getVideoId('https://www.youtube.com/watch?v=gvdf5n-zI14');
  assert.equal(videoId, expectedVideoId);

  videoId = service._getVideoId('http://youtu.be/gvdf5n-zI14');
  assert.equal(videoId, expectedVideoId);

  videoId = service._getVideoId('https://www.youtube.com/watch?v=gvdf5n-zI14&feature=youtu.be');
  assert.equal(videoId, expectedVideoId);
});
