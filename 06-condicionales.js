/* condicionales se utilizan para tomar decisiones en el programa */

/* if(condicion){
    codigo
} */
/* 
let edad=17;
if(edad>=18){
    document.write("Eres mayor de edad, puedes votar");
}else{
    document.write("Sos menor de edad :3 no puede votar joven")
} */


let edad=prompt("Querido usuario, ingrese su edad:");
edad=parseInt(edad)
if(edad>=18 && edad < 30){
    document.write(`Tu edad es:${edad}\nEres jovenazoooo wiiiiii`);
}else if(edad >= 30 && edad<60){
    document.write("Ya do quiedo ser un adulto");
}else if(edad >= 60){
    document.write("Eres un adulto mayor, dame un consejo");
}
else{
    document.write(`Tu edad es:${edad}\nSos menor de edad :3 un bebé`)
}