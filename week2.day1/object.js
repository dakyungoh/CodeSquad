// 객체
const man = {
  name: "chanhee",
  fullname: ["chanhee", "park"],
  age: 28,
  hobby: "date",
  sayHello: function () {
    console.log("Hello, I am", this.name);
  },
  gf: {
    name: "dakyung",
    status: "cute",
  },
};

man["address"] = "dongtan yurim 201";

console.log(man);

const key = "name";
console.log(man[key]);
console.log(man["name"]);
console.log(man.name);

console.log(man.address);

man.sayHello();
