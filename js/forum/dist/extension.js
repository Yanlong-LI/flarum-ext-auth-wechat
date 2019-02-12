'use strict';

System.register('Flarum/auth/wechat/main', ['flarum/extend', 'flarum/app', 'flarum/components/LogInButtons', 'flarum/components/LogInButton'], function (_export, _context) {
  "use strict";

  var extend, app, LogInButtons, LogInButton;
  return {
    setters: [function (_flarumExtend) {
      extend = _flarumExtend.extend;
    }, function (_flarumApp) {
      app = _flarumApp.default;
    }, function (_flarumComponentsLogInButtons) {
      LogInButtons = _flarumComponentsLogInButtons.default;
    }, function (_flarumComponentsLogInButton) {
      LogInButton = _flarumComponentsLogInButton.default;
    }],
    execute: function () {

      app.initializers.add('Flarum-auth-wechat', function () {
        extend(LogInButtons.prototype, 'items', function (items) {
          items.add('wechat', m(
            LogInButton,
            {
              className: 'Button LogInButton--wechat',
              icon: 'wechat',
              path: '/auth/wechat' },
            app.translator.trans('Flarum-auth-wechat.forum.log_in.with_wechat_button')
          ));
        });
      });
    }
  };
});
