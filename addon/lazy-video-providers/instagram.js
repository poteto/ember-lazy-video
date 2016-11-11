import Ember from 'ember';

const {
  RSVP
} = Ember;

export default {
  embedUrl(videoId) {
    return `http://instagram.com/p/${videoId}/embed`;
  },
  thumbnailUrl(videoId) {
    return RSVP.resolve(`http://instagram.com/p/${videoId}/media/?size=l`);
  }
};
