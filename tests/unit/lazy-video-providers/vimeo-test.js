import Ember from 'ember';
import LazyVideoProviders from 'ember-lazy-video/services/lazy-video-providers';
import { test } from 'ember-qunit';

var service;
var run = Ember.run;

module('Lazy Video Providers  Vimeo', {
  setup: function() {
    service = LazyVideoProviders.create({
      vimeo: 'VIMEO'
    });
  },

  teardown: function() {
    run(service, 'destroy');
    service = null;
  }
});

test('_getProvider from Vimeo based on `url`', function() {
  var provider,
  expectedProvider;

  expectedProvider = 'VIMEO';

  provider = service._getProvider('https://vimeo.com/51771300');
  equal(provider, expectedProvider);

  provider = service._getProvider('http://vimeo.com/51771300?pg=embed&sec=');
  equal(provider, expectedProvider);

  throws(function() {
    service._getProvider(null, 'something invalid');
  });
});

test('_getVideoId from Vimeo based on `url`', function() {
  var videoId, expectedVideoId;

  expectedVideoId = '51771300';

  videoId = service._getVideoId('http://vimeo.com/51771300?pg=embed&sec=');
  equal(videoId, expectedVideoId);

  videoId = service._getVideoId('https://vimeo.com/51771300');
  equal(videoId, expectedVideoId);

  throws(function() {
    service._getProvider(null, 'something invalid');
  });
});
