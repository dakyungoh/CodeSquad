wh; // 클로저를 이용한 풀이
const x = {};

function getCounter() {
  let count = 0;
  return function counter() {
    count = count + 1;
    return count;
  };
}

const b = getCounter();

console.log(b());
console.log(b());
console.log(b());
