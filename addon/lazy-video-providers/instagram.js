import Ember from 'ember';

export default {
  embedUrl(videoId) {
    return 'http://instagram.com/p/' + videoId + '/embed';
  },
  thumbnailUrl(videoId) {
    return Ember.RSVP.resolve('http://instagram.com/p/' + videoId + '/media/?size=l');
  }
};
