console.log("Main");
var loc = chrome.extension.getURL("/src/scripts/loader.js");
console.log(loc);

var src = document.createElement('script');
src.src = loc

document.head.appendChild(src);
