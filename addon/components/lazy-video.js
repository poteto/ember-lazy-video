import Ember from 'ember';

const {
  on,
  get,
  inject,
  set,
  Component,
  computed,
  String
} = Ember;

export default Component.extend({
  isDisplayed: false,
  videoTitle: null,
  url: null,
  classNames: ['lazyLoad-container'],
  attributeBindings: ['style'],
  videoThumbnail: null,
  poster: null,
  providers: inject.service('lazy-video-providers'),

  click() {
    set(this, 'isDisplayed', true);
    this.sendAction('showingVideo');
  },

  videoSrc: computed('url', function() {
    let providers = get(this, 'providers');
    let url       = get(this, 'url');
    return providers.getUrl(url, 'embedUrl', { autoplay: 1 });
  }),

  _getVideoThumbnail: on('didInsertElement', function() {
    let providers = get(this, 'providers');
    let url       = get(this, 'url');
    let poster    = get(this, 'poster');

    if (poster) {
      return;
    }

    providers.getThumbnailUrl(url).then((res) => {
      set(this, 'videoThumbnail', res);
    });
  }),

  style: computed('videoThumbnail', 'poster', function() {
    let poster = get(this, 'poster');
    let thumbnail = poster || get(this, 'videoThumbnail');
    return String.htmlSafe(`background-image: url(${encodeURI(thumbnail)})`);
  })
});
