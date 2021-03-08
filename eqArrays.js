// FUNCTION IMPLEMENTATION
const eqArrays = function (array1, array2){
  if (array1.length !== array2.length){
    return false;
  }

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
module.exports = eqArrays;



