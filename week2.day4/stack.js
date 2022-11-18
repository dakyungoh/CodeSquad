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

function test() {
  const myStack = new Stack();
  myStack.push(1);
  myStack.show(); // [1]
  myStack.push(2);
  myStack.show(); // [1, 2]
  myStack.push(3);
  myStack.show(); // [1, 2, 3]
  myStack.pop();
  myStack.show(); // [1, 2]
  myStack.push(4);
  myStack.show(); // [1, 2, 4]
  myStack.pop();
  myStack.show(); // [1, 2]
  myStack.pop();
  myStack.show(); // [1]
}

// test();

// 소문제 1
function mission0() {
  const stack = new Stack();
  for (let i = 1; i <= 10; i++) {
    stack.push(i);
  }
  const size = stack.size();
  for (let i = 1; i <= size; i++) {
    console.log(stack.pop());
  }
}

// mission0();

// 문제 1 - 뒤집기
function reverse(arr) {
  const stack = new Stack();
  for (let i = 0; i < arr.length; i++) {
    stack.push(arr[i]);
  }

  const reversed = [];
  const size = stack.size();
  for (let i = 1; i <= size; i++) {
    reversed.push(stack.pop());
  }

  return reversed;
}

function testProblem1() {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const reversed = reverse(data);
  console.log(reversed);
}

// testProblem1();

// 문제 2. 신비한 계산기
function mysteryCalculator() {
  const stack = new Stack();
  for (let i = 1; i <= 10; i++) {
    stack.push(i);
  }

  while (stack.size() >= 3) {
    const mul = stack.pop() * stack.pop();
    stack.pop();
    stack.push(mul);
  }

  return stack.pop();
}

console.log(mysteryCalculator());
