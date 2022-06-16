export { newForEach };

function newForEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    console.log(callback(array[i], i, array));
  }
}
