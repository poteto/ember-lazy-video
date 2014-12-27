import Ember from 'ember';

var on = Ember.on;
var get = Ember.get;
var set = Ember.set;

export default Ember.Component.extend({
  provider          : null,
  isDisplayed       : false,
  videoTitle        : null,
  videoId           : null,
  classNames        : [ 'lazyLoad-container' ],
  attributeBindings : [ 'style' ],
  videoThumbnail    : null,

  click: function() {
    set(this, 'isDisplayed', true);
  },

  videoSrc: Ember.computed('provider', 'videoId', function() {
    var providers = get(this, 'providers');
    var provider  = get(this, 'provider');
    var videoId   = get(this, 'videoId');
    return providers.getUrl(provider, 'embedUrl', videoId, { autoplay: 1 });
  }),

  _getVideoThumbnail: on('didInsertElement', function() {
    var providers = get(this, 'providers');
    var provider  = get(this, 'provider');
    var videoId   = get(this, 'videoId');
    var self      = this;

    providers.getThumbnailUrl(provider, videoId).then(function(res) {
      set(self, 'videoThumbnail', res);
    });
  }),

  style: Ember.computed('videoThumbnail', function() {
    var thumbnail = get(this, 'videoThumbnail');
    return 'background-image: url(' + thumbnail + ')';
  })
});
