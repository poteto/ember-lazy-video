import Ember from 'ember';
import LazyVideoProviders from 'ember-lazy-video/services/lazy-video-providers';
import { test } from 'ember-qunit';

var service;
var run = Ember.run;

module('Lazy Video Providers', {
  setup: function() {
    service = LazyVideoProviders.create({
      youtube: 'YOUTUBE',
      vimeo: 'VIMEO'
    });
  },

  teardown: function() {
    run(service, 'destroy');
    service = null;
  }
});

test('_getProvider based on `url`', function() {
  var provider;

  provider = service._getProvider('https://www.youtube.com/watch?v=gvdf5n-zI14');
  equal(provider, 'YOUTUBE');

  provider = service._getProvider('https://vimeo.com/51771300');
  equal(provider, 'VIMEO');

  throws(function() {
    service._getProvider(null, 'something invalid');
  });
});

test('_getVideoId based on `url`', function() {
  var videoId;

  videoId = service._getVideoId('https://www.youtube.com/watch?v=gvdf5n-zI14');
  equal(videoId, 'gvdf5n-zI14');

  videoId = service._getVideoId('https://vimeo.com/51771300');
  equal(videoId, '51771300');

  throws(function() {
    service._getProvider(null, 'something invalid');
  });
});
