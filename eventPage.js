const contextMenuItem = {
  "id": "spendStash",
  "title": "Spend Stash",
  "contexts": ["all"],
}

function isInt(value) {
  return !isNaN(value) &&
    parseInt(Number(value)) == value &&
    !isNaN(parseInt(value, 10))
}

chrome.contextMenus.create(contextMenuItem);
chrome.contextMenus.onClicked.addListener(function (cbdata) {
  if (cbdata.menuItemId === 'spendStash' && cbdata.selectionText) {
    if (isInt(cbdata.selectionText)) {
      chrome.storage.sync.get(['purse', 'limit'], function (budget) {
        let newTotal = 0;
        if (budget.purse) newTotal += parseInt(budget.purse);
        newTotal += parseInt(cbdata.selectionText);
        console.log('on here');
        chrome.storage.sync.set({ 'purse': newTotal }, function () {
          if (newTotal >= budget.limit) {
            let notificatnOptions = {
              type: 'basic',
              iconUrl: 'icon48.png',
              title: 'Cuz be splurgin foolish',
              message: 'You trippin bro :/'
            };
            chrome.notifications.create('limitNotification', notificatnOptions);
            chrome.notifications.clear('limitNotification');
          }
        })
      })
    }
  }
})

chrome.storage.onChanged.addListener(function (changes, storageName) {
  chrome.browserAction.setBadgeText({"text": changes.purse.newValue.toString()})
})