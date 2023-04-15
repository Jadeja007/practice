//  https://www.w3resource.com/javascript-exercises/
//1. factorial
function factorial(num) {
  // let fact = 1;
  // for (let i=1; i<=num; i++) {
  //     fact *= i;
  //     console.log(fact);
  // }
  // return fact

  //--->
  // for (let i = 1; i <= num; i++) {
  //   fact = fact * i;
  // }
  // return fact

  //-->
  if (num < 2 && num >= 0) {
    return num;
  } else {
    return num * factorial(num - 1);
  }
}
console.log(factorial(5));

//2.
var gcd = function(a, b) {
  if ( ! b) {
      return a;
  }
  console.log(a,b)
  return gcd(b, a % b);
};
console.log("gcd",gcd(360, 336));


//3.get the integers in range (x, y)
function rangeXY(n1, n2) {
  //-->
  // if (n1 < n2) {
  //   for (let i=n1+1; i<n2; i++ ) {
  //     arr.push(i)
  //   }
  // }

  //-->
  if (n2 - n1 === 2) {
    return [n1 + 1];
  } else {
    const list = rangeXY(n1, n2 - 1);
    console.log("before",list)
    list.push(n2 - 1);
    console.log(list)
    return list;
  }

  // console.log(arr)
}
console.log(rangeXY(3, 8));


//4. compute the sum of an array of integers.
function sumArr(arr) {
  // let sum = 0;
  // for (let i=0; i < arr.length; i++) {
  //   sum = sum + arr[i]
  // }
  // return sum

  //-->
  if (arr.length === 1) {
    return arr[0];
  } else {
    return arr.pop() + sumArr(arr)
  }
}
console.log(sumArr([1,2,3]))

//5. compute the exponent of a number.
function exponentNum(b, n) {
  if(n === 1) {
    return b;
  } else if (n === 0) {
    return 1;
  } else if (n < 0) {
    console.log("Power should be positive number")
  } else {
    return b * exponentNum(b, n-1);
  }
}
console.log(exponentNum(4, 4));

//6. first n Fibonacci numbers.
// function fibonac(num) {
//   if (num === 0 || num === 1) {
//     return [0,1]
//   } else {

//   }
// }
// console.log(fibonac(5));

//7. a number is even or not.
function evenOdd(num) {
     num % 2 === 0
}
console.log(evenOdd(6));

//8. palidrome
function palidrome(str) {
  // const str1= str.substring(0, str.length/2);
  // const str2 = str.substring(Math.round(str.length/2)).split("").reverse().join("")
  // if (str1 === str2) {
  //   return true;
  // } else {
  //   return false
  // }

  // return (str.substring(0, str.length/2) === str.substring(Math.round(str.length/2)).split("").reverse().join(""))

  //-->
  if (str.length === 1) {
    return true;
  } else if (str.length === 2) {
    return ([str[0]] === str[1])
  } else if (str[0] === str.slice(-1)) {
    return palidrome(str.slice(1, -1))
  }

}
console.log(palidrome("aadaa"));

//9. 
let i = 0;
do {
  i += 1;
  console.log("x", i);
} while (i < 5);

//arr1 subset of arr2
function isSbuset(arr2, arr1) {
  return arr1.every(element => arr2.includes(element))
}
console.log(isSbuset([1, 2, 3, 4, 5, 6, 7], [5, 7, 6]));

//isPrime
const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
function isPrime(num) {
  for (let i=2; i<num; i++) {
    if (num%i === 0) {
      return false
    }
  }
  return num > 1;
}
console.log(array.filter(isPrime));

//
const arx = [1, 2, 3];
// console.log(ar.reverse().entries().next());
console.log(arx.entries().next().value);
