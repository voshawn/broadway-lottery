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

