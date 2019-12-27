
function checkClose() {
    // These must be lowercase
    messages = ['you have already entered this lottery.', 'your lottery entry has been received!']
    pageText = document.documentElement.innerText.toLowerCase()
    if (
        messages.some(r => pageText.includes(r))
    ) {
        chrome.runtime.sendMessage({
            'message': 'close_me',
        })
        console.log('Closing tab')
    } else {
        console.log('Not closing tab')
    }

}
checkClose()
