function HashMap() {
  this.items = {};
  this.put = function (key, value) {
    // key에 대한 value를 추가하거나 업데이트 한다.
    this.items[key] = value;
  };
  this.remove = function (key) {
    delete this.items[key]; // this.items.key -> this.items["key"]
  };
  this.containsKey = function (key) {
    return key in this.items;
  };
  this.get = function (key) {
    return this.items[key];
  };
  this.isEmpty = function () {
    return Object.keys(this.items).length === 0;
  };
  this.keys = function () {
    return Object.keys(this.items);
  };
  this.replace = function (key, value) {
    // key에 대한 value를 업데이트 한다. (추가는 아니다.)
    if (key in this.items) {
      this.items[key] = value;
    } else {
      console.log("key 값이 없어서 업데이트 할 수 없습니다.", "key:", key);
    }
  };
  this.size = function () {
    return Object.keys(this.items).length;
  };
  this.clear = function () {
    this.items = {};
  };
  return this;
}

console.log("--- 처음 생성하고 찍기 ---");
const map1 = new HashMap();
console.log(map1.items);

console.log("--- put test ---");
map1.put("name", "dakyung");
console.log(map1.items);

console.log("--- remove test ---");
map1.remove("name");
console.log(map1.items);

console.log("--- containsKey test ---");
console.log("전:", map1.containsKey("name"));
map1.put("name", "dakyung");
console.log("후:", map1.containsKey("name"));

console.log("--- get test ---");
console.log(map1.get("name"));

console.log("--- isEmpty test ---");
console.log("전:", map1.isEmpty());
map1.remove("name");
console.log("후:", map1.isEmpty());

console.log("--- keys test ---");
map1.put("name", "dakyung");
map1.put("age", 27);
map1.put("friends", ["kong", "chan"]);
console.log(map1.keys());

console.log("--- replace test ---");
map1.replace("name", "dasoon");
console.log(map1.get("name"));
map1.replace("address", "dontan");

console.log("--- size test ---");
console.log(map1.size());

console.log("--- clear test ---");
console.log("전:", map1.items);
map1.clear();
console.log("후:", map1.items);
