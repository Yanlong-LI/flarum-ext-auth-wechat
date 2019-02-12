'use strict';

System.register('Flarum/auth/wechat/components/WechatSettingsModal', ['flarum/components/SettingsModal'], function (_export, _context) {
  "use strict";

  var SettingsModal, WechatSettingsModal;
  return {
    setters: [function (_flarumComponentsSettingsModal) {
      SettingsModal = _flarumComponentsSettingsModal.default;
    }],
    execute: function () {
      WechatSettingsModal = function (_SettingsModal) {
        babelHelpers.inherits(WechatSettingsModal, _SettingsModal);

        function WechatSettingsModal() {
          babelHelpers.classCallCheck(this, WechatSettingsModal);
          return babelHelpers.possibleConstructorReturn(this, (WechatSettingsModal.__proto__ || Object.getPrototypeOf(WechatSettingsModal)).apply(this, arguments));
        }

        babelHelpers.createClass(WechatSettingsModal, [{
          key: 'className',
          value: function className() {
            return 'WechatSettingsModal Modal--small';
          }
        }, {
          key: 'title',
          value: function title() {
            return app.translator.trans('Flarum-auth-wechat.admin.wechat_settings.title');
          }
        }, {
          key: 'form',
          value: function form() {
            return [m(
              'div',
              { className: 'Form-group' },
              m(
                'label',
                null,
                app.translator.trans('Flarum-auth-wechat.admin.wechat_settings.app_id_label')
              ),
              m('input', { className: 'FormControl', bidi: this.setting('Flarum-auth-wechat.app_id') })
            ), m(
              'div',
              { className: 'Form-group' },
              m(
                'label',
                null,
                app.translator.trans('Flarum-auth-wechat.admin.wechat_settings.app_secret_label')
              ),
              m('input', { className: 'FormControl', bidi: this.setting('Flarum-auth-wechat.app_secret') })
            ), m(
              'div',
              { className: 'Form-group' },
              m(
                'label',
                null,
                app.translator.trans('Flarum-auth-wechat.admin.wechat_settings.app_cburl_label')
              ),
              m('input', { className: 'FormControl', bidi: this.setting('Flarum-auth-wechat.callback_url') })
            )];
          }
        }]);
        return WechatSettingsModal;
      }(SettingsModal);

      _export('default', WechatSettingsModal);
    }
  };
});;
'use strict';

System.register('Flarum/auth/wechat/main', ['flarum/app', 'Flarum/auth/wechat/components/WechatSettingsModal'], function (_export, _context) {
  "use strict";

  var app, WechatSettingsModal;
  return {
    setters: [function (_flarumApp) {
      app = _flarumApp.default;
    }, function (_FlarumAuthWechatComponentsWechatSettingsModal) {
      WechatSettingsModal = _FlarumAuthWechatComponentsWechatSettingsModal.default;
    }],
    execute: function () {

      app.initializers.add('Flarum-auth-wechat', function () {
        app.extensionSettings['Flarum-auth-wechat'] = function () {
          return app.modal.show(new WechatSettingsModal());
        };
      });
    }
  };
});
