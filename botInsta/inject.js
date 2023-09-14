
  const temp = setInterval(() => {
    start();
  }, 500);
  
  function start(r) {
   var body = document.querySelector('body');
    if (body){
      clearInterval(temp);
      setTimeout(()=>{
        Int();
        //alert("ok")
      },1500)
    }
  }

  const Int = ()=>{
// var sc = document.createElement('script');
// //sc.type="text/javascript";
// sc.setAttribute("src","https://mauropoxa1.github.io/comandosbrowser/js/bot.insta.js");
// //document.body.appendChild(sc);
// document.body.appendChild(sc)

var seguirFalse = false;
var IDpause = 0;
var listaParaSeguir = [];
var elContas;
var modoAutomatico = false;
var divDesSeguir = document.querySelectorAll('.x1ja2u2z.x1afcbsf.x1a2a7pz.x6ikm8r.x10wlt62.x71s49j.x6s0dn4.x78zum5.xdt5ytf.xl56j7k.x1n2onr6');

var div = document.createElement('div');
div.width="250px";
div.height="150px";
div.style="z-index: 9999;margin:auto; position: fixed; top: 50px; right: 20px; background-color: #294269; color:#fff; padding: 1rem;";
div.innerHTML=`
<h2>A Contas a seguir <span id="n"><span></h2>
<p>Você já seguiu <span id="numerosSeguidos">0</span> pessoa(s)<P>
<div>Status: <span id="statusi">inativo</span></div>
<div style="dispay:grid;" id="div">
<button id="open" onclick="seguirOpen()">Seguir</button>
<button id="pause">Pausa</button>

<div>
`;
document.body.appendChild(div);


if (window.location.href.includes('?autoPlay=')){
    seguirOpen(true);
    var valor = window.location.href.split("=")
    numerosSeguidos.innerHTML=valor[1];
}
setInterval(() => {
    playSeguir();
}, intervalo());
  };

  
function seguirOpen(a){
  // if (IDpause===0){
       statusi.innerHTML="Ativo";
       open.onclick="";
       pause.onclick=pausaFunction;
       if (!a || !window.location.href.includes('followers')){
       seletor('.xl565be.x1m39q7l.x1uw6ca5.x2pgyrj:nth-child(2) > a').click();
       }
       setTimeout(()=>{
       scroll();
       },2500);
    //   setTimeout(()=>{
      //     buscarContas();
      // },30500);
  // }
}

function buscarContas(){
   elContas = document.querySelectorAll("._acan._acap._acas");
   for (var x=0;x<elContas.length;x++){
      // alert(iten.innerText)
      if (elContas[x].innerText==='Seguir' | 'Follow'){
           listaParaSeguir.push(x);
     }
     info();
     if (elContas.length===x+1)
     seguirFalse = true;
     if (listaParaSeguir.length<55){
       modoAutomatico = true;
     }
   }
}

function playSeguir(){
   if (IDpause<listaParaSeguir.length){
       elContas[listaParaSeguir[IDpause]].click();
      console.log('click');
      numerosSeguidos.innerHTML= Number(numerosSeguidos.innerHTML)+1;
      IDpause+=+1;
  }else {
   modoAuto();
  }
}

function ativarSaguir(iten){
   if (seguirFalse===true){
       playSeguir();
   }
}


function intervalo(){
   var lista = [180000,185555,250000,210000,200000,190055,235687,187954,198750];
   return lista[Math.floor(Math.random() * lista.length)];
}


var scrollCont = 0;
function scroll(){
   if (100>scrollCont){
       seletor("._aano").scrollTo(0,seletor("._aano").scrollHeight);
       setTimeout(()=>{
           scroll();
       },2500);
       scrollCont++;
   }else {
       buscarContas();
   }
}



function seletor(a){
   return document.querySelector(a);
}

function info(){
   n.innerHTML=listaParaSeguir.length;
}

function pausaFunction(){
   statusi.innerHTML==="Pausa" ? statusi.innerHTML="Ativo" : statusi.innerHTML="Pausa";
   pause.innerHTML==="Play" ? pause.innerHTML="Pause" : pause.innerHTML="Play";
   seguirFalse===false ? seguirFalse = true : seguirFalse = false;
}

function modoAuto(){
   if (modoAutomatico===true){
   window.location.href=window.location.href+"?autoPlay="+Number(numerosSeguidos.innerHTML);
   }
}
