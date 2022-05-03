var a = 10;
var b = 5;
var resultadoA = ((a>b) || (b<a));
var resultadoB = ((a==b) && (b==a));
var resultadoC = (a>5 || a<15) && b>0;
var resultadoD = !(a>5) && b<10;
var resultadoE = (a-5) >= (a*b)-(b/a);

document.write(" Resultado A: " +resultadoA);
document.write("<br>");
document.write(" Resultado B: " +resultadoB);
document.write("<br>");
document.write(" Resultado C: " +resultadoC);
document.write("<br>");
document.write(" Resultado D: " +resultadoD);
document.write("<br>");
document.write(" Resultado E: " +resultadoE);

