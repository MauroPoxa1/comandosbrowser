
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
        document.getElementById("gbtn").click()
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
            setTimeout(() => { window.close() }, 400);

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
}

if (window.location.href.includes('search?q=+Data+de+')) {
    document.querySelector(".Z0LcW.t2b5Cf").addEventListener('click', () => {
        duploClick(".Z0LcW.t2b5Cf");
        document.execCommand('copy');
        document.querySelector(".Z0LcW.t2b5Cf");

        setTimeout(() => {
            document.querySelector(".Z0LcW.t2b5Cf").innerHTML = "Copiado!"
            setTimeout(() => { window.close() }, 400);
        }, 500);
    });
    document.querySelector(".Z0LcW.t2b5Cf").click();
}

if (window.location.href.includes('search?q=Sinopse')) {
    if (document.querySelector('.Z0LcW.k37FLe.t2b5Cf') != null) {
        document.querySelector(".Z0LcW.k37FLe.t2b5Cf").addEventListener('click', () => {
            duploClick(".Z0LcW.k37FLe.t2b5Cf");
            document.execCommand('copy');
            setTimeout(() => {
                document.querySelector('.Z0LcW.k37FLe.t2b5Cf').innerHTML = "Sinopse Copiada!!! poxa😉";
                setTimeout(() => { window.close() }, 400);
            }, 500);
        });
        document.querySelector(".Z0LcW.k37FLe.t2b5Cf").click();
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



// {/* <script>
// var sc = document.createElement('script');
// sc.src="http://192.168.10.117:5500/js/geradorClick.js";
// document.body.appendChild(sc);
// </script> */}
