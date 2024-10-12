function findRecurringCharacter(inputArray) {
  if (inputArray.length === 0) {
    return undefined;
  }
  let hashMap = {};
  for (let index = 0; index < inputArray.length - 1; index++) {
    if (hashMap[inputArray[index]] !== undefined) {
      return inputArray[index];
    }
    hashMap[inputArray[index]] = index;
    console.log("hashmap", hashMap);
  }
  return undefined;
}

let input1 = [2, 5, 1, 2, 3, 5, 1, 2, 4];

let input2 = [2, 1, 1, 2, 3, 5, 1, 2, 4];

let input3 = [2, 3, 4, 5];

let input4 = [2, 2, 3, 4, 5];

console.log("character>>", findRecurringCharacter(input4));
