import Ember from 'ember';
import LazyVideoProviders from 'ember-lazy-video/services/lazy-video-providers';
import { module, test } from 'qunit';

let service;
const run = Ember.run;

module('Lazy Video Providers - Instagram', {
  beforeEach() {
    service = LazyVideoProviders.create({
      instagram: 'INSTAGRAM'
    });
  },

  afterEach() {
    run(service, 'destroy');
    service = null;
  }
});

test('_getProvider from Instagram based on `url`', function(assert) {
  let provider,
  expectedProvider;

  expectedProvider = 'INSTAGRAM';

  provider = service._getProvider('http://instagram.com/p/vXeXAnsieB/');
  assert.equal(provider, expectedProvider);

  provider = service._getProvider('http://instagr.am/p/vXeXAnsieB/?modal=true');
  assert.equal(provider, expectedProvider);

  assert.throws(function() {
    service._getProvider(null, 'something invalid');
  });
});

test('_getVideoId from Instagram based on `url`', function(assert) {
  let videoId, expectedVideoId;

  expectedVideoId = 'vXeXAnsieB';

  videoId = service._getVideoId('http://instagram.com/p/vXeXAnsieB/');
  assert.equal(videoId, expectedVideoId);

  videoId = service._getVideoId('http://instagr.am/p/vXeXAnsieB/?modal=true');
  assert.equal(videoId, expectedVideoId);

  assert.throws(function() {
    service._getProvider(null, 'something invalid');
  });
});
