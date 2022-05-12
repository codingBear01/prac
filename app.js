/* 
1. The dispatcher must completely handle the most trivial cse, without calling the iterative function.
2. The dispatcher, when calling the iterative function, must pass a smaller version of the problem.
*/

const numArr = [1, 2, 3, 4, 5];
// const numArr = [];

function iterativeArraySum(array, size) {
  let sum = 0;

  for (let i = 0; i < size; ++i) {
    sum += array[i];
  }
  return sum;
}

function arraySumDelegate(array, size) {
  if (size === 0) return 0;
  const lastNum = array[size - 1];
  const allButLastSum = iterativeArraySum(array, size - 1);
  return lastNum + allButLastSum;
}

console.log(arraySumDelegate(numArr, numArr.length));
