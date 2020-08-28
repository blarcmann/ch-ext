console.log('bmlet ready!');


chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage (message, sender, sendResponse) {
  console.log('get in herererere', message);
  if(message.txt == 'hey') {
    console.log('yes ofcos')
    let paragraphs = document.getElementsByTagName('p');
    for(el of paragraphs) {
      el.style['background-color'] = '#FF00FF';
    }
  }
}
//
// (function(){
//     console.log('bookmarklet init');
//     let paragraphs = document.getElementsByTagName('p');
//     for(i = 0; i < paragraphs.length; i++) {
//       paragraphs[i].innerHTML = 'heyy';
//     }
// })();
//
// (function() {
//   let script = document.createElement('script');
//   script.src = 'bookmarklet.js';
//   document.body.appendChild(script);
// }())
