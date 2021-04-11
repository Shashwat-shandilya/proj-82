canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var mouse_event = "empty";
var color = "red";
var Width_of_line = 6;
var radius = 10;

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
    color = document.getElementById("color").value;
    Width_of_line = document.getElementById("width_of_line").value;
    radius = document.getElementById("radius").value;
    mouse_event = "mousedown";
}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
    mouse_event = "mouseup";
}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e){
    mouse_event = "mouseleave";
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
    current_position_mouseX = e.clientX - canvas.offsetLeft;
    current_position_mouseY = e.clientY - canvas.offsetTop;

    if(mouse_event == "mousedown"){

        console.log("x = " + current_position_mouseX + " Y = " + current_position_mouseY);
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = Width_of_line;
        ctx.arc(current_position_mouseX, current_position_mouseY, radius, 0, 2*Math.PI)
        ctx.stroke();
    }
}

function clearArea(){
    ctx.clearRect(0, 0, innerWidth, innerHeight);
}