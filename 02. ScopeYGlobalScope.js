/*
    Scope: Es el alcance que va a tener una variable dentro del código. En otras palabras, el Scope se 
    encargará de decidir a que bloques de código va a acceder una variable.

    Global Scope : No están dentro de funciones o bloques, por lo tanto se puede acceder a ellas de 
    manera global.
*/

// Tendremos acceso a estas variables dentro de todo el código

var hello = 'Hello';
// Con var podemos re-declar una variable pero es una mala práctica.
var hello = 'Hello reasignado!!';

// Con let y const no podemos re-declarar, aparecerá un error.
let world = 'Hello world';
const helloWorld = 'Hello World!!';


const anotherFunction = () => {
    console.log(hello);
    console.log(world);
    console.log(helloWorld);
}

anotherFunction();