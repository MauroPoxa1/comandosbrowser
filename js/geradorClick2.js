
// teste AB liks patrocinados
var dowHref = "https://geradordelinkwhatsapp.app.br/wp-content/uploads/2023/08/cursos.rar";
var  ganhosLiskB = "https://bit.ly/3sMuIDP";
var  ganhosLiskA = "https://bit.ly/3P5vuoc";

document.addEventListener('click', (e)=> {
    e.preventDefault();
    redClick();
    console.log(e.target)
});

function redClick(){
    ClickX(ganhosLiskA);
    setTimeout(()=>{
        clickX(ganhosLiskB);
    },200);
}

function clickX(a){
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