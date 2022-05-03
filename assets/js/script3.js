var num1 = parseInt(prompt("Ingrese el primer número: "));
var num2 = parseInt(prompt("Ingrese el segundo número: "));

if (num1 > 0) {
    alert("Su primer número es positivo.");
}
if (num2 < 0) {
    alert("Su segundo número negativo.");
}
if (num2 >= num1) {
    alert("Su segundo número ES mayor o igual que su primer número.");
} else {
    alert("Su segundo número NO ES mayor o igual que su primer número.");
}
