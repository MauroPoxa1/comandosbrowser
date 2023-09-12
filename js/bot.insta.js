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

function seguirOpen(a){
        statusi.innerHTML="Ativo";
        document.querySelector('#open').onclick= function (){alert('Já ativo')};
        pause.onclick=pausaFunction;
        if (!a || !window.location.href.includes('followers')){
        document.querySelector('.xl565be.x1m39q7l.x1uw6ca5.x2pgyrj:nth-child(2) > a').click();
        }
        setTimeout(()=>{
        scroll();
        },2500);
}

function buscarContas(){
    elContas = document.querySelectorAll("._acan._acap._acas");
    for (var x=0;x<elContas.length;x++){
       // alert(iten.innerText)
       if (elContas[x].innerText==='Seguir' | 'Follow'){
            listaParaSeguir.push(x);
      }
      info();
      if (x+1>=elContas.length){
          seguirFalse = true;
      }
      if (listaParaSeguir.length<55){
        modoAutomatico = true;
      }
    }
}

function playSeguir(){
        if (IDpause<listaParaSeguir.length){
            elContas[listaParaSeguir[IDpause]].click();
        //console.log('click');
        numerosSeguidos.innerHTML= Number(numerosSeguidos.innerHTML)+1;
        IDpause=IDpause+1;
        }else {
            modoAuto();
        }
}

function ativarSaguir(){
    if (seguirFalse===true){
        playSeguir();
    }
}


var scrollCont = 0;
function scroll(){
    if (100>scrollCont){
        document.querySelector("._aano").scrollTo(0,document.querySelector("._aano").scrollHeight);
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


function intervalo(){
    //var lista = [180000,185555,250000,210000,200000,190055,235687,187954,198750];
    //return lista[Math.floor(Math.random() * lista.length)];
    return IDpause * 150000;
}

tempo();
function tempo(){
    setTimeout(()=>{
        ativarSaguir();
       tempo();
    },  150000);
}

