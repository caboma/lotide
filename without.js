const eqArrays = function (array1, array2){
  let result = [];
  for (let i =0; i < array1.length; i++){
    if (array1[i] !== array2[i]) {
      result.push(array1[i]);
    }
  }
  return result;
}

const assertArraysEqual = function (input1, input2){
  return eqArrays(input1, input2);
}

const without = function(source, itemsToRemove){
  console.log(assertArraysEqual(source, itemsToRemove))
}

without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
