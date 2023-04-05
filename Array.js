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

const a11= ["a", "b", "c"];

for (const [elem, index] of a11.entries()){
    console.log(`element: ${elem} , Index: ${index}`)
}

for (const element of a11.entries()){
    console.log(element)
}

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

// .flatmap()   ->> it takes callbackFn & Arg
const arr21 = [1,2,3];
console.log(arr21.flatMap(i => i === 2 ? [2,2] : 1))

// console.log([1, 2].flatMap((i)=> i*2), "FlatMap")

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


// .reduce()  ==>  Replace with .filter().map()
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

console.log("slice", animals.slice(1));
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

// .splice() --> this method will change initial Array   --Here we can add and delete array elements
const month = ['Jan', 'March', 'April', 'June'];
// console.log(month.splice(3));
// const dd = month.splice(1, 2, 'Feb')
const dd1 = month.splice(1, 2)
console.log(month)

// .fill()  ==>fill(value) /  fill(value, start)  /  fill(value, start, end)  --> this method will change initial Array

const data = [2,3,4,5,6,7]
// console.log( data.fill(5));
// console.log(data.fill(2, 2,5))
console.log(data.fill(10, -3, -1))
console.log(data)


// .find() 
//const ar1 = [15, 16, 17, 18, 19];
console.log(ar1.find((item)=>item < 19));

//ex
const inventory = [
  { name: "apples", quantity: 2 },
  { name: "fish", quantity: 1 },
  { name: "bananas", quantity: 0 },
  { name: "cherries", quantity: 5 },
];

function isCherries(fruits){
  return fruits.name === "cherries"
}
console.log(inventory.find(isCherries))

console.log(inventory.find(({name}) => name === "cherries"));  //-->By arrow Fn

//ex
const arrayfind = [0, 1, , , , 5, 6];

arrayfind.find((elem, index) => console.log(`visited index ${index} its value ${elem}`))

arrayfind.find((elem, index) => {
  if (index === 0){
    console.log("Deleting array[5]");
    delete arrayfind[5];
  }
  console.log(`visited index ${index} its value ${elem}`);
})


//findIndex()
console.log(ar1.findIndex(x => x > 15));
console.log([1,2, ,3].findIndex(x => x===undefined))

//findLast()   -->method iterates the array in reverse order 
console.log(ar1.findLast(x => x>15));
function findData(item){
 return item.quantity < 2;
}
console.log(inventory.findLast(findData))

//findLastIndex()
console.log(ar1.findLastIndex( x => x>15))

// .includes()   -> includes(searchElement)  /  includes(searchElement, fromIndex)
console.log(ar1.includes(15));
console.log(months.includes("Jan"));

console.log([1, 2, 3].includes(2));
console.log([1, 2, 3].includes(2, 1));
console.log([1, 2, 3].includes(3, -2));  //--> for < 0 value entire array will be check
console.log((["1", "2", "3"]).includes(2));

// join()
console.log(months.join());
console.log(months.join(''));
console.log(months.join('^'))

//keys()
console.log(Object.keys(ar1))
console.log(Object.keys([1, ,3]));
const den = [1, ,3, ,5];
console.log([...den.keys()]) 

// .toLocaleString()
const ary = [1, 'a', new Date('21 Dec 1997 14:12:00 UTC')];
console.log(ary.toLocaleString("en-US", { timeZone: 'UTC' }))

const prices = ["￥7", 500, 8123, 12];
console.log(prices.toLocaleString("ja-JP", { style: "currency", currency: "JPY" }));

console.log([1, ,3].toLocaleString())

// .pop()
const mnth = [...months]
console.log(mnth.pop())
console.log(mnth);
console.log(mnth.pop())
console.log(mnth);
console.log(months)


// .push()    -> Return new array length & change initial array
console.log(["1", "3"].push(['2']));

// .shift()  -> Return delete first element & change initial array
console.log([6,8,2,3,].shift())

