/*
    -> Las variables escritas con la palabra clave var pueden ser redeclaradas, pero esto a futuro 
    puede darnos problemas, así que es mejor no usarla.

    -> Las variables escritas con la palabra clave let no pueden ser redeclaradas, si lo haces 
    mostrara un “error: esta variable ya ha sido declarada” , pero su valor puede ser reasignado.

    -> Las variables escritas con la palabra clave const no pueden ser redeclaradas o reasignadas, 
    ya que const quiere decir que su valor será constante, es decir que no va a cambiar.
*/

const fruits = () => {
    var fruit = 'Apple';
    console.log(fruit);
}
fruits();

var x = 1;
const anotherFunction = () => {
    //Re-declarando
    //var x = 1;
    var x = 2;
    //Re-asignando
    let y = 1;
    y = 2;
    console.log(x);
    console.log(y);
}
console.log(x);
anotherFunction();