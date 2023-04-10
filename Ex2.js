const INPUT = {
    classA: [1, 2, 3],
    classB: [4, 5, 6],
  };

//   OUTPUT :- {
//     '1': 'classA',
//     '2': 'classA',
//     '3': 'classA',
//     '4': 'classB',
//     '5': 'classB',
//     '6': 'classB'
//   }
const ans = {};

for (const key in INPUT) {
    // console.log(key)
    const values = INPUT[key];
    // console.log(values);
    for (const value of values) {
    //   console.log(value);
    // console.log(ans[value] = key)
      ans[value] = key;
}
}
console.log(ans)
