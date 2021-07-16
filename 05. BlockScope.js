//Ejemplo 1
const fruits = () => {
    //Si cambiamos var por let, ya no se re-asigna el valor de fruit 4 (orange)
    var fruit4 = 'pineapple';
    if (true) {
        //Var es una asignación local del scope
        var fruit1 = 'apple';
        //Let y const se establecen dentro del bloque
        let fruit2 = 'banana';
        const fruit3 = 'kiwi';

        console.log(fruit2);
        console.log(fruit3);
        var fruit4 = 'orange';
        console.log(fruit4);
    }

    console.log(fruit1);
    //console.log(fruit2);
    //console.log(fruit3);
    console.log(fruit4);
}
fruits();

//Ejemplo 2

//Si usamos var el valor del var x en el bloque se transmite a global
//Valor global
var x = 1;

{
    //Valor bloque
    var x = 2;
    console.log(x);
}

console.log(x);

//Ejemplo 3
const anotherFunction = () => {
    //Se sobreescribe var con el último valor de la iteración (10)
    /*
    for (var i = 0; i < 10; i++) {
        setTimeout(() => {
            console.log(i);
        }, 1000)
    }
    */
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            console.log(i);
        }, 1000);
    }
}

anotherFunction();