const check = document.querySelector('#flexSwitchCheckChecked');

const BotInsta = ()=>{
        window.addEventListener("click", (e)=>{
            console.log(e.target)
        });
        var sc = document.createElement('script');
        sc.type="text/javascript";
        sc.src="https://mauropoxa1.github.io/comandosbrowser/js/bot.insta.js";
        document.body.appendChild(sc);

}


check.addEventListener("click", async ()=>{
if (check.checked){
  //  alert("oi")
        const [tab] =  await chrome.tabs.query({active: true, currentWindow: true})
        chrome.scripting.executeScript({
            target: {tabId: tab.id},
            files : [ "index.js" ],
      });
   }
});



// (async () => {
//     const [tab] = await chrome.tabs.query(