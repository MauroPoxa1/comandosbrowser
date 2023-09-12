const temp  = setInterval(() => {
    int();
}, 200);


function int(){
    const body = document.querySelector('body > img');
    if (body){
        hotFunt();
        clearInterval(temp);
    }

}

const hotFunt = ()=>{
    var img = document.querySelector("body > img").src;
    var el = document.createElement('a');
    el.href=img;
    el.id="btnfalse";
    var exe = img.split('?');
    var paht = exe[0].split('/')
    el.href=exe[0];
    el.download=paht[10];
    document.body.appendChild(el);
    document.querySelector('#btnfalse').click();
    window.close();
}

