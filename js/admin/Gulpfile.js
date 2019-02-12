var gulp = require('flarum-gulp');

gulp({
  modules: {
    'Flarum/auth/wechat': 'src/**/*.js'
  }
});
