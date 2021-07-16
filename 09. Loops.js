/*
    Tener cuidado con los closures involuntarios!. Siempre utiliza let para valores 
    que irán cambiando dentro de la ejecución del scope.
*/

const anotherFunction = () => {
    //Con Var se sobreescribe var con el último valor de la iteración (10)
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            console.log(i);
        }, 1000);
    }
}

anotherFunction();