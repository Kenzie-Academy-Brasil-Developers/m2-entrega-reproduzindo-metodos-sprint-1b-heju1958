export { newReduce, callbackReduce };

function newReduce(array, callback, valorInicial) {
  let soma = valorInicial;
  if (valorInicial >= 0) {
    for (let i = 0; i < array.length; i++) {
      soma = callback(soma, array[i]);
    }
    return soma;
  } else if (valorInicial === undefined) {
    for (let i = 1; i < array.length; i++) {
      soma = callback(array[i]);
    }
    return soma;
  }
}
function callbackReduce(acc, num) {
  return (acc += num);
}
