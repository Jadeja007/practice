//1. .concat()
const letters = ["a", "b", "c"];
const numbers = [1, 2, 3];

console.log(letters.concat(numbers))
console.log(letters.concat(1, [2, 3]))

//
const num1 = [[1]];
const num2 = [2, [3]];

const num = num1.concat(num2)
console.log(num)

num1[0].push(4);
console.log(num)

// .copyWithin()
const array1 = ['a', 'b', 'c', 'd', 'e'];
console.log(array1.copyWithin(4))   // --> it will copy array from the start and repeat after given indices
console.log(array1.copyWithin(0,3))  //-->
console.log(array1.copyWithin(0,2,4));  // --> 

//.entries()   --> it will return new array iterator object that contain key/value pair for each index
const arr = ['a', 'b', 'c'];
const itr = arr.entries();
console.log(itr.next().value)
console.log(itr.next().value)
console.log(itr.next().value)

// .every(callbackFn)
const isBelow = (currentVal) => currentVal < 40;
const ar = [1, 30, 39, 29, 10, 13];

console.log(ar.every(isBelow))

///ex 
function isSubset(arrr1, arrr2){
    return arrr2.every((element) => arrr1.includes(element))
}
console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 7, 6]));

// .filter()
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

console.log(words.filter(word => word.length >6));

//Find Prime Numbers
const a = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function isPrime(num){
      for (let i=2; num > i; i++){
        if (num % i === 0){
            return false;
        }
      }
      return num > 1
}
console.log(a.filter(isPrime))

//ex to filter array content based on search criteria.
const fruits = ["apple", "banana", "grapes", "mango", "orange"];

function filterSearch(are, query){
     return are.filter((item)=> item.toLowerCase().includes(query.toLowerCase()))
}

console.log(filterSearch(fruits, "an"))

// .flat()
const arr12 = [1, 2, 3, 4];

console.log(typeof(arr12))
console.log([1,2,3,[4,5]].flat());

// .flatmap()
const arr21 = [1,2,3];
console.log(arr21.flatMap(i => i === 2 ? [2,2] : 1))

// .forEach()
const items = ["i1", "i2"]
items.forEach(i => console.log(i))
console.log(items.map(i => i+1))
console.log(items.forEach(i => i+1))

//Converting for loop ---> forEach
const itm = ["item1", "item2", "item3"];
const emp = [];

for (let i=0 ; i<itm.length; i++){   
   emp.push(itm[i]) 
}
console.log(emp)
//===>>  
itm.forEach(item => emp.push(item))

// .indexOf()
console.log(itm.indexOf("item2"));
console.log(itm.indexOf("2"))
console.log(itm.indexOf("item2", 3))

// .map()
const int = (elem) => parseInt(elem, 10)
console.log(["1", "2", "3"].map(int), "map");  //=> alternative
// console.log(["1", "2", "3"].map((i) => parseInt(i)))   //---> best way to remove float value
// console.log(["1", "2", "3"].map(Number));


// .reduce()  ==> 
const initialValue = 0;
const sum = arr12.reduce((accum, curre) => accum+curre, initialValue);
console.log("sum", sum);

const getMax = (a, b) => Math.max(a,b)
console.log([15, 10].reduce(getMax, 100));

//ex- work without initial value
const ar1 = [15, 16, 17, 18, 19];

function reducer (accum, cur, index) {
  const ret = accum + cur;
  console.log(
    `accumulator: ${accum}, currentValue: ${cur}, index: ${index}, returns: ${ret}`,
  );
return ret;
}
console.log(ar1.reduce(reducer));

//work with initial value
console.log(ar1.reduce((accum, cur) => accum + cur, 10))

//
const objects = [{ x: 1 }, { x: 2 }, { x: 3 }];
console.log(objects.reduce((accum, cur) => accum + cur.x ,0))

//
const myArray = ["a", "b", "a", "b", "c", "e", "e", "c", "d", "d", "d", "d"];

const updatedArr = myArray.reduce((accum, cur) =>{
  if(!accum.includes(cur)){
    return [...accum + cur]
  }
  return accum
}, [ ])
console.log(updatedArr)

//reducerRight()
console.log([1, 2, , 4].reduceRight((a, b) => a + b)); // --> it will start from right


// .reverse()  --> it will also change initial array so be careful while using
const item = ["item1", "item2", "item3"];
// console.log(item.reverse());
// console.log(item)

const itemmm = [...item].reverse();
console.log(itemmm)
console.log(item)

// .slice()     --> from start to end (end not included)
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(1));
console.log(animals.slice(1,4));
console.log(animals.slice(-3));
console.log(animals.slice(2, -1))


// .some()
const even = (element) => element % 2 === 0 ;
console.log(arr12.some(even))

//ex
function isBigger (element) {
  return element > 10;
}
console.log([1,5,8].some(isBigger))

//ex
function checkAvailable(array ,arg ){
     return array.some((current)=> arg === current)
}
console.log(checkAvailable(fruits, "apple"));

// .sort()
const months = ['March', 'Jan', 'Feb', 'Dec'];
console.log(months.sort())
const array12 = [1, 30, 4, 21, 100000];
console.log(array12.sort())