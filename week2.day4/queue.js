function Queue() {
  this.items = [];
  this.enqueue = function (item) {
    this.items.push(item);
  };
  this.dequeue = function () {
    const removed = this.items.splice(0, 1);
    return removed[0];
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
  const myQueue = new Queue();
  myQueue.enqueue(1);
  myQueue.show(); // [1]
  myQueue.enqueue(2);
  myQueue.show(); // [1, 2]
  myQueue.enqueue(3);
  myQueue.show(); // [1, 2, 3]
  myQueue.dequeue();
  myQueue.show(); // [1, 2]
  myQueue.enqueue(4);
  myQueue.show(); // [1, 2, 4]
  myQueue.dequeue();
  myQueue.show(); // [1, 2]
  myQueue.dequeue();
  myQueue.show(); // [1]
}

// test();

function mission1() {
  const queue = new Queue();
  for (let i = 1; i <= 10; i++) {
    queue.enqueue(i);
  }
  const size = queue.size();
  for (let i = 1; i <= size; i++) {
    console.log(queue.dequeue());
  }
}
// mission1();

// 문제 2. 신비한 계산기
function mysteryCalculator() {
  const queue = new Queue();
  for (let i = 1; i <= 10; i++) {
    queue.enqueue(i);
  }
  while (queue.size() >= 3) {
    const mul = queue.dequeue() * queue.dequeue();
    queue.dequeue();
    queue.enqueue(mul);
  }
  return queue.dequeue();
}

console.log(mysteryCalculator());
