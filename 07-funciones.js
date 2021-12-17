/* FUNCIONES 
Nos sirven para escribir 
bloques de código que se puedan reutilizar*/


let num1 = parseInt(prompt("Querido usuario, ingrese su numero 1:"));
let num2 = parseInt(prompt("Querido usuario, ingrese su numero 2:"));

suma(num1, num2);

function suma(num1, num2) {
    let suma = num1 + num2;
    document.write(suma);



    document.write(`<h1>*SUMA* ${num1} más ${num2} es: ${suma}</h1>`);
}

