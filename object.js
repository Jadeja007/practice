//null object
// const NorObj = {};
// const NullObj = Object.create(null);

// console.log(`Normal Obj is : ${NorObj} `);
// console.log(`Null Obj : ${NullObj}`);

//1. .assign()
const first1 = {a:1, b:2};
const second2 = {b:3, c:4};

const targetedValue = Object.assign(first1, second2);

// console.log(first)

//Ex --> we can copy an object by .assign({}, ) // Shallow copy
const obj1 = { a: 0, b: { c: 0 } };
const obj2 = Object.assign({}, obj1);

obj1.a = 1;
console.log("1",obj1);
console.log("1",obj2);

obj2.a = 2;
console.log("2",obj1);
console.log("2",obj2);

obj2.b.c = 3;
console.log("3",obj1);
console.log("3",obj2);

//Deep Copy
const obj3 = {a:0, b:{c:0}};
const obj4 = JSON.parse(JSON.stringify(obj3));

obj3.a = 2;
obj3.c = 5;

console.log(obj4)

//2. Object.entries()    --> converts JS objects to an array of arrays
const data = {name : "foo", age: 40};
console.log(Object.entries(data))

//On Primitive Values     ---> string is only have own enumberable properties, While other primitives return empty Array.
console.log(Object.entries("foo"))   
console.log(Object.entries(100))

//Object.keys() && Object.values()
const object1 = {
    a: 'somestring',
    b: 42,
    c: false
  };
console.log(Object.keys(object1));

console.log(Object.values(object1))





