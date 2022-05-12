// const p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     a = 5;
//     console.log(a); // 2
//     resolve(a);
//   });
// });

// console.log('딴짓'); // 1

// p.then((result) => {
//   console.log('result', result); //3
// });

// function delayP(ms) {
//   return new Promise((resolve, reject) => {
//     setTimeout(resolve, ms);
//   });
// }

// async function a() {
//   try {
//     await delayP(1000);
//   } catch (err) {
//     console.error(err);
//   }
//   try {
//     await delayP(1000);
//     await delayP(1000);
//     await delayP(1000);
//   } catch (err) {
//     console.error(err);
//   }
// }

// /* change async to Promise */
// async function a() {
//   // await 개수 = then 개수
//   // Promise화할 땐 오른쪽에서 왼쪽으로 읽음
//   const a = await 1; // await 사이에 있는 값들을 대입
//   console.log('a', a);
//   console.log('hmm');
//   await null;
//   const b = await Promise.resolve(1);
//   console.log('b', b);
//   return b;
// }

// Promise.resolve(1) // await에 할당된 값이 Promise 아니므로 먼저 Promise화부터 함
//   .then((a) => {
//     console.log('a', a);
//     console.log('hmm');
//     return null;
//   })
//   .then(() => Promise.resolve(1))
//   .then((b) => {
//     console.log('b', b);
//     return b;
//   });

// /* the implementing order of sync and async */
// // 동기 부분부터 다 실행되고 나서 비동기로 넘어감. 비동기로 넘어간 순간 동기로 돌아오지 않음(한 번 비동기는 영원한 비동기)
// async function a() {
//   console.log('동기', 2);
//   const a = await 1;
//   console.log('비동기 시작', 4);
//   console.log('비동기', a);
//   await null;
//   const b = await Promise.resolve(1);
//   console.log('비동기', b);
//   return b;
// }

// console.log('동기', 1);

// a()
//   .then((result) => {
//     console.log('비동기', result);
//     return result;
//   })
//   .then((result2) => console.log('비동기', result2));

// console.log('동기', 3);

// function delayP(ms) {
//   return new Promise((resolve, reject) => {
//     setTimeout(resolve, ms);
//   });
// }

// // 무지성 await 남발 금지(성능 저하 초래). 동시에 실행될 수 있는 것은 Promise.all()로 묶어서 처리. 왜냐하면 Promise는 실행되고 나서 나중에 원할 때 값을 활용할 수 있기 때문.
// async function a() {
//   await delayP(3000);
//   await delayP(6000);
//   await delayP(9000);
// } // total 18sec

// async function b() {
//   const p1 = delayP(3000);
//   const p2 = delayP(6000);
//   await Promise.all([p1, p2]); // 6초
//   await delayP(9000); // 9초
// } // total 15sec

// new Promise((resolve, reject) => {
//   const p1 = delayP(3000);
//   const p2 = delayP(6000);
//   return Promise.all([p1, p2]);
// }).then(() => {
//   return delayP(9000);
// });

// /* example code */
// async function createPost() {
//   const post = await db.getPost(); // 게시글 조회
//   if (post) {
//     res.status(403).send('이미 게시글이 존재합니다.');
//   } else {
//     await db.createPost(); // 게시글 작성

//     const incrementPostCnt = db.userIncrementPostCount(); // 사용자의 작성글 카운트 1 증가
//     const postNoti = db.createNoti(); // 새로운 게시글 알림 등록
//     // 위 두 작업은 순차적으로 실행될 필요가 없으므로 일단 실행시켜 놓고 Promise.allSettled로 나중에 필요할 때 결괏값 활용
//     await Promise.allSettled([incrementPostCnt, postNoti]);
//   }
// }

// async function c() {
//   const a = await 1;
//   const b = await 2;
//   return a + b;
// }

// (function () {
//   let a;
//   let b;

//   return Promise.resolve(1)
//     .then((result) => {
//       a = result;
//       return 2;
//     })
//     .then((result) => {
//       b = result;
//       return a + b;
//     });
// })();

const results = await Promise.all([p1, p2, p3]);

results.map(async (result) => {
  // await result 조작이 동시에 이루어짐
}, []);

for (let result of results) {
  // await result 조작이 순차적으로 이루어짐
}
