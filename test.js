function solution(n, m) {
  const answer = [];

  return answer;
}

function min(n, m) {
  let i = 1;
  while (n !== m) {
    i++;
    n = n * i;
    m = m * i;
    console.log(m);
  }
}

min(12, 18);
