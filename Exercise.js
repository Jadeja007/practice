// function fibonacci(num) {
//   if (num < 2) return [0];
//   else {
//     var arr = fibonacci(num - 1);
//     arr.push((arr[arr.length - 1] + arr[arr.length - 2]) || 1);
//     return arr;
//   }
// }
// console.log(fibonacci(2));

// //Ex1
// const data = new Date();
// const dayInWords = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ]

// const month = data.getMonth();
// const day = data.getDate();
// const dayLong = data.getDay()
// const minutes = data.getMinutes();
// const seconds = data.getSeconds();
// const hours = data.getHours();

// function clock(){

// let temp = String(hours % 12);
// if (temp === "0"){
//     temp = "12";
// }

// temp += (hours < 12 ? "PM" : "AM");
// temp += (minutes<10 ? ":0" : ":") + minutes;
// temp += (seconds<10 ? ":0" : ":") + seconds;

// return temp

// }

// console.log(`Today is: ${dayInWords[dayLong]}`);
// console.log(`Current time is : ${clock()}`)

// console.log(new Intl.DateTimeFormat("en-US", {dateStyle: "full"}).format(data))

// //Ex2
// console.log(prompt("valye"))

// Fibonacci 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144
// let a = 0;
// let b = 1;
// const arr = [a , b]

// function fib(num){
//     for (let i =0; i<(num-2) ; i++){
//         c = a+b;
//         a = b ;
//         b = c ;

//         arr.push(b);

//     }
//     // console.log(arr);
//     return arr;
// }

// console.log(fib(15));

// Fibonacci 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144


// const array = [];
//                                     // f(3) = f(2) + f(1)     f(2) = f(1) + f(0)
// function feb(n){
//     if(n<=1){
//         return n;
//     }
// //    const result = feb(n-1) + feb(n-2);
// //    console.log(result)
//    return feb(n-1) + feb(n-2)
// }


// for (let i=0; i<10 ;i++){
//     // console.log("x",feb(i))
//     array.push(feb(i))
// }
// console.log(array)

const array = [];
function fibon(n){
    if(n < 2){
        console.log("x",n)
        return array[n] = n;
    }
    const data = (fibon(n-1)+ fibon(n-2));
    console.log("y", n)
    console.log(array)
    return array.push(data);
}

console.log("final" , fibon(3));
console.log(array);


