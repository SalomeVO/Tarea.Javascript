/* Para escribir en el documento 
document.write("<h1>Hola mundo</h1>"); */

/* Para interactuar con la consola
console.log("Hola Mundo"); 
console.error("La apliacion a fallado"); */

/*Tipos de datos
string = 'cadena de texto' o "cadena de texto" 
console.log("esto es una cadena de texto");

number = 1000 o -2.3
console.log("1,2,-3");

boolean = true o false 
console.log(true);

array = ['joe', 'ryan', 'martha'] o [1,2,3] o [true, false, true]
console.log([1, 2, 3, 4]);

object
console.log({"nombre": "rayn", "puntuacion": 70.4, "horas": 14, "es profesional": true, "amigos": ['', "", ""] });
console.log({"nombre": "joe", "puntuacion": 0.4, "horas": 1, "es profesional": false });
*/

/*Variables: como su nombre lo dice son datos que no son fijos y pueden cambiar constantemente
var nameUser = "john";
let apellido = "carter";

nameUser = 'pepe' 

const PI = 3.1415;
//PI = 100; error porque una const no cambia su valor

console.log(nameUser + " " + apellido); */

/*Operdores
 let numberOne = 60;
 let numberTwo = 100;

//suma
result1 = numberOne + numberTwo;
console.log(result1);

//resta
result2 = numberOne - numberTwo;
console.log(result2);

//multiplicacion 
result3 = numberOne * numberTwo;
console.log(result3);

//division 
result4 = numberOne / numberTwo;
console.log(result4);

//concatenacion 
let name = "jonh";
let lestname = "carter";

let completeName = name + " " + lestname;

console.log(completeName);

//comparaciones 
numberOne = 60;
numberTwo = 100;

//mayor
let result = numberOne > numberTwo;

//menor
let result5 = numberOne < numberTwo;

//igual
let result6 = numberOne == numberTwo;

//diferencia 
let result7 = numberOne != numberTwo;

console.log(result);
console.log(result5);
console.log(result6);
console.log(result7);
*/

/*Condicionales
//if else y if anidados
let contrasena = "pepe123";
let input = "123";

let result = input == contrasena;

if(result == true){
    console.log("Contraseña correcta");
} else {
    console.log("Contraseña incorrecta");
}

let score = 70;

if(score > 30){
    console.log("Necesitas practicar mas");

} else if(scorre > 15){

    console.log("estas mejorando");
} else{
    console.log("Necesitas ver este tutotial");
}

//Switch
let typeCard = "Tarjeta de Credito";

switch(typeCard){
    case "Tarjeta de Debito": 
       console.log("Esta tarjeta es de debito");
       break;

    case "Tarjeta de Credito": 
       console.log("Esta tarjeta es de credito");
       break;
    
    default: 
    console.log("No tienes tarjeta");
}*/

/*Bucles*/

//while
 let contar = 50;

 while(contar > 0){

    console.log(contar);
    contar --;
}


contar = 0;

while(contar <= 50){

   console.log(contar);
   contar ++;
}

//for
 let nombres = ["ryan", "joe", "john" ];

 for(let i = 0; i<nombres.length; i++){
     console.log(nombres[i]);
 }

nombres = [1, 2, 3];

 for(let i = nombres.length - 1; i>=0; i--){
     console.log(nombres[i]);
 }



























































































