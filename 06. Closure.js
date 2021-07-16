/*
    Una clausura o closure es una función que guarda referencias del estado adyacente (ámbito léxico). En 
    otras palabras, una clausura permite acceder al ámbito de una función exterior desde una función 
    interior. En JavaScript, las clausuras se crean cada vez que una función es creada.

    El ambito lexico: Se refiere a que una funcion puede acceder a una funcion o variable fuera de ella.
    Cada nivel interno puede acceder a sus niveles externos hasta poder alcanzarlas.
*/

const moneyBox = (coins) => {
    let saveCoins = 0;
    saveCoins += coins;
    console.log(`MoneyBox: $${saveCoins}`);
}

moneyBox(5);
moneyBox(10);

//Closure
const moneyBoxClousure = () => {
    let alcancia = 0;
    const sumaDinero = (coins) => {
        alcancia += coins;
        console.log(`Dinero en la alcancia: $${alcancia}`);
    }
    return sumaDinero;
}

let alcanciaDinero = moneyBoxClousure();

alcanciaDinero(10); //10
alcanciaDinero(20); //30
alcanciaDinero(10); //40