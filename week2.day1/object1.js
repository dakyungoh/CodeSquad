const girl = {
  name: "dk",
  age: 27,
  like: "dog",
  boyfriend: {
    name: "ch",
    age: 28,
    adress: "dontan",
  },
  sayHello: function () {
    console.log("Hello~ I'm ", this.name, "I like ", this.like);
  },
};
// console.log(girl);

const key = "boyfriend";
console.log(girl.name);
console.log(girl.boyfriend);
console.log(girl[key]);
console.log(girl["boyfriend"]);
girl.sayHello();
