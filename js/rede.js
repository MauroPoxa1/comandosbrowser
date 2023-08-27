document.querySelector("textarea").addEventListener('click', function(){
    var el = document.querySelector("textarea").value;
    el = el.replace('<iframe name=Player "" src="',"");
    el = el.replace('" frameborder=0 height=400 scrolling=no width=640 allowFullScreen> </iframe>',"");
    el = el.replaceAll('\n',"");
    el = el.replaceAll(' ',"");
    el = el.replaceAll('		',"");
    document.querySelector("textarea").value=el;
    document.querySelector("textarea").select();
    document.execCommand('copy');
    document.querySelector("h2:nth-child(1)").innerHTML="///////////Copiado, poxa é pica!////////////<br><br>"+el;
     setTimeout(()=>{window.close()},800);
});
document.querySelector("textarea").click();