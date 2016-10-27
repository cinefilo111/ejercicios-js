console.log("---------------------");
console.log("Operadores Ariméticos");
console.log("---------------------\n\n");
console.log("1. Suma...........: 2 + 2 = ", 2+2);
console.log("2. Resta..........: 3 - 2 = ", 3-2);
console.log("3. Multiplicación.: 2 * 5 = ", 2*5);
console.log("4. División.......: 6 / 2 = ", 6/2);
//Cálculo del residuo de la división de dos enteros
console.log("5. Módulo.........: 23457 % 3 = ", 23457%3);
//Elevar a una potencia
console.log("6. Potencia.......: 2 ^ 64 =", Math.pow(2,64) );
//Extraer la Raíz cuadrada a un número.
console.log("7. Raíz cuadrada..: sqrt(2) = ", Math.sqrt(2));
//Obtener el seno de un ángulo dado en radianes
console.log("8. Seno(x rad)....: sin(3) = ", Math.sin(3));
//Pi
console.log("9. Valor de Pi....: PI = ", Math.PI);
console.log("\n----------------------");
console.log("Operadores de relación");
console.log("----------------------\n\n");
console.log("1. Mayor que::::::: > ");
console.log("2. Menor que::::::: < ");
console.log("3. Igual a::::::::: === ");
console.log("4. Mayor o igual a: >= ");
console.log("5. Menor o igual a: <= ");
console.log("6. No es igual a::: !== ");
console.log("7. 4 es mayor que 8:::::::: " + (4>8));
console.log("8. 4 es menor que 8:::::::: " + (4<8));
console.log("9. 4 es mayor o igual a 8:: " + (4>=8));
console.log("10. 4 es mayor o igual a 8: " + (4>=8));
console.log("11. 4 es menor o igual a 8: " + (4<=8));
console.log("12. 4 es diferente de 8:::: " + (4!==8));
console.log("\n--------------------");
console.log("Operadores booleanos");
console.log("--------------------\n\n");
console.log("Operador AND (&&)");
console.log("////////////");
console.log("Tabla de verdad\n\n");

/*Asignamos una proposición lógica
  verdadera a las variables locales
  p y q.
*/
var p = 3 > 2;
var q = 5 < 9;

console.log("  p          q         p && q  ");
console.log(p, "  AND ", q, "  da ", p && q);
console.log(p, "  AND ", !q, " da ", p && !q);
console.log(!p, " AND ", q, "  da ", !p && q);
console.log(!p, " AND ", !q, " da ", !p && !q);

console.log("\nOperador OR (||)");
console.log("////////////");
console.log("Tabla de verdad\n\n");

console.log("  p          q         p || q  ");
console.log(p, "  OR  ", q, "  da ", p || q);
console.log(p, "  OR  ", !q, " da ", p || !q);
console.log(!p, " OR  ", q, "  da ", !p || q);
console.log(!p, " OR  ", !q, " da ", !p || !q);

console.log("\nOperador NOT (!)");
console.log("////////////");
console.log("Tabla de verdad\n\n");

console.log("   p      NOT(p) ");
console.log(" ",p,"   ",!p);
console.log(" ",!p,"   ",!(!p));

console.log("3==4 )",3==4);
console.log("3==5-2 ", 3==5-2);