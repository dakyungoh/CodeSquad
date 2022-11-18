// 평균 구하기
/* 아래 예시는 네 명의 학생에 대한 과목 점수이다.
    각 학생은 3가지 과목에 대한 점수를 가지고 있다.
    각 학생의 평균점수(1)와 모든 학생의 최고점수의 평균점수(2)를 출력하라 */

const grades = [
  [88, 76, 77],
  [33, 44, 44],
  [90, 100, 94],
  [30, 44, 98],
];

// 1. 각 학생의 평균점수를 구해서 출력하기
// 1.1. 각 학생의 평균점수 구하기 (getAverage)
// 1.2. 그걸 모든 학생에게 반복해서 하나의 배열에 담기 (getAverageArray)
// 1.3. 최종으로 구해진 평균점수들을 출력하기 (console.log())

// 2. 모든 학생의 최고점수의 평균점수를 구해서 출력하기
// 2.1. 각 학생의 최고점수 구하기 (getMaxScore)
// 2.2. 그걸 모든 학생에게 반복해서 하나의 배열에 담기 (getMaxScoreArray)
// 2.3. 그 배열의 평균 점수 구하기
// 2.4. 그걸 출력하기

/**
 * 한 학생의 평균 점수를 구하는 함수
 * @param {Array<number>} scores
 * @returns {number}
 */
function getAverage(scores) {
  let sum = 0;
  for (let i = 0; i < scores.length; i++) {
    sum = sum + scores[i];
  }
  return sum / scores.length;
}

/**
 * 여러 학생의 평균점수가 담긴 배열을 구하는 함수
 * @param {Array<Array<number>>} arrayOfScores
 * @returns {Array<number>}
 */
function getAverageArray(arrayOfScores) {
  const averageArray = [];
  for (let i = 0; i < arrayOfScores.length; i++) {
    const scores = arrayOfScores[i];
    const average = getAverage(scores);
    averageArray.push(average);
  }
  return averageArray;
}

/**
 * 주어진 배열의 최고 숫자를 찾는 함수 (단, 배열에 음수는 없음)
 * @param {Array<number} scores
 * @returns {number}
 */
function getMaxScore(scores) {
  let maxScore = 0; // -Infinity 가 더 좋긴하다.
  for (let i = 0; i < scores.length; i++) {
    if (maxScore < scores[i]) {
      maxScore = scores[i];
    }
  }
  return maxScore;
}

function getMaxScoreArray(arrayOfScores) {
  const maxScoreArray = [];
  for (let i = 0; i < arrayOfScores.length; i++) {
    const scores = arrayOfScores[i];
    const maxScore = getMaxScore(scores);
    maxScoreArray.push(maxScore);
  }
  return maxScoreArray;
}

console.log("평균 점수:", getAverageArray(grades));
console.log("최고 점수:", getMaxScoreArray(grades));
const maxScores = getMaxScoreArray(grades);
console.log("최고 점수의 평균:", getAverage(maxScores));
