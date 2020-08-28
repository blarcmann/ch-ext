const spendAmount = document.getElementById("spend__amount");
const total = document.getElementById("total");
const amountInput = document.getElementById("amount");

(function () {

  chrome.storage.sync.get('purse', function (budget) {
    total.innerHTML = budget.purse;
  })

  spendAmount.addEventListener('click', function (e) {
    e.preventDefault();
    chrome.storage.sync.get('purse', function (budget) {
      let newTotal = 0;
      let amount = amountInput.value.trim();
      if (budget.purse) {
        newTotal = newTotal + parseInt(budget.purse);
        console.log('after budget', budget, newTotal)
      }
      if (amount) {
        newTotal = newTotal + parseInt(amount);
        console.log('after amount', amount, newTotal)
      }
      chrome.storage.sync.set({ 'purse': newTotal });
      total.innerHTML = newTotal;
      amountInput.value = '';
    })
  })
})()