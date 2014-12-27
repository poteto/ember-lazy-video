/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-lazy-video',
  included: function(app) {
    this._super.included(app);
    app.import('vendor/lazy-video/lazy-video.css');
  }
};
