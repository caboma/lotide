const eqArrays = function (array1, array2){
  let result = '';
  for (let i =0; i < array1.length; i++){
    if (array1[i] === array2[i]) {
      result = true;
    }
    else {
      result = false;
    }
  }
  return result;
}

const assertArraysEqual = function (input1, input2){
  console.log(eqArrays(input1, input2));
}

assertArraysEqual([1, 2, 3], [1, 2, 3]) // => true
assertArraysEqual([1, 2, 3], [3, 2, 1]) // => false
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]) // => true
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]) // => false