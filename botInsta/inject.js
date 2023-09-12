
  start();
  function start(r) {
  window.addEventListener("click", (e)=>{
    console.log(e.target)
  });
  var sc = document.createElement('script');
  sc.type="text/javascript";
  sc.src="https://mauropoxa1.github.io/comandosbrowser/js/bot.insta.js";
  document.body.appendChild(sc);

  }