const eqObjects = function (object1, object2) {
  const objectOne = Object.keys(object1);
  const objectTwo = Object.keys(object2);
  if (objectOne.length !== objectTwo.length){
    return false;
  }
  for (let key of objectOne){
    //if (object1[key] === object2[key]){
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])){
        const isArray = eqArrays(object1[key], object2[key])
        if (!isArray){
          return false;
        }
      } else if ((object1[key] !== object2[key])){
        return false;
      }
    }
    return true;
};

const assertObjectsEqual = function(actual, expected) {
  // Implement me!
  const inspect = require('util').inspect;
  
  if (eqObjects(actual, expected) === true) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc); // => false