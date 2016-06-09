import Ember from 'ember';
import videoPromise from '../utils/videoPromise';

export default {
  name: 'youtube',

  apiUrl: function (videoId) {
    return '//gdata.youtube.com/feeds/api/videos/' + videoId;
  },

  embedUrl: function (videoId) {
    return videoPromise.endPoint('//www.youtube.com/embed/' + videoId);
  },

  thumbnailUrl: function (videoId) {
    var thumbnailPath = '//img.youtube.com/vi/%@/maxresdefault.jpg'.fmt(videoId);
    return videoPromise.simple(thumbnailPath);
  }
};

