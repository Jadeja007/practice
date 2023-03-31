//INPUT - 1234234128  -->  O/P - 135765…   (INPUT as ARRAY)

// const IP = [1,2,3,4,2,3,4,1,2,8];
// const result = []


// for(let i=0; i<IP.length; i++){
//     result[i] = IP[i] + (IP[i-1] ? IP[i-1] : 0);
// }

// console.log(result)

//INPUT - 1234234128  -->  O/P - 135765753…   (INPUT as STRING)
const IP = "1234234128";
const result = []


const first = +IP.charAt(0);
const second = +IP.charAt(1);

for(let i=0; i < IP.length; i++){
     result.push(+IP.charAt(i) + +IP.charAt(i-1))
}

// console.log(first)
const OP = result.toString()
console.log(OP);

//Short code
const ANS = IP.split('').map((b, i) => +b + (+IP[i-1] || 0)).join();
console.log(ANS)