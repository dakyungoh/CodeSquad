// 1. add 버튼 누르면, task가 추가된다.
function addTaskItem() {
  // new task input 영역에 뭐라 써있는지 받아오기
  const inputTaskElem = document.querySelector("#task-name");
  const inputValue = inputTaskElem.value;
  // my-task-list에 inputValue를 담은 task를 추가하기
  const myTaskListElem = document.querySelector("#my-task-list");
  myTaskListElem.innerHTML += `
    <li>
      <input type="checkbox" onclick="onClickCheckbox(this)">
      <span>${inputValue}</span>
      <img src="trash-bin.png" onclick="onClickDelete(this)" />
    </li>
  `;

  // new task input 영역 비우기
  inputTaskElem.value = "";
}

// 2. delete button 누르면 해당 task가 지워진다.
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

// 4. 엔터를 누르면, task가 추가된다.
function onKeyUp() {
  if (window.event.keyCode === 13) {
    addTaskItem();
  }
}
