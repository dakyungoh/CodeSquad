function Stack() {
  this.items = [];
  this.push = function (item) {
    this.items.push(item);
  };
  this.pop = function () {
    return this.items.pop();
  };
  this.size = function () {
    return this.items.length;
  };
  this.isEmpty = function () {
    return this.items.length === 0;
  };
  this.show = function () {
    console.log(this.items);
  };
  return this;
}

/**
 * 입력받은 문자열이 정상적인 괄호인지 판별한다.
 * @param {string} parentheses || 제한조건: 길이 1 이상 100 이하의 문자열이다.
 * @return {boolean}
 */
function checkParentheses(parentheses) {
  const myStack = new Stack();
  for (let i = 0; i < parentheses.length; i++) {
    const letter = parentheses[i];
    if (letter === "(") {
      myStack.push(letter);
    } else if (letter === ")" && !myStack.isEmpty()) {
      myStack.pop();
    } else if (letter === ")" && myStack.isEmpty()) {
      return false;
    }
  }

  return myStack.isEmpty();
}

console.log(checkParentheses("()") === true); // true
console.log(checkParentheses("((()))") === true); // true
console.log(checkParentheses("(()()(()))") === true); // true
console.log(checkParentheses("(()))()") === false); // false
console.log(checkParentheses("(()") === false); // false
console.log(checkParentheses("(콩)") === true); // true
