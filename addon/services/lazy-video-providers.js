import Ember from 'ember';
import youtube from 'ember-lazy-video/lazy-video-providers/youtube';
import vimeo from 'ember-lazy-video/lazy-video-providers/vimeo';

var YOUTUBE_REGEX = /(https?:\/\/)?(www.)?(youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/watch\?feature=player_embedded&v=)([A-Za-z0-9_-]*)(\&\S+)?(\?\S+)?/;
var VIMEO_REGEX   = /https?:\/\/(?:www\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|)(\d+)(?:$|\/|\?)/;

export default Ember.Object.extend({
  getUrl: function(url, endpoint, opts) {
    var params;
    opts = (typeof opts === "undefined") ? {} : opts;
    params = Ember.$.param(opts);

    var provider = this._getProvider(url)[endpoint];
    var videoId = this._getVideoId(url);

    //return this._getProvider(provider, videoId)[endpoint](videoId) + '?' + params;

    return provider(videoId) + '?' + params;
  },

  getThumbnailUrl: function(url) {
    var videoId = this._getVideoId(url);
    return this._getProvider(url).thumbnailUrl(videoId);
  },

  youtube: youtube,
  vimeo: vimeo,

  _getVideoId: function(url) {
    var videoId, video;
    if (url) {
      if (VIMEO_REGEX.test(url)) {
        video = VIMEO_REGEX.exec(url);
        videoId = video[3];
      }

      if (YOUTUBE_REGEX.test(url)) {
        video = YOUTUBE_REGEX.exec(url);
        videoId = video[4];
      }
    }

    Ember.assert('Couldn\'t determine videoId from `url`: ' + url, videoId);

    return videoId;
  },

  _getProvider: function(url) {
    var providerName,
    provider;

    if (url) {
      if (VIMEO_REGEX.test(url)) {
        providerName = 'vimeo';
      }

      if (YOUTUBE_REGEX.test(url)) {
        providerName = 'youtube';
      }
    }

    provider = this.get(providerName);
    Ember.assert('Couldn\'t determine provider from `url`: ' + url, provider);

    return provider;
  }
});
