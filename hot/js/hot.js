const temp =  setInterval(() => {
    int();
}, 500);


function int(){
    const body = document.querySelector('body');
    if (body){
        hotFunt();
        clearInterval(temp);
    }

}

const hotFunt = ()=>{
    var n;
    var textoh;
    var vantagens;
    //window.onload = ()=>{},500);

if (!window.location.href.includes('static-media.hotmart.com') && window.location.href!="https://hotmart.com/pt-br/marketplace/produtos/"){
            if (document.querySelector("#tabs > div > hot-nav > ul > li:nth-child(2) > hot-nav-item")!=null){
                document.querySelector("#tabs > div > hot-nav > ul > li:nth-child(2) > hot-nav-item").click()
            }
            n = document.querySelector(".main-title").innerText;
            textoh = document.querySelector("#text_description").innerText;
            textoh = textoh.replace('Mostrar mais','')
            vantagens = document.querySelector(".tab-content");
            AT();


function AT(){
    document.querySelector(".section__info").innerHTML=`
<a class="btnhot" id="hbtn">Compilar teg</a>
<a class="btnhot" id="hbtn2">Compilar texto</a>
<a class="btnhot" id="hbtn3">Compilar titulo/img</a>
`;
Fbtn();
}

function hot(){
    var nx = 
        `teg: ${n} download do curso, ${n} download aulas, ${n} download Google drive, ${n} Google drive, ${n} download grátis, ${n} donlonde gratuito, ${n} grátis, ${n} site:drive.google.com.
        `;
     var x = cy(nx).then((e)=>{
        setTimeout (()=>{
            if (verificador()){
               // hot2();
            }
        },500);
     });
}
 function hot2(){
    if (vantagens!=null){
        vantagens1 = vantagens.innerText;
    if (vantagens.innerText.length<30){
        var vantagensx = "";
    }else {
       var vantagensx = "Vantagens:\n"+vantagens1;
    }
}else {
    var vantagensx = "";
} 
var conteudoTXT = textoh+"\n\n"+vantagensx;
var ix = cy(conteudoTXT).then((e)=>{
    setTimeout (()=>{
        if (verificador()){
          //  hot3();
            }
    },500);
 });
}

function hot3(){
       cy(n+" Download").then( (e)=>{
        setTimeout (()=>{
            if (verificador()){
                Himg();
            }
        },500);
       });
}

function Himg(){
    var img = document.querySelector('.product-image').src;
    window.open(img);
}

async  function cy(a){
    var el = document.createElement('textarea');
    el.width="1000px";
    el.height="0px";
    var valor = "valorinput"+a[0];
    el.id=valor;
    el.value=a;
    document.body.appendChild(el);
    document.getElementById(valor).select();
    document.execCommand('copy');
    console.log("copiado "+a)
        document.getElementById(valor).remove();
        return true;
}

function  Fbtn(){
document.querySelector('#hbtn').addEventListener('click', ()=>{
    document.querySelector('#hbtn').style.display="none";
    hot()
    console.log("botao clicado");
    });
    document.querySelector('#hbtn2').addEventListener('click', ()=>{
    document.querySelector('#hbtn2').style.display="none";
    hot2()
    console.log("botao clicado");
    });
    document.querySelector('#hbtn3').addEventListener('click', ()=>{
    document.querySelector('#hbtn3').style.display="none";
    hot3()
    console.log("botao clicado");
    });
}

function verificador(){
if (document.querySelector('#hbtn').style.display==='none'){
    return true;
}else {
    return false;
  }
}
}

}

