
function checkClose() {
    if (
        (
            document.documentElement.textContent.toLowerCase() || document.documentElement.innerText.toLowerCase()
        ).indexOf('You have already entered this lottery.'.toLowerCase()) > -1
    ) {
        chrome.runtime.sendMessage({
            'message': 'close_me',
        })
        console.log('Closing tab')
    } else {
        console.log('Not closing tab')
    }

}
console.log('Enabling auto-close')
checkClose()

// var observer = new MutationObserver(function (mutations) {
//     mutations.forEach(function (mutation) {
//         if (!mutation.addedNodes) return

//         for (var i = 0; i < mutation.addedNodes.length; i++) {
//             // do things to your newly added nodes here
//             var node = mutation.addedNodes[i]
//             checkClose()
//         }
//     })
// })

// observer.observe(document.body, {
//     childList: true
//     , subtree: true
//     , attributes: false
//     , characterData: false
// })



// stop watching using:
//observer.disconnect()
