import Ember from 'ember';

const {
  RSVP
} = Ember;

export default {
  apiUrl(videoId) {
    return `//gdata.youtube.com/feeds/api/videos/${videoId}`;
  },
  embedUrl(videoId) {
    return `//www.youtube.com/embed/${videoId}`;
  },
  thumbnailUrl(videoId) {
    return RSVP.resolve(`//img.youtube.com/vi/${videoId}/maxresdefault.jpg`);
  }
};
