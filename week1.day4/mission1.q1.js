// factorial 함수
// 임의의 숫자(m)를 입력받아
// 1부터 m까지의 factorial 값을 배열로 담아서 반환하는 함수 만들기.

function calculate(m) {
  if (m < 1) {
    return [];
  }
  let resultFac = [1];
  for (let i = 1; i < m; i++) {
    resultFac[i] = resultFac[i - 1] * (i + 1);
  }
  return resultFac;
}

const result = calculate(4);
console.log(result); // [1, 2, 6, 24]
