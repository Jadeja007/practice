//difference between ++x, x++
let x = 3;
for (let i=0; i<10; i++){
    y=++x;
    console.log(y);
}
for (let i=0; i<10; i++){
    y=x++;
    console.log(y);
}