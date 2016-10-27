/*
Ejercicio 2.
Escribe un programa que utilice “console.log” que imprima en la consola todos los números del 1 al 100,  con dos excepciones. Para los números divisibles entre 3, imprime “Fizz” en lugar de un número, y para los números divisibles entre 5 y no divisibles entre 3, imprime “Buzz” en lugar del número.


Cuando hayas hecho funcionar lo anterior, modifica tu codigo para que imprima “FizzBuzz” para los números divisibles entre 5 y entre 3, sin quitar la funcionalidad anterior en la que imprimes “Fizz” y “Buzz”


Algunas cosas que te pueden ayudar, es recordar el operador de modulo (%).

======================================
CECATI 116
Cd. Reynosa Tam., a 26 de oct. de 2016
Juan José Palacios Ochoa
======================================
*/

for (var i = 1; i <= 100; i++) {
	
	if(i % 3 == 0 && i % 5 == 0){
		console.log(i, "Fizz Buzz FizzBuzz");
		continue;
	}
	
	else if(i % 3 == 0){
		console.log(i, "Fizz");
		continue;
	}
	
	else if(i % 5 == 0){
		console.log(i, "Buzz");
		continue;
	}
	else{
		console.log(i);
	}

}


var expresion = true;
for (var j=1; j<=100; j++){
  
  switch (expresion) {

  	case ((j % 3 == 0 && j % 5 == 0)):
  		console.log(j, "Fizz Buzz FizzBuzz");
  		break;

  	case ((j % 3 == 0)):
  		console.log(j, "Fizz");
  		break;

  	case ((j % 5 == 0)):
  		console.log(j, "Buzz");
  		break;

  	default:
  		console.log(j);  	
  }
 
}