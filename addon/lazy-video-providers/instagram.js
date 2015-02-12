import Ember from 'ember';
import videoPromise from '../utils/videoPromise';

export default {
  name: 'instagram',

  embedUrl: function(videoId) {
    return videoPromise.endPoint('http://instagram.com/p/%@/embed'.fmt(videoId));
  },

  thumbnailUrl: function(videoId) {
    var thumbnailPath = 'http://instagram.com/p/%@/media/?size=l'.fmt(videoId);
    return videoPromise.simple(thumbnailPath);
  }
};
