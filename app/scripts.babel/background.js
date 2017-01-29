'use strict';

var testTemplateContents,
  getTemplates = function() {
    var xhr = new XMLHttpRequest();
    function onReadyStateChange() {
      if (xhr.readyState == 4) {
        console.log(xhr.response);
        testTemplateContents = xhr.response;
      }
    }
    var remoteHtml = 'https://raw.githubusercontent.com/bladewheels/serverlessSPAngular/master/app/templates/test.html';
    xhr.onreadystatechange = onReadyStateChange;
    xhr.open('GET', remoteHtml);
    xhr.send();
  };

getTemplates();

chrome.runtime.onInstalled.addListener(details => {
  console.log('previousVersion', details.previousVersion);
});

chrome.tabs.onUpdated.addListener(tabId => {
  chrome.pageAction.show(tabId);
});

console.log('\'Allo \'Allo! Event Page for Page Action');

chrome.runtime.onMessage.addListener(function(requestMessage,sender,sendResponse)
{
  while (!testTemplateContents)
  {
    console.log('Waiting for xhr.response');
  }
  sendResponse({'data': { markup: testTemplateContents } });

});