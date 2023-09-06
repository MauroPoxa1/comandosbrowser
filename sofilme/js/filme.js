
const filmesFunt = ()=> {
     window.onload= setTimeout(()=>{
          if (window.location.href.includes("#")){
               var xi = window.location.href;
               var xi2 = xi.split('#');
               innerX(decodeURI(xi2[1]));
               setTimeout(()=>{window.close()},15000);
          }},300);
          function innerX(a){
               setTimeout(()=>{
                    document.querySelector("input[type=search]").value=a;
                    document.querySelector("input[type=search]").click();
               },500);
          }
     }
     
function int(){
     var input = document.querySelector("input[type=search]");
     if (input){
          clearInterval(temp);
          filmesFunt();
     }
}

const temp = setInterval(()=>{
     int();
},200);
