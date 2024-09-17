let jugador;
let pc;
let victorias = 0;

function aleatoria() {
    return Math.ceil(Math.random() * 3);
}

function obtenerEleccion() {
    let entrada;
    do {
        entrada = prompt('Elija: 1 - PIEDRA, 2 - PAPEL, 3 - TIJERA');
    } while (entrada < 1 || entrada > 3);
    return parseInt(entrada);
}

do {
    jugador = obtenerEleccion();
    pc = aleatoria();

    if (jugador == pc) {
        alert('EMPATASTE');
    } else if ((jugador == 1 && pc == 3) ||
            (jugador == 2 && pc == 1) ||
            (jugador == 3 && pc == 2)) {
        alert('GANASTE');
        victorias++;
        if (victorias === 3) {
            alert('¡GANASTE UN PREMIO!');
            victorias = 0; 
        }
    } else {
        alert('PERDISTE');
        victorias = 0; 
    }
} while (confirm('¿Queres volver a jugar?'));