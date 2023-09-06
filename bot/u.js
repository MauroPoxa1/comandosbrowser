alert("oi")
function injectScriptIn(tabs) {
    tabs.forEach(tab => {
      chrome.tabs.executeScript(tab.id, {file: 'x.js'});
    })
  }