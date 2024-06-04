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
var numOfPixels=75*75;
for(i= 0;i<numOfPixels;i++)
    document.getElementById("p"+i).style.backgroundColor="#ffffff";
function canvasChange()
{
    size.innerHTML="Canvas Size "+canvasSize.value+"x"+canvasSize.value;
    pixels="";
    for(var i=0;i<parseFloat(canvasSize.value)*parseFloat(canvasSize.value);i++)
    {
        pixels+="<div class=\"pixel\" id='p"+i+"'onclick=changePixelColor("+i+")  ondragover=changePixelColor("+i+")></div>";
        numOfPixels=i+1;
    }
    pixelSize=500/parseFloat(canvasSize.value);
    canvas.innerHTML=pixels;
    for(i = 0; i < cols.length; i++) 
    {
        cols[i].style.width = pixelSize+'px';
        cols[i].style.height = pixelSize+'px';
    }
    for(i= 0;i<numOfPixels;i++)
        document.getElementById("p"+i).style.backgroundColor="#ffffff";
}

var currentColor=colorInput.value;

function changeColor(color)
{
    if(color=="rand")
    {    
        var randomColor = Math.floor(Math.random()*16777215).toString(16);
        currentColor="#"+randomColor;
    }
    else
        currentColor="#ffffff";
    colorInput.value=currentColor;
}
function pickColor()
{
    currentColor = colorInput.value;
}

var x=0;
function colorPick()
{
    x=1;
}
function changePixelColor(index)
{
    if(x==1)
    {
        currentColor=document.getElementById("p"+index).style.backgroundColor;
        colorInput.value=rgbToHex(currentColor);
    }
    else
    {    
        document.getElementById("p"+index).style.backgroundColor=currentColor;
        if(brushSize.value==2)
        {
            document.getElementById("p"+parseInt(index-Math.sqrt(numOfPixels))).style.backgroundColor=currentColor;
            document.getElementById("p"+parseInt(index+Math.sqrt(numOfPixels))).style.backgroundColor=currentColor;
            document.getElementById("p"+parseInt(index-1)).style.backgroundColor=currentColor;
            document.getElementById("p"+parseInt(index+1)).style.backgroundColor=currentColor;
        }
    }
    x=0;
}

function rgbToHex(col)
{
    if(col.charAt(0)=='r')
    {
        col=col.replace('rgb(','').replace(')','').split(',');
        var r=parseInt(col[0], 10).toString(16);
        var g=parseInt(col[1], 10).toString(16);
        var b=parseInt(col[2], 10).toString(16);
        r=r.length==1?'0'+r:r; g=g.length==1?'0'+g:g; b=b.length==1?'0'+b:b;
        var colHex='#'+r+g+b;
        return colHex;
    }
}

function clearCanvas()
{
    for(i = 0; i < cols.length; i++) 
    {
        cols[i].style.backgroundColor="#ffffff";
    }
}

function brushChange()
{
    brush.innerHTML="Brush Size " + brushSize.value;
}