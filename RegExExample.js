const data = 'Find me';
const pattern = /me/

const result = data.search(pattern);
console.log(result);

console.log(data.replace(pattern , "you"));

const regex = /[\s,]+/;
const data1 = "Hello World! ".split(regex)
console.log(data1)

const regex2 = /(\d{3})\D(\d{3})-(\d{4})/g;
const data2 = regex2.exec("Number is: 555 123-5687.")
console.log(data2)

//Example
const string = 'Hello hello hello';

// performing a replacement
console.log(string.replace(/hello/, "world"));

// performing global replacement
console.log(string.replace(/hello/g, "world"))

// performing case-insensitive replacement
console.log(string.replace(/hello/i, "world"));

// performing global case-insensitive replacement
console.log(string.replace(/hello/gi, "world"));
