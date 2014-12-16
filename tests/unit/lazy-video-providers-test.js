import Ember from 'ember';
import LazyVideoProviders from 'ember-lazy-video/services/lazy-video-providers';
import { test } from 'ember-qunit';

var service;
var run = Ember.run;

module('Lazy Video Porviders', {
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

test('_getProvider with explicit provider', function() {
  var provider;

  provider = service._getProvider('youtube');
  equal(provider, 'YOUTUBE');

  provider = service._getProvider('vimeo');
  equal(provider, 'VIMEO');

  throws(function() {
    service._getProvider('nonexistent');
  });
});

test('_getProvider guessing based on `videoId`', function() {
  var provider;

  provider = service._getProvider(null, 'gvdf5n-zI14');
  equal(provider, 'YOUTUBE');

  provider = service._getProvider(null, '51771300');
  equal(provider, 'VIMEO');

  throws(function() {
    service._getProvider(null, 'something invalid');
  });
});
