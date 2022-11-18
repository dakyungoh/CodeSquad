// 고유한 Hash 함수를 정한다.
function HashMap() {
  this.items = {};

  // put : 키-값을 추가한다.
  this.put = function (key, value) {
    this.items[key] = value;
  };

  // remove : 해당 키에 있는 값을 삭제한다.
  this.remove = function (key) {
    delete this.items[key];
  };

  // containsKey: 해당 키가 존재하는지 판단해서 Bool 결과를 리턴한다.
  this.containsKey = function (key) {
    return key in this.items;
  };

  // get: 해당 키와 매치되는 값을 찾아서 리턴한다.
  this.get = function (key) {
    return this.items[key];
  };

  // isEmpty : 비어있는 맵인지 Bool 결과를 리턴한다.
  this.isEmpty = function () {
    return Object.keys(this.items).length === 0;
  };

  // keys(): 전체 키 목록을 [String] 배열로 리턴한다.
  this.keys = function () {
    return Object.keys(this.items);
  };

  // replace : 키-값으로 기존 값을 대체한다.
  this.replace = function (key, value) {
    if (key in this.items) {
      this.items[key] = value;
    }
  };

  // size:전체 아이템 개수를 리턴한다.
  this.size = function () {
    return Object.keys(this.items).length;
  };

  // clear : 전체 맵을 초기화한다.
  this.clear = function () {
    this.items = {};
  };
  return this;
}

console.log("--- 처음 생성하고 찍기 ---");
const map = new HashMap();
console.log(map.items);

console.log("--- put test ---");
map.put("name", "dakyung");
map.put("nickName", "dk");
console.log(map.items);

console.log("--- remove test ---");
map.remove("name");
console.log(map.items);

console.log("--- containsKey test ---");
console.log("before: ", map.containsKey("name"));
map.put("name");
console.log("after: ", map.containsKey("name"));

console.log("--- get test ---");
console.log(map.get("nickName"));

console.log("--- isEmpty test ---");
console.log("before: ", map.isEmpty());
map.remove("name");
map.remove("nickName");
console.log("after: ", map.isEmpty());

console.log("--- keys test ---");
map.put("name");
map.put("nickName");
console.log(map.keys());

console.log("--- replace test ---");
map.replace("nickName", "dddkkk");
map.replace("name", "dakyung oh");
console.log(map.items);

console.log("--- size test ---");
console.log(map.size());

console.log("--- clear test ---");
console.log("before:", map.items);
map.clear();
console.log("after:", map.items);
