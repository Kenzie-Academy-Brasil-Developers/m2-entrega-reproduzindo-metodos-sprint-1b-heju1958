export { newIndexOf };

function newIndexOf(elem, array ,index = 0) {
    if(index < 0){
        index = array.length - index
    }
  for (let i = index; i < array.length; i++) {
   if(array[i] === elem){
    return i
   }
  }
  return -1
}

