const nombre = prompt('Ingrese su nombre: ', '');

const edad = prompt('Ingrese su edad: ', '');

/* Cada vez que queremos ingresar un dato podemos utilizar esta funcion,
aparece una ventana e ingresamos el valor.
El dato ingresado es un string o una cadena de texto. */

document.write(`Mi nombre es ${nombre}, y tengo ${edad} años.`);

console.log(`Mi nombre es ${nombre}, y tengo ${edad} años.`);