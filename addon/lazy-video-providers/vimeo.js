import Ember from 'ember';
import videoPromise from '../utils/videoPromise';

export default {
  name: 'vimeo',

  apiUrl: function(videoId) {
    return '//vimeo.com/api/oembed.json?url=http%3A//vimeo.com/' + videoId;
  },

  embedUrl: function(videoId) {
    return videoPromise.endPoint('//player.vimeo.com/video/' + videoId);
  },

  thumbnailUrl: function(videoId) {
    var apiUrl = this.apiUrl(videoId);
    var thumbnailUrl = videoPromise.ajax(apiUrl);

    return thumbnailUrl.then(function(res){
      return res.thumbnail_url;
    }, function(error){
      return console.log('Thumbnail error: '+error);
    });
  }
};
