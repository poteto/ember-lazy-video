import Ember from 'ember';

export default {
  embedUrl: function(videoId) {
    return 'http://instagram.com/p/' + videoId + '/embed';
  },
  thumbnailUrl: function(videoId) {
    return Ember.RSVP.resolve('http://instagram.com/p/' + videoId + '/media/?size=l');
  }
};
