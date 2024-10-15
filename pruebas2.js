/* SIMULADOR DE "PELEA" */


// Declaracion de clase para definir objetos, en este caso personajes para utilizar. Aunque para esta primera entrega no uso todos los atributos para las siguientes lo ire mejorando.
class Personajes {
    constructor (nombre, ataque, vida) {
        this.name = nombre;
        this.damage = ataque;
        this.life = vida;
        this.vidaRestante = "";

    }

}

let naruto = new Personajes ('Naruto', 'Rasengan', 100);
let pain = new Personajes ('Pain', 'Devastacion', 100);

//Prompt para ingreso de los datos del cliente
let personajeSeleccionado = parseInt(prompt("¿Qué personaje desea utilizar? \n 1- Naruto    2- Pain \n Seleccione la opción debajo."));
let conversion;
let danio = 0;
let vidaRestante = 100;
let ataque;

// Logica para la eleccion del personaje en base al input
switch (personajeSeleccionado) {
    case 1: 
        conversion = naruto.name;
        ataque = naruto.damage;
        break;

    case 2:
        conversion = pain.name;
        ataque = pain.damage;
        break;
    
    default:
        console.log("Ingrese un personaje correcto")
        break;
}

//Funcion para generar un daño aleatorio
function danioAtaque (max) {
    danio = Math.floor(Math.random() * (max + 1));
    danioTotal = danioTotal + danio;
    return danio;
}


// Condicion para que se ejecute "La pelea"
if (conversion) {
for (danioTotal = 0; danioTotal <= 100; danioTotal + danioAtaque(30)) {
    
    if (danioTotal != 0) {
        vidaRestante = vidaRestante - danio;
        console.log(`${conversion} realiza ${danio} de daño, utilizando ${ataque}.`);
        console.log ("La vida restante de su enemigo es de: " + vidaRestante)
    }

}

if (danioTotal > 100){
        console.log ("EL ULTIMO ATAQUE HA SIDO DE: " + danio + " \n FELICIDADES, HA GANADO LA BATALLA")
    }
}
    
















