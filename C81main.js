canvas = document.getElementById("canvas1");

ctx = canvas.getContext("2d");

color = "blue";

ctx.beginPath();

ctx.strokeStyle = color;

ctx.lineWidth = 2;

ctx.arc(200,200,69,0,2*Math.PI);

ctx.stroke();

function my_mousedown(e)
{

color = document.getElementById("color").value;
console.log(color);

mouse_x = e.clientX-canvas.offsetLeft;

mouse_y = e.clientY-canvas.offsetTop;
console.log("x = " + mouse_x + "y = " + mouse_y);

circle(mouse_x,mouse_y);

}


function circle(mouse_x,mouse_y)
{

ctx.beginPath();

ctx.strokeStyle = color;

ctx.lineWidth = 2;

ctx.arc(mouse_x,mouse_y,69,0,2*Math.PI);

ctx.stroke();



}