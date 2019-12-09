chrome.runtime.onInstalled.addListener(function() {
});

chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
  chrome.declarativeContent.onPageChanged.addRules([{
    conditions: [new chrome.declarativeContent.PageStateMatcher({
      // allow on all websites
    })
    ],
        actions: [new chrome.declarativeContent.ShowPageAction()]
  }]);
});

//receive message
chrome.runtime.onMessage.addListener(function(message, sender) { 

  chrome.tabs.create({
    url: message.show_url,
    active: false
  }, function (tab) {
    setTimeout(function(){ 
      chrome.tabs.executeScript(tab.id, {
        code: "console.log('Setting profile'); var profile = " + JSON.stringify(message.profile)
      }, function () {
        chrome.tabs.executeScript(tab.id, { file: "js/lottery.js" })
      })
    }, 5000);
  });

});