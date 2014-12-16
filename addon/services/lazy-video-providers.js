import Ember from 'ember';
import youtube from 'ember-lazy-video/lazy-video-providers/youtube';
import vimeo from 'ember-lazy-video/lazy-video-providers/vimeo';

var YOUTUBE_REGEX = /^[a-zA-Z0-9_-]{11}$/;
var VIMEO_REGEX   = /^[\d]+$/;

export default Ember.Object.extend({
  getUrl: function(provider, endpoint, videoId, opts) {
    var params;
    opts = (typeof opts === "undefined") ? {} : opts;
    params = Ember.$.param(opts);
    return this._getProvider(provider, videoId)[endpoint](videoId) + '?' + params;
  },

  getThumbnailUrl: function(provider, videoId) {
    return this._getProvider(provider, videoId).thumbnailUrl(videoId);
  },

  youtube: youtube,
  vimeo: vimeo,


  _getProvider: function(providerName, videoId) {
    var provider;

    if (!providerName && videoId) {
      if (VIMEO_REGEX.test(videoId)) {
        providerName = 'vimeo';
      }

      if (YOUTUBE_REGEX.test(videoId)) {
        providerName = 'youtube';
      }
    }

    provider = this.get(providerName);
    Ember.assert('Couldn\'t determine provider from `videoId` or the provider supplied was invalid: ' + providerName, provider);

    return provider;
  }
});
