var info = document.getElementById('intro');
var element = document.getElementById('element');
var keycode = document.getElementById('number');
var keyname = document.getElementById('key');
var head = document.getElementById('which');
var kcode = document.getElementById('code');





document.body.addEventListener('keydown',function(e){
    info.style.opacity = 0;
    element.style.opacity = 1;
   var keyCode = e.keyCode;
   keycode.innerHTML = keyCode;
   keyname.innerHTML = String.fromCharCode(keyCode);
   head.innerHTML = keyCode;
   kcode.innerHTML = "Key" + String.fromCharCode(keyCode);;
})