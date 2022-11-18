// 배열 거르기
/* 특수기호가 있는 아이디 제외
   아이디에서 숫자를 제거
   2가지 iteration을 처리하는 버전을 만든다.
      for/while문을 사용한 버전 만들기.
      forEach,filter, map등의 고차함수를 사용한 버전 만들기 */

const peoples = ["crong!@#", "honux5", "sarah#", "hea3d", "zello", "5lucas"];
const filtered = filterId(peoples);
console.log(filtered); // ["honux", "head", "zello", "lucas"]

function filterId(peopleList) {
  // console.log("원본:", peopleList);

  // 특수기호가 있는 아이디 제외.
  // const hasNotSpecial = peopleList.filter((people) =>
  //   /^[a-zA-Z0-9]+$/.test(people)
  // );
  const hasNotSpecial = [];
  for (let i = 0; i < peopleList.length; i++) {
    const people = peopleList[i];
    if (/^[a-zA-Z0-9]+$/.test(people)) {
      hasNotSpecial.push(people);
    }
  }

  // console.log("특수기호 삭제:", hasNotSpecial);

  // 아이디에서 숫자를 제거한다. (eg. 'hea3d' => 'head')
  // const removeNumber = hasNotSpecial.map((people) => {
  //   const nameArr = people.split("");
  //   const removed = nameArr.filter((letter) => !/^[0-9]+$/.test(letter));
  //   return removed.join("");
  // });

  const removeNumber = [];
  for (let i = 0; i < hasNotSpecial.length; i++) {
    const people = hasNotSpecial[i];
    const nameArr = people.split("");
    const removed = [];
    for (let i = 0; i < nameArr.length; i++) {
      const letter = nameArr[i];
      if (!/^[0-9]+$/.test(letter)) {
        removed.push(letter);
      }
    }
    removeNumber.push(removed.join(""));
  }
  // console.log("숫자를 제거:", removeNumber);

  return removeNumber;
}
