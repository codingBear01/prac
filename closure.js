// 클로저 문제 -> 스코프, 비동기, var
// 클로저 자체에 문제가 발생했다는 뜻이 아니라 반드시 클로저를 사용해서 해결해야 하는 문제라는 뜻
// for문(반복문)과 비동기를 함께 사용할 떄 종종 발생

function a() {
  // var의 경우 변수가 for가 아닌 부모 함수 a()에 속하게 됨.(함수 a() 내 var i = 0;이라고 선언된 것)
  // for문을 돌면서 i는 점증하다 5가 되는 순간 false가 되어 작업 중지
  // 즉 함수 a()에 선언된 var는 var i = 5;가 되어 있는 것임
  // 따라서 setTimeout 내 익명 함수 () => {}에서 console.log로써 비동기적으로 var i에 접근하면 이미 5가 된 var i를 반환하는 것임
  // for문 돌면서 i가 점증하여 setTimeout의 시간 설정값이 0, 1000, 2000, 3000, 4000이 되고, var i가 5가 될 때까지의 작업은 동기. 익명 함수 내 console.log 실행은 비동기.
  // function a()의 scope는 1개, 즉 var i도 한 개, for문의 스코프는 5개, i는 각각 0에서 4까지
  for (var i = 0; i < 5; i++)
    setTimeout(() => console.log('a var', i), i * 1000);
}
a(); // 5 5 5 5 5

/* 해결법 */
// 1. var 유지 ? 즉시 실행 함수 활용
// 즉시 실행 함수는 선언과 호출이 동시에 일어남
// 즉시 실행 함수 내 선언된 var j는 a1() 내 선언된 var i를 참조하여 0에서 4까지 점증하므로 0에서 4까지 제대로 출력됨.(점증값 처리 시 temp변수 활용법과 동일)
function a1() {
  for (var i = 0; i < 5; i++)
    (function (j) {
      // var j = i;
      setTimeout(() => console.log('a1 iife', j), i * 1000);
    })(i);
}
a1(); // 0 1 2 3 4

// 2. let 사용
// let으로 i 선언 시 i는 for에 속하므로 제대로 참조됨.
function a2() {
  for (let i = 0; i < 5; i++)
    setTimeout(() => console.log('a2 let', i), i * 1000);
}
a2(); // 0 1 2 3 4
