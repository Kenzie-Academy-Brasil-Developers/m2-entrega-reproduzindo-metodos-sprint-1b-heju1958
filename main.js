//Importação e Testes//

import { newForEach } from "./newForEach.js";

let arrayTestForEach = [1, 2, 3, 4, 5];

function callbackForEach(elem, index, arr) {
  return (arr[index] = elem * 2);
}

newForEach(arrayTestForEach, callbackForEach);
console.assert(
  typeof newForEach === "function",
  "Sua Função newForEach ou não está declarada ou está com nome incorreto"
);
console.assert(
  arrayTestForEach.toString() === "2,4,6,8,10",
  "possivel erro no callback, verificar a declaração dos paramétros do método, esse método possui como parâmetros do callback: elemento Atual, indice e array nessa respectiva ordem, verificar documentação"
);

//.......................................................//

import { newMap } from "./newMap.js";

let array = ["maçã", "uva", "pera"];

newMap(array, (element) => {
  console.log(element);
});

//.......................................................//

import { newFilter } from "./newFilter.js";

let arrayNomes = ["Helena", "árvore", "bolinho de chuva"];

console.log(
  newFilter(arrayNomes, (elem, i, array) => {
    if (elem.length === 6) {
      return elem;
    }
  })
);

//.......................................................//

import { newFind } from "./newFind.js";

let arrayNum = [8, 10, 20, 15, 2];

console.log(
  newFind(arrayNum, (elem, i, array) => {
    if (elem === 8) {
      return elem;
    }
  })
);

//.......................................................//

import { newIndexOf } from "./newIndexOf.js"

let arrayEstados = ["Rio", "Minas Gerais", "Paraná", "Pernanbuco"];

console.log(newIndexOf("Minas Gerais", arrayEstados, 1));

//.......................................................//

import { newReduce, callbackReduce } from "./newReduce.js";

let arrayValores = [1, 2, 3, 4, 5];

console.log(newReduce(arrayValores, callbackReduce, 0));

//.......................................................//

import { newIncludes } from "./newIncludes.js";

let arrayTimes = ["Real Madrid", "Flamengo", "Brasil"];

console.log(newIncludes("Flamengo", arrayTimes));

//.......................................................//
