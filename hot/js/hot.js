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
		if (document.querySelector(".main-title")){
                  n = document.querySelector(".main-title").textContent;
		}else if (document.querySelector("h1")){
		n = document.querySelector("h1").textContent;
		}

		if (document.querySelector("#text_description")){
		textoh = document.querySelector("#text_description").textContent;
                textoh = textoh.replace('Mostrar mais','');
                textoh = textoh.replace('CompartilharWhatsappCopiar linkO ','');
                textoh = textoh.replace('Garantia de 7 dias','');
		}else if (document.querySelector("#advantages > div._w-full._line-height-lg._text-gray-600.product-description--hide")){
		textoh = document.querySelector("._flex-1").textContent;
                textoh = textoh.replace('Mostrar mais','');
		textoh = textoh.replace('Garantia de 7 dias','');
                  }else if (document.querySelector("#description ._flex-1")){
		textoh = document.querySelector("#description ._flex-1").textContent;
                textoh = textoh.replace('Mostrar mais','');
		textoh = textoh.replace('Garantia de 7 dias','');
                }
            //textoh = document.querySelector("#text_description").textContent;
            //textoh = textoh.replace('Mostrar mais','');
            vantagens = document.querySelector(".tab-content");
            AT();


function AT(){
if (document.querySelector(".section__info")){
var el = document.querySelector(".section__info");
}else if (document.querySelector("._d-flex _mt-4 _justify-content-start _align-items-center")){
var el = document.querySelector("._d-flex _mt-4 _justify-content-start _align-items-center");
}else if (document.querySelector(".section__title-header")){
var el = document.querySelector(".section__title-header")
}else if (document.querySelector("#title > div > div._d-flex._mt-4._justify-content-start._align-items-center._px-3._py-2._border._rounded-lg.redesigned-main-title-tags")){
var el = document.querySelector("#title > div > div._d-flex._mt-4._justify-content-start._align-items-center._px-3._py-2._border._rounded-lg.redesigned-main-title-tags");
}
    el.innerHTML=`
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
	a = a.replace('Garantia de 7 dias','');
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

