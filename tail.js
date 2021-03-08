// FUNCTION IMPLEMENTATION
const tail = function(myArray) {
  const newArray = myArray.slice(1);
  return newArray;
};

module.exports = tail;