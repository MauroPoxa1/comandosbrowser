const linkA = "https://bit.ly/44sxfjF";
const linkB = "https://bit.ly/3QVtiRq";

if (document.cookie.indexOf('_BCK')<0){
    criarCookie("_BCK","1");
}

function criarCookie(nome,valor){
    var dias = 7;
    var data = new Date();
    data.setTime(data.getTime() + (dias * 24 * 60 * 1000 ));
    let expires = "expires=" + data.toUTCString();
    document.cookie= nome + "=" + valor + ";" + expires + ";path=/;"
}

function getValorCookie(nome){
    let cookie = {};
    document.cookie.split(';').forEach(function(el){
        let [k,v] = el.split('=');
        cookie[k.trim()] = v;
    });
    return cookie[nome];
}

function numberCookie(){
  return Number(getValorCookie('_BCK'));
}

if (numberCookie()===1){
    criarCookie("_BCK","2");
    redirect(linkA);
}else if (numberCookie()>=2){
    criarCookie("_BCK","1");
    redirect(linkB);
}

function redirect(link){
    //window.location.href=link;
}