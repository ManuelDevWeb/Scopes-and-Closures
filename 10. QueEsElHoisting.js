/*
    Hoisting eleva las declaraciones, esto pasa en el momento en que se compila nuestro código 
    antes de ser interpretado por el navegador.

    De esta forma podemos asignar nuestros valores o acceder a un valor que previamente no ha 
    sido declarado dentro de esta estructura.
*/

a = 2;
var a;
console.log(a); //2


nameOfDog('Moises'); //Moises

function nameOfDog(name) {
    console.log(name);
}