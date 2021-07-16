/*
    Variables privadas con Closures: JS por su naturaleza no fomenta el uso de datos 
    privados pero por medio de los Closures podemos crear valores que solo puedan ser 
    accedidos por medio de métodos, que no van a estar disponibles fuera de esta función.
*/

const person = () => {
    //Para acceder a esta variable debemos llamar las funciones getName y setName
    //Funcionan similar a los get y set de POO
    let saveName = "Nombre";

    return {
        getName: () => {
            return saveName;
        },
        setName: (name) => {
            saveName = name;
        }
    }
}

let persona = person();
console.log(persona.getName());
persona.setName('Manuel');

console.log(persona.getName());