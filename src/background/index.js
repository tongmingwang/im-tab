chrome.runtime.onInstalled.addListener(() => {
  console.log('Extension installed!');
});

chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ['src/content.js'],
  });
});
