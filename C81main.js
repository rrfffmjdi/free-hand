var canvas = document.getElementById("canvas") ;
ctx = canvas.getContext("2d");


canvas.addEventListener("mousedown", mymousedown);
var mouseEvent =" ";
function mymousedown(){
mouseEvent ="mousedown";
console.log(mouseEvent);
}
canvas.addEventListener("mouseleave", mymouseleave);

function mymouseleave(){
mouseEvent ="mouseleave";
console.log(mouseEvent);
}
canvas.addEventListener("mouseup", mymouseup);

function mymouseup(){
mouseEvent ="mymouseup";
console.log(mouseEvent);
}
canvas.addEventListener("mousemove", mymousemove);

function mymousemove(e){
    console.log("mousemove");
    currentX= e.clientX - canvas.offsetLeft;
    currenty= e.clientY - canvas.offsetTop;
    console.log("x =" + currentX + "y =" + currenty  );

    if(mouseEvent=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle = "green";
        ctx.lineWidth = 2;
        
        ctx.moveTo(lastx,lasty);
        ctx.lineTo(currentX,currenty);

        ctx.stroke();
    }
   lastx=currentX;
   lasty=currenty;
}
function clear1(){
ctx.clearRect(0,0,canvas.width,canvas.height);
}

