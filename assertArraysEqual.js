const eqArrays = require('./eqArrays');

const assertArraysEqual = function (input1, input2){
  console.log(eqArrays(input1, input2));
}

module.exports = assertArraysEqual;