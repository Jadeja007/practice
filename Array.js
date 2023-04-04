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

// // .flat()
// const arr12 = [1, 2];
// // let result = arr12.flat();
// console.log(typeof(arr12))
// console.log([1,2,3,[4,5]].flat());

// .flatmap()
// const arr21 = [1,2,3];
// console.log(arr21.flatMap(i => i === 2 ? [2,2] : 1))

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


console.log([1,2,3,[4,5]].flat());