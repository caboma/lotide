const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
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

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// assertEqual(eqObjects(ab, ba)); // => true

// const abc = { a: "1", b: "2", c: "3" };
// assertEqual(eqObjects(ab, abc)); // => false

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// asserteqObjects(cd, dc); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// eqObjects(cd, cd2); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); //