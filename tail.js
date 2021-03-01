// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  
  if (actual.toString() === expected.toString()) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(myArray) {
  const newArray = myArray.slice(1);
  return newArray;
};

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]);
