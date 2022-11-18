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

console.log("---만들기 전 찍어보기---");
const da = new Human("dakyung", 27);
const chan = new Human("chanhee", 28);
console.log(da);
console.log(chan);

console.log("---set 넣어 찍어보기---");
console.log("before:", da.getName());
console.log("before:", da.getAge());
da.setName("dasoon");
da.setAge(30);
console.log("after:", da.getName());
console.log("after:", da.getAge());

console.log("---- get(key)로 접근하기 ----");
console.log(da.get("age"));
console.log(da.get("name"));

console.log("---value값 넣어보기---");
console.log("before: ", da.get("name"), da.get("hobby"));
da.set("name", "dakong");
da.set("hobby", "kongchack");
console.log("after: ", da.get("name"), da.get("hobby"));
