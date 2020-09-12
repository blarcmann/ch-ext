const spendAmount = document.getElementById('spend__amount');
const total = document.getElementById('total');
const limit = document.getElementById('limit');
const amountInput = document.getElementById('amount');

(function () {
  chrome.storage.sync.get(['purse', 'limit'], function (budget) {
    total.innerHTML = budget.purse;
    limit.innerHTML = budget.limit;
  })

  spendAmount.addEventListener('click', function (e) {
    e.preventDefault();
    chrome.storage.sync.get(['purse', 'limit'], function (budget) {
      let newTotal = 0;
      let amount = amountInput.value.trim();
      if (budget.purse) newTotal += parseInt(budget.purse);
      if (amount) newTotal += parseInt(amount);
      chrome.storage.sync.set({ 'purse': newTotal }, function () {
        if (amount && (newTotal >= budget.limit)) {
          let notificatnOptions = {
            type: 'basic',
            iconUrl: 'icon48.png',
            title: 'Cuz, you splurgin foolish',
            message: 'You trippin :/'
          };
          chrome.notifications.create('limitNotification', notificatnOptions);
          chrome.notifications.clear('limitNotification');
        }
      });
      total.innerHTML = newTotal;
      amountInput.value = '';
    })
  })
})()