//difference between ++x, x++
// let x = 3;
// for (let i=0; i<10; i++){
//     y=++x;
//     console.log(y);
// }
// for (let i=0; i<10; i++){
//     y=x++;
//     console.log(y);
// }

//Assignment operator
const obj = {};
obj.x = 3;

console.log(obj)
const key = "y";
obj[key] = 5;

console.log(obj)

//Bitwise Operator
const a=10;
const b=11;
console.log("bitwise",a&b);

//Short Circuit
function A(){
    console.log("called A")
    return false;
}
function B(){
    console.log("called B");
    return true
}
console.log("SC", A() && B() )
