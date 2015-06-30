import Ember from 'ember';
const {
  on,
  get,
  inject,
  set
} = Ember;

export default Ember.Component.extend({
  isDisplayed       : false,
  videoTitle        : null,
  url               : null,
  classNames        : [ 'lazyLoad-container' ],
  attributeBindings : [ 'style' ],
  videoThumbnail    : null,
  providers         : inject.service('lazy-video-providers'),

  click() {
    set(this, 'isDisplayed', true);
  },

  videoSrc: Ember.computed('url', {
    get() {
      const providers = get(this, 'providers');
      const url       = get(this, 'url');
      return providers.getUrl(url, 'embedUrl', { autoplay: 1 });
    }
  }).readOnly(),

  _getVideoThumbnail: on('didInsertElement', function() {
    const providers = get(this, 'providers');
    const url       = get(this, 'url');

    providers.getThumbnailUrl(url).then((res) => {
      set(this, 'videoThumbnail', res);
    });
  }),

  style: Ember.computed('videoThumbnail', {
    get() {
      const thumbnail = get(this, 'videoThumbnail');
      return 'background-image: url(' + thumbnail + ')';
    }
  }).readOnly()
});
