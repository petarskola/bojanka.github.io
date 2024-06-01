canvasSize.value=75;
size.innerHTML="Canvas Size "+canvasSize.value+"x"+canvasSize.value;
var pixels="", pixelSize;
for(i=0;i<parseFloat(canvasSize.value)*parseFloat(canvasSize.value);i++)
{
    pixels+="<div class=\"pixel\" id='p"+i+"'onclick=changePixelColor("+i+") ondragover=changePixelColor("+i+")></div>";
}
pixelSize=500/parseFloat(canvasSize.value);
canvas.innerHTML=pixels;
var cols = document.getElementsByClassName('pixel');
for(i = 0; i < cols.length; i++) 
{
    cols[i].style.width = pixelSize+'px';
    cols[i].style.height = pixelSize+'px';
}

function canvasChange()
{
    size.innerHTML="Canvas Size "+canvasSize.value+"x"+canvasSize.value;
    pixels="";
    for(var i=0;i<parseFloat(canvasSize.value)*parseFloat(canvasSize.value);i++)
    {
        pixels+="<div class=\"pixel\" id='p"+i+"'onclick=changePixelColor("+i+")  ondragover=changePixelColor("+i+")></div>";
    }
    pixelSize=500/parseFloat(canvasSize.value);
    canvas.innerHTML=pixels;
    for(i = 0; i < cols.length; i++) 
    {
        cols[i].style.width = pixelSize+'px';
        cols[i].style.height = pixelSize+'px';
    }
}

var currentColor="#000000";

function changeColor(color)
{
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    if(color=="rand")
        currentColor="#"+randomColor;
    else
        currentColor="#ffffff";
    colorInput.value=currentColor;
}
function pickColor()
{
    currentColor = colorInput.value;
}

function changePixelColor(index)
{
    document.getElementById("p"+index).style.backgroundColor=currentColor;
}