function printData(num) {
    // console.log((num))

    const newNum = num - 1;

    if(newNum > 0){
        printData(newNum)
        console.log(newNum)
    }

}

printData(5);