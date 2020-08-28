const inputfield = document.getElementById("user__input");
console.log(inputfield);

function setup() {
  // let userInput = document.getElementsByTagName('input');
  // const inputt = document.getElementById('user-input');
  console.log(innput);
  innput.addEventListener('input', updateValue);

  // const uiVal =  userInput.value.trim().toLowerCase();
  // userInput.addEventListener('input', updateValue);

  function updateValue(e) {
    chrome.tabs.currentTab(gotTab);

    function gotTab (tab) {
      const val = e.target.value;
      console.log(`You updated to ${val}`);
      let message = val;
      const msg = {
        txt: 'hey there!'
      }
      chrome.tabs.sendMessage(tab.id, msg);
    }

  }
}
// setup();