let globalCount = 0;

function counter() {
  globalCount = globalCount + 1;
  return globalCount;
}

const a = counter();
console.log(a); // 1

const b = counter();
console.log(b); // 2

const c = counter();
console.log(c); // 3
