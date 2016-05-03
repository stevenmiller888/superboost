
/**
 * When the browser action is clicked, inject
 * our content script.
 */

chrome.browserAction.onClicked.addListener(function() {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.tabs.executeScript(tabs[0].id, { file: 'content_script.js' });
  });
});
