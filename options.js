const saveLimit = document.getElementById('save__limit');
const resetTotal = document.getElementById('reset__total');
const limit = document.getElementById('limit');

(function () {
  chrome.storage.sync.get('limit', function (budget) {
    limit.value = budget.limit;
  })
  saveLimit.addEventListener('click', function (e) {
    e.preventDefault();
    let limitVal = limit.value.trim();
    if (limit) {
      chrome.storage.sync.set({ 'limit': limitVal }, function () {
        close();
      })
    }
  })
  resetTotal.addEventListener('click', function (e) {
    e.preventDefault();
    chrome.storage.sync.set({ 'purse': 0 });
  })
})()