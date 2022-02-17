// Piedra 0, papel 1 o tijera 3

// Solicitar las veces que se desea jugar
var jugadas = prompt("¿Cuántas veces desea jugar?");
jugadas = parseInt(jugadas);

// Crear un bucle con la cantidad de partidas seleccionadas
while (jugadas > 0) {
    const jugadorMaquina = Math.floor(Math.random() * 3);
    var jugadorHumano = prompt("Ingrese su opción piedra, papel o tijera");
    
   // Apuntar todas las posibles combinaciones
    if (jugadorHumano === jugadorMaquina) {
        alert("empate")
    }
    if ((jugadorHumano === 0 || jugadorHumano === "piedra") && (jugadorMaquina === 1)) {
        alert("Perdiste por que seleccionaste piedra y la computadora papel")
    }
    if ((jugadorHumano === 1 || jugadorHumano === "papel") && (jugadorMaquina === 2)) {
        alert("Perdiste por que seleccionaste papel y la computadora tijera")
    }
    if ((jugadorHumano === 2 || jugadorHumano === "tijera") && (jugadorMaquina === 0)) {
        alert("Perdiste por que seleccionaste tijera y la computadora piedra")
    }
    if ((jugadorHumano === 1 || jugadorHumano === "papel") && (jugadorMaquina === 0)) {
        alert("Ganaste por que seleccionaste papel y la computadora piedra")
    }
    if ((jugadorHumano === 2 || jugadorHumano === "tijera") && (jugadorMaquina === 1)) {
        alert("Ganaste por que seleccionaste tijera y la computadora papel")
    }
    if ((jugadorHumano === 0 || jugadorHumano === "piedra") && (jugadorMaquina === 2)) {
        alert("Ganaste por que seleccionaste piedra y la computadora tijera")
    }
    // Decrementar cada vuelta del bucle
    jugadas--
}