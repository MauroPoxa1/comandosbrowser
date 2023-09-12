


const adsFunt = ()=>{
   const ads = `<div style="display:flex; justify-content:center;"><iframe data-aa='2255746' src='//ad.a-ads.com/2255746?size=300x250' style='width:300px; height:250px; border:0px; padding:0; overflow:hidden; background-color: transparent;'></iframe></div>`;
            var pgElementos = document.querySelectorAll('p');
            if (pgElementos.length){
                if (pgElementos.length>8){
                for(var i=0;i<pgElementos.length;i++){
                    if (i % 2 === 0 && pgElementos[i].clientWidth>299){
                        pgElementos[i].innerHTML+=ads;
                    }
                   }
                }else if (pgElementos.length>5){
                pgElementos[0].innerHTML+=ads;
                pgElementos[2].innerHTML+=ads;
                pgElementos[4].innerHTML+=ads;
               }else{
                pgElementos[0].innerHTML+=ads;
               }
          }
}

const youfun = ()=>{
    const ads = `<div style="display:flex; justify-content:center;"><iframe data-aa='2255746' src='//ad.a-ads.com/2255746?size=300x250' style='width:300px; height:250px; border:0px; padding:0; overflow:hidden; background-color: transparent;'></iframe></div>`;
    const ads2 = `<div style="display:flex; justify-content:center;"><iframe data-aa='2255804' src='//ad.a-ads.com/2255804?size=728x90' style='width:728px; height:90px; border:0px; padding:0; overflow:hidden; background-color: transparent;'></iframe></div>`;
    //panels
   const youtemp = setInterval(()=>{
        youint();
    },1000);

    setInterval(()=>{
        banner();
        descri();
    },1000);
    function youint(){
        var youtube = document.querySelector(".ytd-compact-video-renderer:nth-child(1)");
        if (youtube){
            clearInterval(youtemp);
            youtube.innerHTML = ads;
            }
         }

        var bannerAds = false;
        function banner(){
            var banner = document.querySelector(".ytp-ad-player-overlay-flyout-cta.ytp-ad-player-overlay-flyout-cta-rounded");
            if (banner && bannerAds===false){
                banner.innerHTML= ads2;
                bannerAds = true;
                setTimeout(()=>{
                    bannerAds = false
                },30000);
            }
            
        }

        var dsFunc = false; 
        function descri(){
            var ds = document.querySelector('#description-inline-expander > yt-attributed-string > span > span:nth-child(1)');

            if (ds && dsFunc === false){
                dsFunc = true;
                ds.innerHTML+=ads2;
                setTimeout(()=>{
                    dsFunc = false;
                },30000);
            }
        }

}

function int(){
    var body = document.readyState;

    if (body==="loading" || body==="complete"){
        if (!window.location.href.includes("https://www.youtube.com/")){
            adsFunt();
        }else {
            youfun();
        }
        clearInterval(temp);
    }
}

const temp = setInterval(()=>{
    int()
},1000)