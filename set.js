// const set = (num) => {
//   const arr = [];
//   let sum = 0;

//   while (sum <= 100) {
//     let temp;

//     num++;
//     temp = num;
//     sum += temp;

//     arr.push(num);
//   }

//   return arr;
// };

// console.log(set(10));

const calCnt = (num, count) => {
  const result = {};
  let cnt = count;
  let set = 0;

  while (true) {
    if (num === 3) {
      num = 3;
    } else {
      num--;
    }
    set++;

    cnt = cnt - num;

    if (cnt <= 0) return;

    result['set'] = set;
    result['num'] = num;
    result['remain'] = cnt;

    console.log(result);
  }
};

calCnt(10 + 1, 100);
