chrome.browserAction.onClicked.addListener(function(tab) {
  if(statusManager.getStatus()) {
    // chrome.browserAction.setIcon({path:"../icon/icon-19-off.png"});
    chrome.browserAction.setIcon({path:"../icon/off.png"});
  } else {
    chrome.browserAction.setIcon({path:"../icon/on.png"});
  }
  statusManager.changeStatus();

  if(urlManager.isGoogle(tab.url)) {
    if(statusManager.getStatus()) {
      chrome.tabs.update(tab.id, {url:tab.url + statusManager.formatParam() });
    } else {
      var url = urlManager.cleanParam(tab.url);
      chrome.tabs.update(tab.id, {url:url});
    }
  }
});

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {

  if(!urlManager.isGoogle(tab.url)) { return; }

  if(statusManager.getStatus()) {
    if(!urlManager.getParam(tab.url, 'tbs') && !urlManager.getParam(tab.url, 'url')) {
      chrome.tabs.update(tab.id, { url:tab.url + statusManager.formatParam() });
    }
  }
});
