import Ember from 'ember';

export default {
  apiUrl(videoId) {
    return '//vimeo.com/api/oembed.json?url=http%3A//vimeo.com/' + videoId;
  },
  embedUrl(videoId) {
    return '//player.vimeo.com/video/' + videoId;
  },
  thumbnailUrl(videoId) {
    var apiUrl = this.apiUrl(videoId);
    return new Ember.RSVP.Promise(function(resolve) {
      Ember.$.getJSON(apiUrl).then(function(res) {
        resolve(res.thumbnail_url);
      });
    });
  }
};
