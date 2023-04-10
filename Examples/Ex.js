//
var student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12,
};

console.log(Object.keys(student));

delete student.rollno;

console.log(student);
console.log(Object.keys(student).length);

//
var library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];

//    console.log(library.map(item => `Author: ${item.author} /n Titile: ${item.title} \n Reading Status: ${item.readingStatus}`));

 library.forEach(item => {
    const book = ' " '+ (item.title) + '" by' + item.author
    if (item.readingStatus === true){
        console.log("already read" + book)
    }else{
        console.log("you still need to read" + item.author)
    }
 })

 //
//  const radius = 3;
//  const height = 5;



 function cube(radius, height){
    const equation = Math.PI * radius * radius * height;
    return equation.toFixed(4)
 }
 console.log(cube(3, 5))

// sort()
const Data = [6,4,0, 3,-2,1];
console.log(Data.sort());

//
const str = "dog"
console.log(str.split(""))
const arr = [];

function subString(str){

    for (let i = 0; i < str.length ; i++){

        for (let j= i+1 ; j < str.length+1; j++){
            return arr.push(str.slice(i, j))
        }
    }
}
console.log(arr)

//clock
const date = new Date();
const hours = date.getHours();
const min = date.getMinutes()
const sec = date.getSeconds()


function dateFn(){
    const dat = new Date;
    console.log(' "'+ dat.toLocaleTimeString('it-IT') + '"')
 
}

// const set = () => {setInterval(dateFn, 1000)};
// setInterval(dateFn, 1000);

//
function area(radius){
    const A = Math.PI * radius * radius;
    const P = Math.PI * 2 * radius
console.log( ` Area: ${A.toFixed(2)}`)
console.log(`Perimeter: ${P.toFixed(2)}`)
}

area(3)

//
var lib = [ 
    {
        title:  'The Road Ahead',
        author: 'Bill Gates',
        libraryID: 1254
    },
    {
        title: 'Walter Isaacson',
        author: 'Steve Jobs',
        libraryID: 4264
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        libraryID: 3245
    }];

//   const Ans =   lib.forEach(Object.keys(lib)).sort()
// console.log(Ans);

//
const s = "Hello World";

function last(s){
    const string = s.trim();
    const lastWord = s.split(" ")
    // console.log(lastWord)
    return lastWord.length
}
// console.log(last("Hello World"));

const str1 = ["1", "2", "3", "4"]
// console.log("x", str1.length)
// console.log(str1[3]);
// console.log(str1[str1.length - 2])

// function add(str1){
//     // console.log(str1.length);
//     const datax = str1[str1.length - 1]
//     const ans = parseInt(datax) + 1
//     // return str1.push();
//     return str1[str1.length - 1] = str1.push(ans)
// }

// console.log(add(str1))
// console.log(str1)

const str2 = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]
function add(str2){
    const first = BigInt(str2.join(""));
    console.log(first);
    const fn = (first + BigInt(1)).toString();
    console.log(fn)
    const last = fn.split("")
    console.log(last)

}

add(str2);

// reverse string
const strr = "w3resource"

console.log(strr.split('').reverse().join(""));

// leap year
function leapYear(n){
    ((n % 4 === 0 && n % 100 !== 0) || (n%400 === 0)) ? console.log("It is a leap Year") : console.log("It is not a leap Year") 
}
leapYear(2018);

//

function isSunday(){
    
    for(let year=2014; year <= 2050; year++ ){
        const janDay = new Date(year, 0,1).toLocaleDateString('en-US', {weekday: "long"})
      if(janDay === "Sunday"){
        console.log(`sunday january in ${year}`)
      }
    }
}
isSunday();

//F
function fahrenheit(c){
    return (1.8 * c ) + 32;
}
console.log(fahrenheit(60));

//differnce
function checkNum(n){
    if(n > 13){
        const diff = n -13;
        return 2*diff
    }
    if(n <= 13){
        return 13-n;
    }
}
console.log(checkNum(10))

//18
function check50(n1, n2){
    if( (n1 == 50 || n2 == 50)){
        console.log(n1, n2)
        return true;
    }
    if(((n1 + n2 ) == 50)){
        return true
    }
    else{
        return false
    }
}
console.log(check50(25, 30));

//

// console.log(removestr.charAt(1))
function removestr( str , n){
    return (str.substring(0, n)) + (str.substring(n+1, str.length))
}
console.log(removestr("w3resources", 1));
// removestr("w3resources", 1)