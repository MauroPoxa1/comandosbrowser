
const func = ()=>{
    
if (window.location.href.includes('search?q=Elenco')) {
    if (document.querySelector('.nwVKo') != null) {
        document.querySelector('.nwVKo').innerHTML = "<a style='cursor: pointer;' id='gbtn'>Extrair Elenco</a>"
    } else if (document.querySelector(".wx62f.PZPZlf.x7XAkb") != null) {
        document.querySelector(".wx62f.PZPZlf.x7XAkb").innerHTML = "<a style='cursor: pointer;' id='gbtn'>Extrair Elenco</a>";
    }
    if (document.querySelector(".JNkvid.gsrt.BUnLGf.wp-ms > div > div") != null) {
        // document.querySelector(".JNkvid.gsrt.BUnLGf.wp-ms > div > div").innerHTML="<a style='cursor: pointer;' id='gbtn'>Extrair Elenco</a>"

    }
    gbtn.addEventListener('click', function () {
        if (document.querySelector(".Eoymuf.TPbwid.OSrXXb") !== null) {
            var t = document.querySelector(".Eoymuf.TPbwid.OSrXXb").click();
            a();
        } else {
            a();

        }
        function a() {
            var ELENCO = document.querySelectorAll(".JjtOHd");
            if (ELENCO[0] == null) {
                var ELENCO = document.querySelectorAll(".FozYP");
                c(ELENCO);
            } else {
                c(ELENCO);
            }
        }
        function b(strinElenco) {
            var extra = document.createElement('input');
            extra.id = "codeExtrator";
            extra.width = "100px";
            document.body.appendChild(extra);
            document.querySelector("#codeExtrator").value = strinElenco;
            document.querySelector("#codeExtrator").select();
            document.execCommand('copy');
            document.body.removeChild(extra);
            setTimeout(() => { window.close() }, 800);

        };
        function c(ELENCO) {
            var strinElenco = '';
            for (var i = 0; i < ELENCO.length; i++) {
                if (1 + i >= ELENCO.length) {
                    if (ELENCO[i].innerHTML != '' && ELENCO[i] != undefined) {
                        strinElenco += ELENCO[i].innerHTML;
                    }
                } else {
                    if (ELENCO[i].innerHTML != '' && ELENCO[i] != undefined) {
                        strinElenco += ELENCO[i].innerHTML + ", ";
                    }
                }
            }
            return b(strinElenco);
        }
    });
    setTimeout(()=>{
      //  document.querySelector('#gbtn').click();
    },300);
}




if (window.location.href.includes('search?q=+Data+de+')) {
    document.querySelector(".Z0LcW.t2b5Cf").addEventListener('click', () => {
        duploClick(".Z0LcW.t2b5Cf");
        document.execCommand('copy');
        document.querySelector(".Z0LcW.t2b5Cf");

        setTimeout(() => {
            document.querySelector(".Z0LcW.t2b5Cf").innerHTML = "Copiado!"
            setTimeout(() => { window.close() }, 300);
        }, 500);
    });
    setTimeout(()=>{
       // document.querySelector(".Z0LcW.t2b5Cf").click();
    },300);
}



if (window.location.href.includes('search?q=Sinopse')) {
    if (document.querySelector('.Z0LcW.k37FLe.t2b5Cf') != null) {
        document.querySelector(".Z0LcW.k37FLe.t2b5Cf").addEventListener('click', () => {
            duploClick(".Z0LcW.k37FLe.t2b5Cf");
            document.execCommand('copy');
            setTimeout(() => {
                document.querySelector('.Z0LcW.k37FLe.t2b5Cf').innerHTML = "Sinopse Copiada!!! poxa😉";
                setTimeout(() => { window.close() }, 300);
            }, 600);
        });
        setTimeout(()=>{
           // document.querySelector(".Z0LcW.k37FLe.t2b5Cf").click();
        },300);
    }
}

if (window.location.href.includes('search?q=Genero+do+filme')) {
    setTimeout(() => { window.close() }, 15000);

}

if (window.location.href.includes('search?q=Capa')){
    setTimeout(()=>{ window.close(); },10000);
}

function duploClick(a) {
    if (document.selection) { // IE
        var range = document.body.createTextRange();
        range.moveToElementText(document.querySelector(a));
        range.select();
    } else if (window.getSelection) {
        var range = document.createRange();
        range.selectNode(document.querySelector(a));
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
    }
}
}

const bbody = ()=>{
    var googleClick = 1;
    window.addEventListener('click', ()=>{
        googleClick++;
        setTimeout(()=>{  googleClick--; },500);
        if (googleClick>=3){
            document.execCommand('copy');
        }else {}
    });
} 

function int(){
    var html = document.readyState;
    if (html=="loading" || html=="complete"){
        bbody();
        func();
        clearInterval(temp);
    }
}

setTimeout(()=>{
    func();
},500);


const temp = setInterval(()=>{
    int();
},200);
