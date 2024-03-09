// creamos funcion de validacion

const validando = (numero) => {
  if (numero >= 1 || numero <= 20) {
    return true;
  } else {
    console.log("Numero fuera del Rango");
  }
  return false;
};

// funcion multiplicacion

const multiplicacion = (numero) => {
  //arrow function
  let resultado = 0; // establecemos una variable resultado
  for (let i = 1; i <= numero; i++) {
    // ciclos de iteracion
    resultado = i * numero; //realizando el resultado de cada iteracion
    console.log(`multiplicacion de ${i} x ${numero} es ${resultado}`); // imprimiendo cada iteracion
  }
};

const factorial = (numero) => {
  //funcion arrow
  for (let i = 1; i <= numero; i++) {
    //iteracion padre
    let resultado = 1; //establecemos una variable
    for (let n = 1; n <= i; n++) {
      //iteracion anidada
      resultado = resultado * n; // incremento del resultado
    }
    console.log(`factorial de ${i} es ${resultado}`); //imprimiendo la iteracion
  }
};

let numDato = parseInt(prompt("ingrese el numero a secuenciar.")); //llamada al dato de usuario

if (validando(numDato) == true) {
  //funcion validacion
  multiplicacion(numDato); //funcion multiplicacion
  factorial(numDato); //funcion  factorial
}
