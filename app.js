//// Tipos de Booleana

///operador incremento
/// i++
/// i = i + 1


/// for (DESDE DONDE COMIENZA; CONDICION DE AVANCE; COMO AVANZA)
/*for (let i= 1; i <= 10 ; i++) 
{
    console.log(i);
}

console.log ('resto del codigo.......')



let precioItem;
let suma = 0;
let promedio;

for (let i= 1; i <= 10 ; i++) 
{
   precioItem = Number(prompt('Ingrese precio'));
   console.log("Acumulandose.... :" + suma);
   suma = suma + precioItem;

}

promedio = suma / 10;

console.log ('El promedio es:' + promedio)*/


const SUMA = '+';
const RESTA = '-';
const PRODUCTO = '*';
const DIVISION = '/';

let resultado;
let continuar;

do {
   let operacion = prompt('Ingrese la operacion que desea resalizar "+ - * /"');
   let numero1 = Number(prompt('ingrese primer numero'));
   let numero2 = Number(prompt('ingrese segundo numero'));

   switch(operacion) {
      case SUMA:
         resultado = numero1 + numero2;
         break;
      case RESTA:
         resultado = numero1 - numero2;
         break;
      case PRODUCTO:
         resultado = numero1 * numero2;
         break;
      case DIVISION:
         resultado = numero1 / numero2;
         break;
      default:
         resultado = NaN ///not a number
         console.log ('Ingrese un numero valido');
   }

   console.log ('El resultado de la operacion es:' + resultado);
   continuar = prompt('Desea continuar s/n');

}while(continuar == "s");