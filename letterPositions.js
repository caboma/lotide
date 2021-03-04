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

const assertArraysEqual = function (input1, input2){
  console.log(eqArrays(input1, input2));
}

const letterPositions = function (sentence){
  const results = {};
  
  for (let i = 0; i < sentence.length; i++){
    if (sentence[i] !== " "){
      if(results[sentence[i]]){
        results[sentence[i]].push(i);
      }
      else {
        const position = [];
        position.push(i);
        results[sentence[i]] = position;
        
      }
    }
  }
  return results;
}
console.log(letterPositions("lighthouse in the house"));
assertArraysEqual(letterPositions("hello").e, [1]);


/* SAMPLE OUTPUT
{ 
  l: [0],
  i: [1, 11],
  g: [2],
  h: [3, 5, 15, 18],
  t: [4, 14],
  o: [6, 19],
  u: [7, 20],
  s: [8, 21],
  e: [9, 16, 22],
  n: [12]
}*/

