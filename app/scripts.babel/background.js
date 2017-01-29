'use strict';

chrome.runtime.onInstalled.addListener(details => {
  console.log('previousVersion', details.previousVersion);
});

chrome.tabs.onUpdated.addListener(tabId => {
  chrome.pageAction.show(tabId);
});

console.log('\'Allo \'Allo! Event Page for Page Action');

chrome.runtime.onMessage.addListener(function(requestMessage,sender,sendResponse)
{
  console.log('requestMessage: ' + requestMessage.data + ', received from Tab: ' + sender.tab.id);

  var xhr = new XMLHttpRequest();
  function onReadyStateChange() {
    if (xhr.readyState == 4) {
      console.log(xhr.response);
      sendResponse({'data': { markup: xhr.response } });
    }
  }
  var remoteHtml = 'https://raw.githubusercontent.com/bladewheels/serverlessSPAngular/master/app/templates/test.html';
  xhr.onreadystatechange = onReadyStateChange;
  xhr.open('GET', remoteHtml);
  xhr.send();

  // sendResponse({'data': 'Test message Y, received from Tab: ' + sender.tab.id});

});