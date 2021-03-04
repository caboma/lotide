// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: "${actual}" === "${expected}"`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: "${actual}" !== "${expected}"`);
  }
};

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


console.log(eqArrays([1, 2, 3], [1, 2, 3])) // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])) // => false
console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])) // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])) // => false
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS

