var play = document.querySelector('#player').innerHTML;
play = play.replace('<div id="video-wrapper">','');
play = play.replace('\n>','');
play = play.replace('<iframe name="Player" =""="" src="','');
play = play.replace('" frameborder="0" height="400" scrolling="no" width="640" allowfullscreen=""> </iframe>','');
play = play.replace('</div>','');
var html = document.querySelector('h1')
html.innerHTML=html.innerHTML+"<a onclick='cy()' style='cursor: pointer;'>Extrair  Emblema</a>";
function cy(){
var el = document.createElement('textarea');
el.id="playlink";
el.value=play;
document.body.appendChild(el);
var elemento = document.getElementById('playlink');
elemento.select();
document.execCommand('copy');
html.innerHTML="Link Do Plaer Copiado 😉!";
setTimeout(()=>{
    window.close()
},800);
}