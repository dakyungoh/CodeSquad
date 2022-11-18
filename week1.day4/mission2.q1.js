// 문제 1. Filter
// 1. 배열 A를 만들고, 그 안에 1이상 10이하의 자연수를 넣어주세요.
const A = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("A:", A);

// 2. Array.prototype.filter 함수를 이용하여 다음을 만족하는 배열 B를 배열 A로부터 만들어주세요.
// 2-1. 배열 B: 배열 A의 요소 중 짝수인 것만 들어있는 배열
const B = A.filter((item) => item % 2 === 0);
console.log("B:", B);

// 3. Array.prototype.filter 함수를 이용하여 다음을 만족하는 배열 C를 배열 A로부터 만들어주세요.
// 3-1. 배열 C: 배열 A의 요소 중 5보다 큰 것만 들어있는 배열
const C = A.filter((item) => item > 5);
console.log("C:", C);

// 4. Array.prototype.filter 함수를 이용하여 다음을 만족하는 배열 D를 배열 B로부터 만들어주세요.
// 4-1. 배열 D: 배열 B의 요소 중 index가 홀수인 것만 들어있는 배열
const D = B.filter((item, index) => index % 2 === 1);
console.log("D:", D);

// 문제 2. MAP

// 1. 배열 E를 map 함수를 이용해 다음과 같이 만들어봅시다.
// 1-1. 배열 E: 배열 A의 모든 요소에 곱하기 2를 한 배열

const E = A.map((item) => item * 2);
console.log("E:", E);

// 2. 배열 F를 map 함수를 이용해 다음과 같이 만들어봅시다.
// 2-2. 배열 F: 배열 C의 모든 요소마다, 요소의 index를 곱한 것 (next item = item * index)
const F = C.map((item, index) => item * index);
console.log("F:", F);

// 3. 배열 G를 map 함수를 이용해 다음과 같이 만들어봅시다.
// 3-1. 배열 G: 배열 A의 요소 중 짝수인 것에는 곱하기 2를, 홀수인 것에는 더하기 2를 한 것
const G = A.map((item) => (item % 2 === 0 ? item * 2 : item + 2));
console.log("G:", G);

// 문제 3. reduce
// 1. 배열 A의 합을 reduce를 이용하여 만들어봅시다.
const startNumber = 0;
const sumNumber = A.reduce((sum, item) => sum + item, startNumber);
console.log(sumNumber);

// 2. 배열 A의 각 요소를 각각 배열에 넣어봅시다.
// 예: A가 [1, 2, 3]라면 [ [1], [2], [3] ] 만들기
const arr = [1, 2, 3];
const X1 = arr.map((item) => [item]);
console.log("X1:", X1);

const X2 = arr.reduce((acc, cur) => [...acc, [cur]], []);
console.log("X2:", X2);

// 3. 배열 A를 가지고 다음과 같은 배열을 만들어봅시다.
// 출력 배열의 i 번째 요소가 [ A[0], A[1], ... A[i] ] 인 출력배열을 만드시오
// A가 [1, 2, 3]라면 [ [1], [1, 2], [1, 2, 3] ] 만들기
const Y = [];
for (let i = 0; i < arr.length; i++) {
  Y.push([arr.slice(0, i + 1)]);
}
console.log(Y);

// 4. 배열 A의 요소 중 짝수인 것의 합을 구하시오.
const Z = A.reduce((sum, item) => {
  if (item % 2 === 0) {
    return sum + item; // sum = sum + item
  } else {
    return sum; // sum = sum
  }
}, 0);

let sum = 0;
for (let i = 0; i < A.length; i++) {
  const item = A[i];
  if (item % 2 === 0) {
    sum = sum + item; // sum = sum + item
  } else {
    sum = sum; // sum = sum
  }
}
console.log(Z);

// 5. 배열 A의 요소 중 짝수인 것의 합을 구하시오, 단, 짝수의 여부를 filter를 이용하여 chaining하여 구하시오.
//hint: chaining이란 무엇인가를 알아봅시다. (method chaining)
const last = A.filter((item) => item % 2 === 0).reduce(
  (sum, item) => sum + item,
  0
);
console.log(last);
