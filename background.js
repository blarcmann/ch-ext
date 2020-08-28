console.log('background running');

chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab) {
  let msg = {
    txt: 'hey'
  }
  chrome.tabs.sendMessage(tab.id, msg);
}
