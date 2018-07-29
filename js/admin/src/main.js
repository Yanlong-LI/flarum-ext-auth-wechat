import app from 'flarum/app';

import WechatSettingsModal from 'yudianguo/auth/wechat/components/WechatSettingsModal';

app.initializers.add('yudianguo-auth-wechat', () => {
  app.extensionSettings['yudianguo-auth-wechat'] = () => app.modal.show(new WechatSettingsModal());
});
