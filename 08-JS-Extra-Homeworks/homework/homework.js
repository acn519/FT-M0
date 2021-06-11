// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto) {
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var arreglo = Object.entries(objeto);
  return arreglo;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  /*var str = "";
  for (var i = s.length; i > s.length; i--) {
    if (s.charAt(i-1) === s.charAt(i-1).toUpperCase()) {
      str = s.charAt(i-1);
      s.slice(i-1);
    }
  }

  return str + s;*/
  var sp = s.split("");
  var caps = [];
  var lower = []
  for (var i = 0; i < sp.length; i++) {
    if (sp[i] == sp[i].toUpperCase()) {
      caps.push(sp[i]);
      //How can i remove the capital letter in "sp" array as I've pushed them into the caps Array**

    }
    if (sp[i] == sp[i].toLowerCase()) {
      lower.push(sp[i]);
    }
  }
  return caps.join("").concat(lower.join(""));
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  /*var s = str.split("").reverse().join("");
  let reverse = "";

  for (let i = s.length - 1; i >= 0; i--) {
    reverse += s[i];
  }
  return reverse;*/
  /*if (str === "") //Este seria el caso termila
    return "";
  else
    return reverseString(str.substr(1)) + str.charAt(0);*/

  var resultado = '';

  for (var i = str.length - 1; i >= 0; --i) {
    resultado += str[i];
  }

  

  return resultado;
}


function capicua(numero) {
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var nuevo = Number(numero.toString().split('').reverse().join(''));
  if (nuevo === numero) {
    return "Es capicua";
  }
  return "No es capicua";
}


function deleteAbc(cadena) {
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  /* if (cadena.includes('a') || cadena.includes('b') || cadena.includes('c')) {
     cadena.remove('a');
     cadena.remove('b');
     cadena.remove('c');
   }*/
  /* for (var i = 0; i < cadena.length; i++) {
     if (cadena.charAt(i) === "a" || cadena.charAt(i) === "b" || cadena.charAt(i) === "c") {
       cadena.replace(cadena.charAt(i), '');
     }
   }
   return cadena;*/
  var n = "";
  n = cadena.replace(/a/g, '');
  n = n.replace(/b/g, '');
  n = n.replace(/c/g, '');
  return n;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  /* var nuevoArreglo = [];
   for (var i = 0; i < arr.length; i++) {

   }*/
  /*arr.sort(function(a, b) {
    return b.length - a.length
  });*/
  return arr.sort((a, b) => a.length - b.length);
}


function buscoInterseccion(arreglo1, arreglo2) {
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  /*var longi = 0;
  var nuevoArr = [];
  if (arreglo1 > arreglo2) {
    longi = arreglo1.length;
  }else{
    longi = arreglo2.length;
  }

  for(var i = 0; i < longi; i++){
    if (arreglo1[i] === arreglo2[i]) {}
  }*/
  return arreglo1.filter(value => -1 !== arreglo2.indexOf(value));
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  deObjetoAmatriz,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};