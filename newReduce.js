export { newReduce, callbackReduce };

function newReduce(array, callback, valorInicial) {
  let acumulador = valorInicial;
  if (valorInicial >= 0 ) {
    for (let i = 0; i < array.length; i++) {
      acumulador = callback(acumulador, array[i]);
    }
    return acumulador;
  } else if (valorInicial === undefined) {
    let acumulador = array[0];
    for (let i = 1; i < array.length; i++) {
      acumulador = callback(acumulador, array[i]);
    }
    return acumulador;
  }
}
function callbackReduce(acc, num) {
  return (acc += num);
}
