// 1. add button을 누르면 New Task 추가하기
// 1.1. add button 찾기
const addButtonElem = document.querySelector("#add-button");
// 1.2. add button에 click 이벤트 처리
addButtonElem.addEventListener("click", function () {
  // 1.3. new task input 영역에 뭐라 써있는지 받아오기
  const inputTaskElem = document.querySelector("#task-name");
  const inputValue = inputTaskElem.value;
  // 1.4. my-task-list에 inputValue를 담은 task를 추가하기
  const myTaskListElem = document.querySelector("#my-task-list");
  console.log(myTaskListElem);
  myTaskListElem.insertAdjacentHTML(
    "beforeend",
    `
      <li>
        <input type="checkbox" onclick="onClickCheckbox(this)">
        <span>${inputValue}</span>
        <input type="button" value="delete" onclick="onClickDelete(this)">
      </li>
    `
  );
  // 1.5. new task input 영역 비우기
  inputTaskElem.value = "";
});

// --- 여기부터 지워도 괜찮음 ---
// 2. delete button 누르면 지우기
// 2.1. delete button 엘리먼트 배열 받아오기
const deleteButtonElems = document.getElementsByClassName("delete-button");
for (let i = 0; i < deleteButtonElems.length; i++) {
  const elem = deleteButtonElems[i];
  // 2.2. 각 delete button 엘리먼트가 클릭됐을 때의 이벤트 정의하기
  elem.addEventListener("click", function () {
    // 2.3. 각 delete button 엘리먼트의 부모 (li 엘리먼트)를 지우기
    elem.parentElement.remove();
  });
}
// --- 여기까지 지워도 괜찮음 ---

// 2. delete button 누르면 지우기
function onClickDelete(deleteButtonElem) {
  deleteButtonElem.parentElement.remove();
}

// 3. checkbox 클릭하면 텍스트에 줄이 그어지거나 사라진다.
function onClickCheckbox(CheckElem) {
  const liElem = CheckElem.parentElement;
  const spanElem = liElem.querySelector("span");
  if (CheckElem.checked) {
    spanElem.innerHTML = `<s>${spanElem.innerText}</s>`;
  } else {
    spanElem.innerHTML = `${spanElem.innerText}`;
  }
}
