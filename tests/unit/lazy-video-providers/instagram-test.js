import Ember from 'ember';
import LazyVideoProviders from 'ember-lazy-video/services/lazy-video-providers';
import { test } from 'ember-qunit';

var service;
var run = Ember.run;

module('Lazy Video Providers - Instagram', {
  setup: function() {
    service = LazyVideoProviders.create({
      instagram: 'INSTAGRAM'
    });
  },

  teardown: function() {
    run(service, 'destroy');
    service = null;
  }
});

test('_getProvider from Instagram based on `url`', function() {
  var provider,
  expectedProvider;

  expectedProvider = 'INSTAGRAM';

  provider = service._getProvider('http://instagram.com/p/vXeXAnsieB/');
  equal(provider, expectedProvider);

  provider = service._getProvider('http://instagr.am/p/vXeXAnsieB/?modal=true');
  equal(provider, expectedProvider);

  throws(function() {
    service._getProvider(null, 'something invalid');
  });
});

test('_getVideoId from Instagram based on `url`', function() {
  var videoId, expectedVideoId;

  expectedVideoId = 'vXeXAnsieB';

  videoId = service._getVideoId('http://instagram.com/p/vXeXAnsieB/');
  equal(videoId, expectedVideoId);

  videoId = service._getVideoId('http://instagr.am/p/vXeXAnsieB/?modal=true');
  equal(videoId, expectedVideoId);

  throws(function() {
    service._getProvider(null, 'something invalid');
  });
});
