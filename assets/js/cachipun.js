var cantidad = parseInt(prompt("Ingrese la cantidad que desea jugar cachipun: "));
var cent = 0;
// Procesamiento
while (cent < cantidad) {
  // Entrada por teclado selección jugador
  var userOp = prompt("Ingrese: (1) Piedra, (2) Papel, (3) Tijera");

  // Elección aleatorea de la computadora
  var computerOp = (document.getElementById("cachipum").innerHTML =
    Math.floor(Math.random() * 3) + 1);

  if (userOp > 3 || userOp < 1) {
    alert("ERROR! Ingrese un número entre 1 y 3");
  } else {
    // Condicional para mostrar icono de elección jugador.
    if (userOp == 1) {
      document.getElementById("user").innerHTML =
        '<i id="piedra" class="fa-solid fa-hand-back-fist"></i>';
    } else if (userOp == 2) {
      document.getElementById("user").innerHTML =
        '<i id="papel" class="fa-solid fa-hand"></i>';
    } else if (userOp == 3) {
      document.getElementById("user").innerHTML =
        '<i id="tijera" class="fa-solid fa-hand-scissors"></i>';
    }

    // Condicional para mostrar icono de elección computadora.
    if (computerOp == 1) {
      document.getElementById("cachipum").innerHTML =
        '<i id="piedra" class="fa-solid fa-hand-back-fist"></i>';
    } else if (computerOp == 2) {
      document.getElementById("cachipum").innerHTML =
        '<i id="papel" class="fa-solid fa-hand"></i>';
    } else if (computerOp == 3) {
      document.getElementById("cachipum").innerHTML =
        '<i id="tijera" class="fa-solid fa-hand-scissors"></i>';
    }
    // Lógica que compara valores de jugadores para saber quien gana o pierde
    if (userOp == 1 && computerOp == 3) {
      document.getElementById("result").style.color = "limegreen";
      document.getElementById("result").innerHTML = "HAZ GANADO!";
    } else if (userOp == 1 && computerOp == 2) {
      document.getElementById("result").style.color = "red";
      document.getElementById("result").innerHTML = "HAZ PERDIDO!";
    } else if (computerOp == 1 && userOp == 3) {
      document.getElementById("result").style.color = "red";
      document.getElementById("result").innerHTML = "HAZ PERDIDO!";
    } else if (computerOp == 1 && userOp == 2) {
      document.getElementById("result").style.color = "limegreen";
      document.getElementById("result").innerHTML = "HAZ GANADO!";
    } else if (computerOp == 2 && userOp == 3) {
      document.getElementById("result").style.color = "limegreen";
      document.getElementById("result").innerHTML = "HAZ GANADO!";
    } else if (computerOp == 3 && userOp == 2) {
      document.getElementById("result").style.color = "red";
      document.getElementById("result").innerHTML = "HAZ PERDIDO!";
    } else if (
      (computerOp == 1 && userOp == 1) ||
      (computerOp == 2 && userOp == 2) ||
      (computerOp == 3 && userOp == 3)
    ) {
      document.getElementById("result").style.color = "black";
      document.getElementById("result").style.backgroundColor = "lightgreen";
      document.getElementById("result").innerHTML = "E M P A T E!";
    }
  }
  // Centinela + 1 para finalizar ciclo while.
  cent++;
}


