import Ember from 'ember';

var on = Ember.on;
var get = Ember.get;
var set = Ember.set;

export default Ember.Component.extend({
  isDisplayed       : false,
  videoTitle        : null,
  url               : null,
  classNames        : [ 'lazyLoad-container' ],
  attributeBindings : [ 'style' ],
  videoThumbnail    : null,
  poster            : null,

  click: function() {
    set(this, 'isDisplayed', true);
    this.sendAction('showingVideo');
  },

  videoSrc: Ember.computed('url', function() {
    var providers = get(this, 'providers');
    var url       = get(this, 'url');
    return providers.getUrl(url, 'embedUrl', { autoplay: 1 });
  }),

  _getVideoThumbnail: on('didInsertElement', function() {
    var providers = get(this, 'providers');
    var url       = get(this, 'url');
    var poster    = get(this, 'poster');
    var self      = this;

    if ( poster ) {
      return;
    }

    providers.getThumbnailUrl(url).then(function(res) {
      set(self, 'videoThumbnail', res);
    });
  }),

  style: Ember.computed('videoThumbnail', 'poster', function() {
    var poster = get(this, 'poster');
    var thumbnail = poster || get(this, 'videoThumbnail');
    return 'background-image: url(' + thumbnail + ')';
  })
});
