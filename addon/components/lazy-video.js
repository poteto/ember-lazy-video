import Ember from 'ember';
import { task } from 'ember-concurrency';

const {
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

  didReceiveAttrs() {
    this._super(...arguments);

    let poster = get(this, 'poster');
    if (poster) {
      return;
    }

    let _url = get(this, '_url');
    let url = get(this, 'url');
    if (_url !== url) {
      get(this, 'getThumbnailTask').perform(url);
      set(this, '_url', url);
    }
  },

  getThumbnailTask: task(function* (url) {
    let providers = get(this, 'providers');

    let image = yield providers.getThumbnailUrl(url);

    set(this, 'videoThumbnail', image);
  }).restartable(),

  click() {
    set(this, 'isDisplayed', true);
    this.sendAction('showingVideo');
  },

  videoSrc: computed('url', function() {
    let providers = get(this, 'providers');
    let url       = get(this, 'url');
    return providers.getUrl(url, 'embedUrl', { autoplay: 1 });
  }),

  style: computed('videoThumbnail', 'poster', function() {
    let poster = get(this, 'poster');
    let thumbnail = poster || get(this, 'videoThumbnail');
    return String.htmlSafe(`background-image: url(${encodeURI(thumbnail)})`);
  })
});
