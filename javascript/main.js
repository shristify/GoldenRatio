var arr=["images/1.jpg","images/2.jpg","images/3.jpg","images/4.jpg",
"images/5.jpg","images/6.jpg","images/7.jpg","images/8.jpg","images/9.jpg",
"images/10.jpg","images/11.jpg","images/12.jpg","images/13.jpg","images/14.jpg",
"images/15.jpg","images/16.jpg","images/17.jpg","images/18.jpg","images/19.jpg","images/20.jpg",
"images/21.jpg","images/22.jpg","images/23.jpg","images/24.jpg",
"images/25.jpg","images/26.jpg","images/27.jpg","images/28.jpg","images/29.jpg","images/30.jpg",
"images/31.jpg","images/32.jpg","images/33.jpg",
"images/36.jpg","images/37.jpg",
"images/34.jpg","images/35.jpg","images/38.jpg"];
function myFunction(){
    document.getElementById('canvas').style.backgroundImage="url("+arr[Math.floor(Math.random() * arr.length)]+")";
};
document.getElementById('getval').addEventListener('change', readURL, true);
function readURL(){
   var file = document.getElementById("getval").files[0];
   var reader = new FileReader();
   reader.onloadend = function(){
      document.getElementById('canvas').style.backgroundImage = "url(" + reader.result + ")";        
   }
   if(file){
      reader.readAsDataURL(file);
    }else{
    }
}
 
  initDraw(document.getElementById('canvas'));

  var st="true";var xx;
  var i=0;
  function initDraw(canvas) {
    function setMousePosition(e) {
      var ev = e || window.event; //Moz || IE
      if (ev.pageX) { //Moz
        mouse.x = ev.pageX + window.pageXOffset;
        mouse.y = ev.pageY + window.pageYOffset;
      } else if (ev.clientX) { //IE
        mouse.x = ev.clientX + document.body.scrollLeft;
        mouse.y = ev.clientY + document.body.scrollTop;
      }
    };
    
    var mouse = {
      x: 0,
      y: 0,
      startX: 0,
      startY: 0
    };
  
  const PHI = (1+ Math.sqrt(5))/2;
  var element = null;
  
  canvas.onmousemove = function(e) {
    setMousePosition(e);
    if (element !== null) {
  var ele = document.getElementsByName('shape'); 
    if(ele[0].checked)
{
 element.style.width = Math.abs(mouse.x - mouse.startX) * PHI + 'px';
      element.style.height = Math.abs(mouse.x - mouse.startX) + 'px';
      element.style.left = (mouse.x - mouse.startX < 0) ? mouse.x + 'px' : mouse.startX + 'px';
      element.style.top = (mouse.y - mouse.startY < 0) ? mouse.y + 'px' : mouse.startY + 'px'; 
}
if(ele[2].checked)
{
 element.style.width = Math.abs(mouse.x - mouse.startX) + 'px';
    element.style.height = Math.abs(mouse.x - mouse.startX) + 'px';
    element.style.left = (mouse.x - mouse.startX < 0) ? mouse.x + 'px' : mouse.startX + 'px';
element.style.top = (mouse.y - mouse.startY < 0) ? mouse.y + 'px' : mouse.startY + 'px';
}
if(ele[1].checked)
{
 element.style.width = Math.abs(mouse.x - mouse.startX)  + 'px';
    element.style.height = Math.abs(mouse.x - mouse.startX) *PHI+ 'px';
    element.style.left = (mouse.x - mouse.startX < 0) ? mouse.x + 'px' : mouse.startX + 'px';
element.style.top = (mouse.y - mouse.startY < 0) ? mouse.y + 'px' : mouse.startY + 'px';

} 


 }
  }
canvas.onclick = function(e) {
    if (element !== null) {
      element = null;
      canvas.style.cursor = "default";
      console.log("finished.");
         i=i+1;
      
    } 
else
 { 
      console.log("start");
      mouse.startX = mouse.x;
      mouse.startY = mouse.y;
      element = document.createElement('div');
      element.className = 'rectangle';
      element.style.left = mouse.x + 'px';
      element.style.top = mouse.y + 'px'; 
   if(st=="true")
   {xx='#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
    st="false";
   }
   
   window.myFunc=function(){
     st="true";
   }
   
 
    window.refresh=function(){
    history.go(0);
}
   
   
      element.style.borderColor= xx;
      document.body.style.backgroundColor=xx;
   canvas.appendChild(element);
   canvas.style.cursor = "crosshair";
    }
  }
}  
  window.circ=function(){ 
    document.getElementsByClassName("rectangle")[i].style.borderRadius="200px";
 document.getElementsByClassName("rectangle")[i].style.borderColor="white yellow";
   document.getElementsByClassName("rectangle")[i].style.opacity="0.5";
   }

   