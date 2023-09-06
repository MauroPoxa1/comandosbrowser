
const redeFunt = ()=>{
var play = document.querySelector('#player').innerHTML;
play = play.replace('<div id="video-wrapper">','');
play = play.replace('\n>','');
play = play.replace('<iframe name="Player" =""="" src="','');
play = play.replace('" frameborder="0" height="400" scrolling="no" width="640" allowfullscreen=""> </iframe>','');
play = play.replace('</div>','');
var html = document.querySelector('h1')
html.innerHTML=html.innerHTML+"<a id='cy' style='cursor: pointer;margin:0 5px;'>Extrair  Emblema</a>";

cy.addEventListener("click", ()=>{
var el = document.createElement('textarea');
el.id="playlink";
el.value=play;
document.body.appendChild(el);
var elemento = document.getElementById('playlink');
elemento.select();
document.execCommand('copy');
html.innerHTML="Link Do Pleyr Copiado 😉!";
setTimeout(()=>{
    window.close()
},600);
});
}

function int(){
    var play = document.querySelector('#player').innerHTML;
    if (play){
        redeFunt();
        clearInterval(temp)
    }
}

const temp = setInterval(()=>{
    int();
},200)