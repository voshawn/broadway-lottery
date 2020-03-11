chrome.runtime.onInstalled.addListener(function () {
});

chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
  chrome.declarativeContent.onPageChanged.addRules([{
    conditions: [new chrome.declarativeContent.PageStateMatcher({
      // allow on all websites
    })
    ],
    actions: [new chrome.declarativeContent.ShowPageAction()]
  }]);
});

//receive message
chrome.runtime.onMessage.addListener(function (message, sender) {
  if (message.message != 'open_shows') {
    return
  }
  first = true
  delay = 0
  for (p in message.profiles) {
    var profile = message.profiles[p]
    console.log(p, profile)
    for (s in message.show_urls) {
      var show_url = message.show_urls[s]
      console.log(s, show_url)
      setTimeout(open_show, delay, profile, show_url, first);
      delay += 750
      first = false
    }
  }
});

function open_show(profile, show_url, active = false) {
  console.log("profile: " + profile)
  chrome.tabs.create({
    url: show_url,
    active: active
  }, function (tab) {
    setTimeout(function () {
      chrome.tabs.executeScript(tab.id, {
        code: "console.log('Setting profile'); var profile = " + JSON.stringify(profile)
      }, function () {
        chrome.tabs.executeScript(tab.id, { file: "js/lottery.js" })
      })
    }, 2000);
  });
}

chrome.runtime.onMessage.addListener(function (message, sender) {
  if (message.message != 'close_me') {
    return
  }

  chrome.tabs.remove(sender.tab.id);

});