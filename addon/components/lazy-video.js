import Ember from 'ember';

export default Ember.Component.extend({
  provider          : null,
  isDisplayed       : false,
  videoTitle        : null,
  videoId           : null,
  classNames        : [ 'lazyLoadContainer' ],
  attributeBindings : [ 'style' ],
  videoThumbnail    : null,

  click: function() {
    this.set('isDisplayed', true);
  },

  videoSrc: Ember.computed('provider', 'videoId', function() {
    var providers = this.get('providers');
    var provider  = this.get('provider');
    var videoId   = this.get('videoId');
    return providers.getUrl(provider, 'embedUrl', videoId, { autoplay: 1 });
  }),

  _getVideoThumbnail: (function() {
    var providers = this.get('providers');
    var provider  = this.get('provider');
    var videoId   = this.get('videoId');
    providers.get(provider).thumbnailUrl(videoId).then(function(res) {
      this.set('videoThumbnail', res);
    }.bind(this));
  }).on('didInsertElement'),

  style: Ember.computed('videoThumbnail', function() {
    var thumbnail = this.get('videoThumbnail');
    return 'background: url(' + thumbnail + ') center center no-repeat';
  })
});
