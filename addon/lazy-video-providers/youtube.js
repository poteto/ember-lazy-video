import Ember from 'ember';

export default {
  apiUrl: function(videoId) {
    return '//gdata.youtube.com/feeds/api/videos/' + videoId;
  },
  embedUrl: function(videoId) { return '//www.youtube.com/embed/' + videoId;
  },
  thumbnailUrl: function(videoId) {
    return Ember.RSVP.resolve('//img.youtube.com/vi/' + videoId + '/maxresdefault.jpg');
  }
};
