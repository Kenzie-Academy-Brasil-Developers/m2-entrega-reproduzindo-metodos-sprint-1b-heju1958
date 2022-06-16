export { newIndexOf };

function newIndexOf(elem, array ,index = 0) {
    if(index < 0){
        index = array.length - index
    }
  for (let i = index; i < array.length; i++) {
   if(array[index] === elem){
    return index
   }
  }
  return -1
}

