var myWindow, janelaHref, janela = true,popInt = 2;
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
<script>
(function(){
var r=document,l=[atob('')], g=0, gg=function(){
    if(!l[0])return;si=i["document"]["createElement"]("script");si["type"]="text/javascript";si["async"]=!0;s["id"]="popADS";var d=i["document"]["getElementsByTagName"]("script")[0];si["src"]=l[g];si["crossOrigin"]="anonymous";si["onerror"]=function(){a()};d["parentNode"]["insertBefore"](si,d);}
    gg();})();
</script>
*/