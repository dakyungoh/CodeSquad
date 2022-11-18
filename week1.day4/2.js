/* 
변수 a에 다음 함수를 대입합니다, "콘솔 로그로 'hello world'를 찍는 함수"
변수 a를 '실행'합니다.
*/
const a = function () {
  console.log("hello world");
};
a();

/*
함수 'callTwice'를 만듭니다. 매개변수로 함수를 하나 받습니다. 'callTwice'는 매개변수로 받은 함수를 두 번 실행합니다.
변수 a를 Q1와 똑같이 만듭니다.
callTwice에 a를 매개변수로 넘겨 실행합니다.
*/
function callTwice(myfunc) {
  myfunc();
  myfunc();
}
callTwice(a);
/*
함수 `threeAndFour`를 만듭니다. 이 함수는 '매개 변수로 숫자 두개를 받는 함수'를 매개변수로 받습니다. 
이 함수는 매개변수로 받은 함수에 3과 4를 넣어 실행하고, 그 결과를 리턴합니다.
함수 add를 만듭니다. 이 함수는 숫자 두개를 매개변수로 받습니다. 이 함수는 매개변수 두 숫자를 더해서 리턴합니다.
함수 mul을 만듭니다. 이 함수는 숫자 두개를 매개변수로 받아, 곱셈하여 리턴합니다.
`threeAndFour`에 함수 add를 넣어서, 그 리턴값을 콘솔 로그로 찍습니다.
`threeAndFour`에 함수 mul를 넣어서, 그 리턴값을 콘솔 로그로 찍습니다.
*/

// 번외
function getArea(shapeFunc, num1, num2) {
  return shapeFunc(num1, num2);
}

function getRectArea(w, h) {
  return w * h;
}

function getCircleArea(r) {
  return r * r * Math.PI;
}

console.log(getArea(getCircleArea, 10));
console.log(getArea(getRectArea, 10, 7));
