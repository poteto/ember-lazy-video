import Ember from 'ember';
import LazyVideoProviders from 'ember-lazy-video/services/lazy-video-providers';
import { test } from 'ember-qunit';

var service;
var run = Ember.run;

module('Lazy Video Providers - Youtube', {
  setup: function() {
    service = LazyVideoProviders.create({
      youtube: 'YOUTUBE'
    });
  },

  teardown: function() {
    run(service, 'destroy');
    service = null;
  }
});

test('_getProvider from Youtube based on `url`', function() {
  var provider,
  expectedProvider;

  expectedProvider = 'YOUTUBE';

  provider = service._getProvider('https://www.youtube.com/watch?v=gvdf5n-zI14');
  equal(provider, expectedProvider);

  provider = service._getProvider('http://youtu.be/duKL2dAJN6I');
  equal(provider, expectedProvider);

  provider = service._getProvider('https://www.youtube.com/watch?v=duKL2dAJN6I&feature=youtu.be');
  equal(provider, expectedProvider);

  throws(function() {
    service._getProvider(null, 'something invalid');
  });
});

test('_getVideoId from Youtube based on `url`', function() {
  var videoId,
  expectedVideoId;

  expectedVideoId = 'gvdf5n-zI14';

  videoId = service._getVideoId('https://www.youtube.com/watch?v=gvdf5n-zI14');
  equal(videoId, expectedVideoId);

  videoId = service._getVideoId('http://youtu.be/gvdf5n-zI14');
  equal(videoId, expectedVideoId);

  videoId = service._getVideoId('https://www.youtube.com/watch?v=gvdf5n-zI14&feature=youtu.be');
  equal(videoId, expectedVideoId);
});
