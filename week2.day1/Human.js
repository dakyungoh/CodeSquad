function Human(initialName, initialAge) {
  this.name = initialName;
  this.age = initialAge;
  this.getName = function () {
    return this.name;
  };
  this.getAge = function () {
    return this.age;
  };
  this.get = function (key) {
    return this[key];
  };
  this.setName = function (nextName) {
    this.name = nextName;
  };
  this.setAge = function (nextAge) {
    this.age = nextAge;
  };
  this.set = function (key, value) {
    this[key] = value;
  };
  return this;
}

console.log("---- 만들고 찍어 보기 ----");
const chan = new Human("chanhee", 27);
const da = new Human("dakyung", 25);
console.log(chan);
console.log(da);

console.log("---- 값 바꾸고 찍어 보기 ----");
console.log("전:", chan.getAge());
chan.setAge(28);
console.log("후:", chan.getAge());

console.log("---- get(key)로 접근하기 ----");
console.log(chan.get("age"));

console.log("---- set(key, value)로 값 넣어보기");
console.log("전:", chan.get("name"), chan.get("address"));
chan.set("name", "chandol");
chan.set("address", "dongtan");
console.log("후:", chan.get("name"), chan.get("address"));
