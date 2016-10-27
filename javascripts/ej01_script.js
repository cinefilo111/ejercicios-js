/*
Ejercicio 1.
Escribe un bucle que haga 7 llamadas a “console.log” para que imprima el siguiente
triángulo
#
##
###
####
#####
######
#######
Es de ayuda saber que tu puedes saber el largo de un string escribiendo “.length” después
del string.
var abc = "abc";
console.log(abc.length);
// → 3 

======================================
CECATI 116
Cd. Reynosa Tam., a 26 de oct. de 2016
Juan José Palacios Ochoa
======================================
*/

var cadena = "#";
for (var i = 1; i <= 7; i++) {
	console.log(i + cadena, "\n");
	cadena = cadena + "#";
}

cadena = "#############"
for (var i = 1; i <=7 ; i++){
	console.log(cadena.substring(0,i), "\n");
}