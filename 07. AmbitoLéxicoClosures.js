//Closure
const buildCount = (i) => {
    let count = i;
    const displayCount = () => {
        count++
        console.log(count);
    }
    return displayCount;
}

const myCount = buildCount(1);

myCount();
myCount();
myCount();

const myOtherCount = buildCount(10);

myOtherCount();
myOtherCount();

const suma = (num) => {
    let contador = 0;
    const sumaClosure = () => {
        contador += num;
        console.log(`La suma va en: ${contador}`);
    }
    return sumaClosure;
}

let sumador = suma(15);
sumador();
sumador();
sumador();