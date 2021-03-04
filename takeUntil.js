// Method using for of
// const takeUntil = function(array, callback) {
//   const newArray = [];
//   for (item of array) {
//     if (callback(item)){
//       break;
//     } else {
//       newArray.push(item);
//     }
//   };
//   return newArray;
// }

const takeUntil = function(array, callback) {
  const newArray = [];
  let found = false;
  array.forEach(item => {
    if (callback(item)){
      found = true;
    }
    if(!found){
      newArray.push(item);
    }
  }); 
  return newArray;
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];

const results1 = takeUntil(data1, (x) => x < 0);
console.log(results1);
console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

//expected output
// [ 1, 2, 5, 7, 2 ]
// ---
// [ 'I\'ve', 'been', 'to', 'Hollywood' ]