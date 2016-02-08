(function(){

  function debounce(func, wait, immediate) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

  function movingGallery(id,id2){
    var el = document.getElementById(id);
    var scene = document.getElementById(id2);
    var displayX = document.getElementById('displayX');
    var displayY = document.getElementById('displayY');
    var mouseX,
        mouseY,
        translateX,
        translateY;
    console.log(el);
    function translateScene(event){
      console.log("Move");
      event = event || window.event;
      mouseX = event.clientX;
      mouseY = event.clientY;

      /* displayX.textContent = mouseX;
      displayY.textContent = mouseY; */
      
      translateX =  - mouseX / 6;
      translateY =  - mouseY / 6;

      scene.style.transform = "translate("+ translateX +"px, "+ translateY +"px)";
    }
    el.onmousemove = debounce(translateScene, 10);
  }

  function drawGrid(id){
   var canvas = document.getElementById(id); 
   console.log(canvas);
   if (canvas.getContext){
     var ctx = canvas.getContext("2d");
     ctx.fillStyle = "rgb(200,0,0)";
     ctx.fillRect(10,10,55,50);
     
     ctx.fillStyle = "rgba(0,0,200, 0.5)";
     ctx.fillRect(30,30,55,50);
     ctx.translate(0.5, 0.5);
   } 
  }
  
  drawGrid('gallery-content');
  movingGallery('gallery-wrapper','gallery-content');
})();