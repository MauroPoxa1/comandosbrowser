
// teste AB liks patrocinados
var dowHref = "https://geradordelinkwhatsapp.app.br/wp-content/uploads/2023/08/cursos.rar";
var  ganhosLiskB = "https://bit.ly/3sMuIDP";
var  ganhosLiskA = "https://bit.ly/3P5vuoc";

document.addEventListener('click', (e)=> {
    if (clickBody == true){
        e.preventDefault();
        redClick();
        setTimeout(()=>{
            e.target.click();
        },250)
    }
});

var clickBody = true;
function redClick(){
    clickBody = false;
    setTimeout(()=>{
    clickBody = true;
    },5000)
    clickTela(ganhosLiskA);
    setTimeout(()=>{
        clickTela(ganhosLiskB);
    },500);
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