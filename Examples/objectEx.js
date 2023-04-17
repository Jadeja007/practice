//1. verifies an argument is a plain object
function checkType(element) {
  return (
    typeof element === "object" && !Array.isArray(element) && element !== null
  );
}
console.log(checkType([1, 2, 3]));

//2.returns a deep array like [[key, value]]
function makePairs(obj) {
  return Object.entries(obj);
}
console.log(makePairs({ a: 1, b: 2 }));

//-->
function makePairs1(obj) {
  return Object.keys(obj).map((e) => [e, obj[e]]);
}
console.log(makePairs1({ a: 1, b: 2 }));

//-->
function makePairs2(obj) {
  const arr = [];
  for (const keys in obj) {
    arr.push([keys, obj[keys]]);
  }
  return arr;
}
console.log(makePairs2({ a: 1, b: 2 }));

//3. returns a new object without provided properties
function withoutPro(obj, arg) {
  delete obj[arg];
  return obj;
}
console.log(withoutPro({ a: 1, b: 2 }, "b"));

//5. IsEqual - Write a method that makes a shallow compare of two objects

const data = { a: 1, b: 1 };
const data2 = { a: 1, b: 1 };
const data3 = { a: 1, b: 2 };

function isEqual(obj1, obj2) {
  // const checkKey =
  //   Object.keys(obj1)[0] === Object.keys(obj2)[0] &&
  //   Object.keys(obj1)[1] === Object.keys(obj2)[1];
  // const checkVal =
  //   Object.values(obj1)[0] === Object.values(obj2)[0] &&
  //   Object.values(obj1)[1] === Object.values(obj2)[1];

  // if (obj1.length === obj2.length && checkKey && checkVal) {
  //   return true;
  // }
  // return false;

  const obj1key = Object.keys(obj1);
  const obj2key = Object.keys(obj2)

  if (obj1key.length !== obj2key.length) {
    return false;
  }
  for (const key in obj1) {
    if (obj1.hasOwnProperty(key) && obj1[key] !== obj2[key]) {
      return false
    }
  }
  return true

}
console.log(isEqual(data, data3));

/////
console.log(Object.entries(100))

const objx = { foo: "bar", baz: 42 };
// const map = new Map(objx);
// console.log(map)

const obj = { a: 5, b: 7, c: 9 };
(Object.entries(obj).forEach(([key, val]) => console.log(`key: ${key} val: ${val}`)))

//
const object1 = { a: 1, b: 2, c: 3 };

console.log(Object.fromEntries(Object.entries(object1).map(([key, val]) => [key,val*2])))
// { a: 2, b: 4, c: 6 }

