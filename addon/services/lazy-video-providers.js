import Ember from 'ember';
import youtube from 'ember-lazy-video/lazy-video-providers/youtube';
import vimeo from 'ember-lazy-video/lazy-video-providers/vimeo';
import instagram from 'ember-lazy-video/lazy-video-providers/instagram';

var YOUTUBE_REGEX = /(https?:\/\/)?(www.)?(youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/watch\?feature=player_embedded&v=)([A-Za-z0-9_-]*)(\&\S+)?(\?\S+)?/;
var VIMEO_REGEX   = /https?:\/\/(?:www\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|)(\d+)(?:$|\/|\?)/;
var INSTAGRAM_REGEX = /(https?:\/\/)?(www.)?instagr(am\.com|\.am)\/p\/([A-Za-z0-9_-]*)/;

export default Ember.Object.extend({
  getUrl(url, endpoint, opts) {
    var params;
    opts = (typeof opts === "undefined") ? {} : opts;
    params = Ember.$.param(opts);

    var provider = this._getProvider(url)[endpoint];
    var videoId = this._getVideoId(url);

    return provider(videoId) + '?' + params;
  },

  getThumbnailUrl(url) {
    var videoId = this._getVideoId(url);
    return this._getProvider(url).thumbnailUrl(videoId);
  },

  youtube: youtube,
  vimeo: vimeo,
  instagram: instagram,

  _getVideoId(url) {
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

      if (INSTAGRAM_REGEX.test(url)) {
        video = INSTAGRAM_REGEX.exec(url);
        videoId = video[4];
      }
    }

    Ember.assert('Couldn\'t determine videoId from `url`: ' + url, videoId);

    return videoId;
  },

  _getProvider(url) {
    var providerName,
    provider;

    if (url) {
      if (VIMEO_REGEX.test(url)) {
        providerName = 'vimeo';
      }

      if (YOUTUBE_REGEX.test(url)) {
        providerName = 'youtube';
      }

      if (INSTAGRAM_REGEX.test(url)) {
        providerName = 'instagram';
      }
    }

    provider = this.get(providerName);
    Ember.assert('Couldn\'t determine provider from `url`: ' + url, provider);

    return provider;
  }
});
