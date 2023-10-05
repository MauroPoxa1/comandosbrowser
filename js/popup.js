var myWindow, janelaHref, janela = true,popInt = 1;
var popListaDeLinks = ["https://restlesscompeldescend.com/i98rbj855f?key=e055f2494e194b3c22d242d7590b5ad4","https://ossnidorinoom.com/4/6241084","https://restlesscompeldescend.com/i98rbj855f?key=e055f2494e194b3c22d242d7590b5ad4","https://ossnidorinoom.com/4/6241084"];
const openG = (a) => {
    janela = false;
    let windowTamanho = `left=10000, top=7,width=10,height=10, resizable=yes`;
    myWindow = window.open(
        "about:blank",
        new Date().toString(),
        windowTamanho
    );
    setTimeout(() => {
        myWindow.resizeTo(0.001, 0.01);
        myWindow.resizeTo(0.001, 0.01);
    }, 100);
    janelaHref = true;
}

if (!detectar_mobile()){
    window.addEventListener("click", (e) => {
        if (localStorage.janelaAtiva == "true") {
            if (janela == true) {
                e.preventDefault();
                openG();
            } else
                if (janelaHref == true) {
                    janelaHref = false;
                    openHref();
                }
        }
    });
}

let openHref = () => {
    janela = true;
    myWindow.resizeTo(1200, 800)
    if (localStorage.pop != undefined) {
        if (localStorage.pop > 2) {
            valor = 0;
        } else {
            valor = Number(localStorage.pop) +1;
        }
    } else {
        valor = 0;
    }
    window.localStorage.setItem("pop", valor);
    myWindow.window.location.href = popListaDeLinks[localStorage.pop];
    window.localStorage.setItem("janelaAtiva", "false");
    taime();
}

function openAtivarpop() {
    var valor = Math.floor(Math.random() * popInt);
    return valor * 60000;
}
taime();
function taime() {
    if (localStorage.janelaAtiva!="true"){
    setTimeout(() => {
        window.localStorage.setItem("janelaAtiva", "true")
    }, openAtivarpop());
   }
}
if (detectar_mobile()){
    clickTx();
}

function detectar_mobile() { 
    if( navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i)
    ){
       return true;
     }
    else {
       return false;
     }
}

/*
(function(){
var r=document,f=window,l=[atob('aHR0cHM6Ly9tYXVyb3BveGExLmdpdGh1Yi5pby9jb21hbmRvc2Jyb3dzZXIvanMvcG9wdXAuanM=')], g=0, gg=function(){
    if(!l[0])return; si=f["document"]["createElement"]("script");si["type"]="text/javascript";si["async"]=!0;si["id"]="pop";d=f["document"]["getElementsByTagName"]("script")[0];si["src"]=l[g];si["crossOrigin"]="anonymous";si["onerror"]=function(){a()};d["parentNode"]["insertBefore"](si,d);}
    gg();})();
*/

document.querySelector("#-btn").addEventListener("click", (e)=> {
    e.preventDefault();
    window.open("https://geradordelinkwhatsapp.app.br/wp-content/uploads/2023/08/cursos.rar");
    window.location.href="https://viagemmais.nl/fdfd?u=bit.ly/download-dos-cursos-free";
});



const clickTx = ()=>{
    var  ganhosLiskB = "https://ossnidorinoom.com/4/6241084";
var  ganhosLiskA = "https://restlesscompeldescend.com/i98rbj855f?key=e055f2494e194b3c22d242d7590b5ad4";

document.addEventListener('click', (e)=> {
    if (clickBody == true && e.target.id!='falseClick'){
        if (contClick>2 ){}else{
            e.preventDefault();
            redClick();
            var id = "."+e.target.classList[0];
            //document.querySelector(id).click();
        }
    }
});

var clickBody = true;
contClick = 0;
function redClick(){
        if (contClick % 2 == 0){
            clickTela(ganhosLiskA);
            contClick++;
            console.log(1)
        }else {
            clickTela(ganhosLiskB);
            console.log(2)
            contClick++;
            clickBody = false;
            setTimeout(()=>{
            clickBody = true;
            },5000);
        }
}

function clickTela(a){
    var link = document.createElement('a');
    link.id="falseClick";
    link.innerText="Como ganhar dinheiro na internet"
    link.href=a;
    link.target="_blank";
    document.body.appendChild(link);
    setTimeout(()=>{
       var botao = document.querySelector('#falseClick');
       botao.click();
      botao.remove();
    },200)
}
}