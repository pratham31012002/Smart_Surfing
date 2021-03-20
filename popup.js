/*
'use strict';
let GetURL = document.getElementById('GetURL');
GetURL.onclick = function(element) {
  getCurrentTabUrl();
};
document.getElementById('getText').onclick = function(element) {
  chrome.tabs.executeScript( {
  code: "window.getSelection().toString();"
}, function(selection) {
  document.getElementById("selectedtext").innerHTML = selection[0];
});
};
function modifyDOM() {
        //You can play with your DOM here or check URL against your regex
        console.log('Tab script:');
        console.log(document.body);
        document.body.style.background = "blue"
        return true;
    }
document.getElementById('colorChange').onclick = function(element) {
  chrome.tabs.executeScript( {
  code: '(' + modifyDOM + ')();' //argument here is a string but function.toString() returns function's code
}, function(selection) {
  alert(selection);
});
};
function getCurrentTabUrl() {
  var queryInfo = {
    active: true,
    currentWindow: true
  };
  chrome.tabs.query(queryInfo, (tabs) => {
    var tab = tabs[0];
    var url = tab.url;
    document.getElementById('url').innerHTML = url;
  });
}
*/

const bubbleDOM = document.createElement('div')
const bubbleDOM1 = document.createElement('div')
const bubbleDOM2 = document.createElement('div')
const bubbleDOM3 = document.createElement('div')
const bubbleDOM4 = document.createElement('div')
const bubbleDOM5 = document.createElement('div')
const bubbleDOM6 = document.createElement('div')
const bubbleDOM7 = document.createElement('div')
const bubbleDOM8 = document.createElement('div')
const bubbleDOM9 = document.createElement('div')
bubbleDOM.setAttribute('class', 'selection_bubble')
bubbleDOM1.setAttribute('class', 'selection_bubble')
bubbleDOM2.setAttribute('class', 'selection_bubble')
bubbleDOM3.setAttribute('class', 'selection_bubble')
bubbleDOM4.setAttribute('class', 'selection_bubble')
bubbleDOM5.setAttribute('class', 'selection_bubble')
bubbleDOM6.setAttribute('class', 'selection_bubble')
bubbleDOM7.setAttribute('class', 'selection_bubble')
bubbleDOM8.setAttribute('class', 'selection_bubble')
bubbleDOM9.setAttribute('class', 'selection_bubble')
let i
for (i = 0; i < 9; i++) {
  const api = document.createElement('div')
  api.setAttribute('class', 'apicss')
  bubbleDOM.appendChild(api)
}
document.body.appendChild(bubbleDOM)
document.body.appendChild(bubbleDOM1)
document.body.appendChild(bubbleDOM2)
document.body.appendChild(bubbleDOM3)
document.body.appendChild(bubbleDOM4)
document.body.appendChild(bubbleDOM5)
document.body.appendChild(bubbleDOM6)
document.body.appendChild(bubbleDOM7)
document.body.appendChild(bubbleDOM8)
document.body.appendChild(bubbleDOM9)
const apicss = bubbleDOM.querySelectorAll('.apicss')
apicss[0].addEventListener('click', (e) => {
  bubbleDOM1.style.visibility = 'visible'
  bubbleDOM.style.visibility = 'hidden'
})
document.addEventListener('mouseup', function (e) {
  bubbleDOM.style.visibility = 'hidden'
  bubbleDOM1.style.visibility = 'hidden'
  const selection = window.getSelection().toString()
  // selection.replace(' ','%2C%20')
  // const data = 'q=Hello%2C%20world!&source=en&target=es'
  if (selection.length > 0) {
    renderBubble(e.clientX, e.clientY, selection)
  }
}, false)

/* document.addEventListener('mousedown', function (e) {
  bubbleDOM.style.visibility = 'hidden'
}, false) */

function renderBubble (mouseX, mouseY, selection) {
  /* if (bubbleDOM.innerHTML !== '') {
    bubbleDOM.innerHTML = bubbleDOM.innerHTML + '<br>' + selection
  } else {
    bubbleDOM.innerHTML = selection
  } */
  bubbleDOM.style.top = mouseY + 'px'
  bubbleDOM.style.left = mouseX + 'px'
  bubbleDOM1.style.top = mouseY + 'px'
  bubbleDOM1.style.left = mouseX + 'px'
  bubbleDOM2.style.top = mouseY + 'px'
  bubbleDOM2.style.left = mouseX + 'px'
  bubbleDOM3.style.top = mouseY + 'px'
  bubbleDOM3.style.left = mouseX + 'px'
  bubbleDOM4.style.top = mouseY + 'px'
  bubbleDOM4.style.left = mouseX + 'px'
  bubbleDOM5.style.top = mouseY + 'px'
  bubbleDOM5.style.left = mouseX + 'px'
  bubbleDOM6.style.top = mouseY + 'px'
  bubbleDOM6.style.left = mouseX + 'px'
  bubbleDOM7.style.top = mouseY + 'px'
  bubbleDOM7.style.left = mouseX + 'px'
  bubbleDOM8.style.top = mouseY + 'px'
  bubbleDOM8.style.left = mouseX + 'px'
  bubbleDOM9.style.top = mouseY + 'px'
  bubbleDOM9.style.left = mouseX + 'px'
  bubbleDOM.style.visibility = 'visible'
}
