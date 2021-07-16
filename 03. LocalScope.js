/*
    El scope se puede definir como el alcance que puede tener una variable en tu codigo.

    El Local Scope: Se refiere a la variable o funcion que esta dentro de un bloque o funcion especifica. 
    Solo se pueden acceder a ellas (ejecutar o llamar) dentro del entrono en donde conviven.

    El ambito lexico: Se refiere a que una funcion puede acceder a una funcion o variable fuera de ella.
    Cada nivel interno puede acceder a sus niveles externos hasta poder alcanzarlas.
*/

// Tendremos acceso a estas variables dentro de la función donde se defina
const helloWorld = () => {
    const hello = 'Hello World';
    console.log(hello);
}
helloWorld();

// Aplicando el ámbito léxico
const functionScope = () => {
    let scope = 'I am local';
    const funct = () => {
        return scope;
    }
    console.log(funct());
}

functionScope();