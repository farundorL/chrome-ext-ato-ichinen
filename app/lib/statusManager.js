/*!
 * statusManager JavaScript Library v0.1
 *
 * Copyright (c) 2012 amazedkoumei (Twitter: @amazedkoumei, Blog:http://blog.amazedkoumei.com)
 * Licensed under the MIT license + "keep this comment block even if you modify it".
 *
 * History:
 *  05-06-2012 new created
 */
var statusManager = $({});
statusManager.languages = [undefined, 'ja', 'en'];
statusManager.spans = ['y', 'm', 'w', 'd', 'h', undefined];

statusManager.status = false;
statusManager.langage = 0;
statusManager.span = 0;

$.extend(statusManager, {
  getStatus: function() {
    return statusManager.status;
  },
  changeStatus: function() {
    statusManager.status = !statusManager.status;
  },
  getLanguage: function() {
    return statusManager.languages[statusManager.langage];
  },
  changeLanguage: function() {
    statusManager.langage += 1;
    statusManager.langage %= statusManager.languages.length;
  },
  getSpan: function() {
    return statusManager.spans[statusManager.span];
  },
  changeSpan: function() {
    statusManager.span += 1;
    statusManager.span %= statusManager.spans.length;
  },
  formatParam: function() {
    var lang = this.getLanguage();
    var spn = this.getSpan();
    return ((lang) ? '&lr=lang_' + lang : '') + ((spn) ? '&tbs=qdr:' + spn : '');
  },
});