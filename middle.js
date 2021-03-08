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

module.exports = middle;

