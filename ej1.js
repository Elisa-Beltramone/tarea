function cambiocolor(){
    var a = document.body.style.backgroundColor= "red";
    var b = document.getElementById("cambiocolor").style.background= "blue";
    var c = document.getElementById("cambiocolor").style.color= "pink";    
}

var fondo=["blue","red","yellow","pink","black"];
var fondocaja=["blue","red","yellow","pink","black"];

function cambiocolor2(){
    var random = Math.floor(Math.random()*fondo.length);
    var random2 = Math.floor(Math.random()*fondocaja.length);
    var r = Math.floor(Math.random()*fondocaja.length);
    var x = document.body.style.backgroundColor= fondo[random];
    var y = document.getElementById("cambiocolor2").style.background= fondocaja[random2];
    var z = document.getElementById("cambiocolor2").style.color= fondocaja[r];    
}

function cambiocolor3(){
    var m = Math.floor(Math.random()*256);
    var n = Math.floor(Math.random()*256);
    var p = Math.floor(Math.random()*256);

    pintar="rgb("+ m +","+ n +","+ p +")";

    var x3 = document.body.style.backgroundColor= pintar;
   
}

