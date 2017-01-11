var canv = document.getElementById("mainCanvas").getContext("2d");
//canv2d = canv.getContext("2d");
console.log(canv);
var lines = 80;
var i = 0;
var yi,xf;
var lineColor = "#FAA";

var newColor = "rgb(153, 224, 194)"


while (i < lines)
{
yi = 10 * i;
xf = 10 * (i + 1);
color1 = 0 + i/10;
color2 = 30 + i/10;
color3 = 150 + i/10;
newColor = "rgb(" + color1.toString() + ", " + color2.toString() + ", " + color3.toString() + ")";
makeOneline(newColor, 0, yi, xf, 800);
console.log("lines " + 1);
i++
}

function makeOneline(color, xInicial, yInicial, xFinal, yFinal)
{
canv.beginPath();
canv.strokeStyle = color;
canv.moveTo(xInicial, yInicial);
canv.lineTo(xFinal, yFinal);
canv.stroke();
canv.closePath();
}
