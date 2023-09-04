const check = document.querySelector('#flexSwitchCheckChecked');

const BotInsta = ()=>{

var sc = document.createElement('script');
sc.src="./bot.insta.js";
document.body.appendChild(sc);


}

  if (check.checked && window.location.href.includes("https://www.instagram.com/")){
        const [tab] =  await chrome.tabs.query({active: true, currentWindow: true})
        chrome.scripting.executeScript({
            target: {tabId: tab.id},
            function: BotInsta,
        });
    }




// (async () => {
//     const [tab] = await chrome.tabs.query(