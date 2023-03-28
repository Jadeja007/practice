//factorial
// const factorial = function fac(n){
//     return (n < 2) ? 1 : (n*fac(n-1))
// }

// console.log(factorial(5))

//Cube by passing function and Array

const number = [0,1,2,5,10];
const cube = cal(f, number)

function f(x){
    return x*x*x;
}

function cal(f,a){
    const result = new Array(a.length);
    for (let i=0; i<a.length; i++){
    
        result[i] = f(a[i]);
    }
    return result
}

console.log(cube)

