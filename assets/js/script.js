// definiendo variables para el score
var victoriasJugador = 0
var victoriasMaquina = 0
var empates = 0
// pregunta si desea jugar al cachipun
var confirmacion = confirm('Quieres jugar al cachipun?')
if (confirmacion) {
   juego()
} else {
   alert('Que lastima')
}
// inicio del juego
function juego() {
   var cantidadJuegos = prompt('Cuantos juegos deseas jugar?')
   for (i = 0; i < cantidadJuegos; i++) {
      // eleccion del jugador
      var opcionUsuario = prompt('Elige entre piedra✊, papel✋ o tijeras✌️')
      // eleccion random de la maquina
      const opciones = ['tijeras', 'papel', 'piedra'];
      const random = Math.floor(Math.random() * opciones.length);
      const opcionMaquina = opciones[random];
      // muestra al usuario el resultado de la jugada
      alert(`Elegiste ${opcionUsuario}, la maquina eligio ${opcionMaquina}, ${cachipun(opcionUsuario, opcionMaquina)}.`)
   }
   repetirJuego()
}
// funcion que pregunta y repite el juego o lo termina segun respuesta
function repetirJuego() {
   var respuesta = prompt('Quieres jugar denuevo?')
   if (respuesta == 'si') {
      juego()
   } else {
      alert('Gracias por jugar, no vuelvas')
   }
}
// funcion con las reglas del cachipun, tambien acumula las victorias y empates
function cachipun(opcionUsuario, opcionMaquina) {
   if (
      (opcionUsuario === 'tijeras' && opcionMaquina === 'papel') || 
      (opcionUsuario === 'papel' && opcionMaquina === 'piedra') || 
      (opcionUsuario === 'piedra' && opcionMaquina === 'tijeras')
   ) {
      resultado = 'Ganaste! 🎉';
      victoriasJugador += 1
   } else if (
      (opcionMaquina === 'piedra' && opcionUsuario === 'piedra') ||
      (opcionMaquina === 'papel' && opcionUsuario === 'papel') ||
      (opcionMaquina === 'tijeras' && opcionUsuario === 'tijeras')
   ) {
      resultado = 'Empate';
      empates += 1
   } else {
      resultado = 'Perdiste contra la maquina 🤖';
      victoriasMaquina += 1
   }
   return resultado;
}
// decide quien gano la partida final
var ganador = function () {
   if (victoriasJugador > victoriasMaquina) {
      return 'Ganaste 🎉'
   } else if (victoriasJugador < victoriasMaquina) {
      return 'Perdiste contra la maquina 👎'
   } else {
      return 'Empate'
   }
}
// muestra el resultado en pantalla
console.log(victoriasJugador, victoriasMaquina)
document.write(`<h1>Man Vs Machine</h1>`)
document.write(`<h2>Final Score</h2>`)
document.write(`<div><div>👨</div><div>🤖</div></div>`)
document.write(`<div><div>${victoriasJugador}</div><div>${victoriasMaquina}</div></div>`)
document.write(`<h3>Empates</h3>`)
document.write(`<h3>${empates}</h3>`)
document.write(`<br><h1>${ganador()}</h1>`)
