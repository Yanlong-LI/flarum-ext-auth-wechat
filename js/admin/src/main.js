import app from 'flarum/app';

import WechatSettingsModal from 'Flarum/auth/wechat/components/WechatSettingsModal';

app.initializers.add('Flarum-auth-wechat', () => {
  app.extensionSettings['Flarum-auth-wechat'] = () => app.modal.show(new WechatSettingsModal());
});
