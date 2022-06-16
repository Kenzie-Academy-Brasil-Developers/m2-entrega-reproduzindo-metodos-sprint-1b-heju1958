export { newReduce, callbackReduce };

function newReduce(array, callback, valorInicial) {
  let soma = valorInicial;
  for (let i = 0; i < array.length; i++) {
    soma = callback(soma, array[i]);
  }
  return soma;
}

function callbackReduce(acc, num) {
  return (acc += num);
}
