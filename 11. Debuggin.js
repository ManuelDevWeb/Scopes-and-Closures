/*
   1. Ir a about:blank, click derecho e ir a inspeccionar.
   
   2. Copiar el código en console.
*/

//Ejemplo 1
let a = 'Hello';

function hello() {
    let b = 'Hello World';
    const c = 'Hello World!!';

    if (true) {
        let d = 'Hello World!!!!!!';
        //IMPORTANTE AGREGAR EL DEGUBBER
        debugger;
    }
}

hello();

//Ejemplo 2
const alcancia = () => {
    debugger;
    let dinero = 0;
    const dineroAlcancia = (money) => {
        debugger;
        dinero += money;
        console.log(`Dinero ahorrado: $${dinero}`);
    }
    return dineroAlcancia;
}

let dineroAlcancia = alcancia();

dineroAlcancia(100000);
dineroAlcancia(1000000);
dineroAlcancia(700000);