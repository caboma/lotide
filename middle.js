const eqArrays = function (array1, array2){
  const length1 = array1.length;
  const length2 = array2.length;
  if (length1 !== length2){
    return false;
  }
  for (let i = 0; i < length1; i++){
    if (array1[i] !== array2[i]){
      return false
    }
  }
  return true;
} 

const assertArraysEqual = function (input1, input2){
  if (eqArrays(input1, input2)) {
    console.log(`✅✅✅ Assertion Passed: ${input1} === ${input2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${input1} !== ${input2}`);
  }
}

const middle = function (myArray){
  let count = myArray.length;
  let middleCount = Math.floor(count / 2);
  const newArray = [];
  if (count > 2){
    if (count % 2 !== 0){
      newArray.push(myArray[middleCount]);
    }
    else {
      newArray.push(myArray[middleCount - 1], myArray[middleCount]);
    }
  }
  console.log(newArray);
}

middle([1]) // => []
middle([1, 2]) // => []
middle([1, 2, 3]) // => [2]
middle([1, 2, 3, 4, 5]) // => [3]
middle([1, 2, 3, 4]) // => [2, 3]
middle([1, 2, 3, 4, 5, 6]) // => [3, 4]

assertArraysEqual([1, 2, 3], [1, 2, 3]) // => true
assertArraysEqual([1, 2, 3], [3, 2, 1]) // => false
