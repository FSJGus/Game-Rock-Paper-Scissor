var dia = parseInt(prompt("Ingrese el día de la semana (1 al 7)"));

switch (dia) {
  case 1:
    alert("Usted introdujo el 1 equivalente a Lunes");
    break;
  case 2:
    alert("Usted introdujo el 2 equivalente a Martes");
    break;
  case 3:
    alert("Usted introdujo el 3 equivalente a Miercoles");
    break;
  case 4:
    alert("Usted introdujo el 4 equivalente a Jueves");
    break;
  case 5:
    alert("Usted introdujo el 5 equivalente a Hoy es Viernes y el pollo lo sabe 😀");
    break;
  case 6:
    alert("Usted introdujo el 6 equivalente a Sábado");
    break;
  case 7:
    alert("Usted introdujo el 7 equivalente a Domingo");
    break;
  default:
    alert("INCORRECTO! El número debe estar entre 1 y 7");
    break;
}
