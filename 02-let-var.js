/* variable var se utiliza anteriormente 
variable let es una variable de contexto, 
sólo vive en un bloque de código*/

var numero=40; //VARIABLE GLOBAL
console.log(numero);

if(true){
    var numero=50;//50
    console.log(numero);
}
console.log(numero);//50

var texto = "Bootcamp Java";
console.log(texto); //Bootcamp Java

if(true){
    let texto="Cohorte 8";//Cohorte 8
    console.log(texto);
    let numeroFavorito=76; //LOCAL
}

console.log(numeroFavorito);
console.log(texto)//Bootcamp Java