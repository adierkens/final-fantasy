'use strict';

var scriptLocations = [
    chrome.extension.getURL("/src/scripts/library/handlebars-latest.js"),
    chrome.extension.getURL("/src/scripts/loader.js"),
]

for (i in scriptLocations) {
    var loc = scriptLocations[i];
    var src = document.createElement('script');
    src.src = loc;
    document.head.appendChild(src);
}


var templates = [
    "match",
    "team",
    "sidebar"
]