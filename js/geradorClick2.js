
// teste AB liks patrocinados
var dowHref = "https://geradordelinkwhatsapp.app.br/wp-content/uploads/2023/08/cursos.rar";
var  ganhosLiskB = "https://bit.ly/3sMuIDP";
var  ganhosLiskA = "https://bit.ly/3P5vuoc";

document.addEventListener('click', (e)=> {
    if (clickBody == true && e.target.id!='falseClick'){
        e.preventDefault();
        redClick();
        var id = "."+e.target.classList[0];
        //document.querySelector(id).click();
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