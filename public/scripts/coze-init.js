/* global CozeWebSDK */
// Coze 智能体初始化
(function () {
  function init() {
    if (!window.CozeWebSDK) return setTimeout(init, 80);
    var token = window.__cozeToken;
    new window.CozeWebSDK.WebChatClient({
      config: { bot_id: window.__cozeBotId },
      componentProps: { title: '岭南小助手' },
      auth: {
        type: 'token',
        token: token,
        onRefreshToken: function () {
          return token;
        },
      },
      ui: {
        base: {
          icon: 'https://lf-coze-web-cdn.coze.cn/obj/coze-web-cn/obric/coze/favicon.1970.png',
          layout: 'pc',
          zIndex: 9999,
          lang: 'zh-CN',
        },
        footer: {
          isShow: true,
          expressionText: '本功能由陈恒律师开发接入 · AI 内容仅供参考',
        },
      },
      el: document.getElementById('coze-chat-container'),
    });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
