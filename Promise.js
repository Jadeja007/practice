//Promise
// new Promise((resolve, reject)=> {
//     console.log("Initial");
//     reject();
// }).then(() => {

//     throw new Error("Something Failed");
//     console.log("Do this")
// }).catch(()=>{
//     console.error("Do that")
// }).then(()=>{
//     console.log("Run anyway")
// })

// Async & await
// function resolveAfter2Sec(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve('resolved')
//         },2000)
//     })
// }

// async function callback(){
//     console.log("Calling");
//     const result = await resolveAfter2Sec();
//     console.log(result);
// }

// callback();


//Async functions and execution order
function resolveAfter2Sec(){
    console.log("starting slow promises");
    return new Promise(resolve => {
        setTimeout(()=>{
            resolve('slow');
        console.log("slow promise is done");
        }, 2000)
        
    })
}

function resolveAfter1Sec(){
    console.log("starting fast promises");
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve('fast');
            console.log("fast promise is done");
        }, 1000)
    })
}

async function sequentialStart(){ //Work accordingly to sequences
    console.log("-SEQUENTIAL START-");

    const slow = await resolveAfter2Sec();
    console.log("slow");

    const fast = await resolveAfter1Sec();
    console.log("fast");
}

async function concurrentStart(){ //both start at the same time but results get accordingly to await order
    console.log("=CONCURRENT START with await=");

    const slow = resolveAfter2Sec();
    const fast = resolveAfter1Sec();

    console.log("CCS",await slow);
    console.log("CCS",await fast)
}

async function concurrentPromise(){   //sequences are not followed here
    console.log("=CONCURRENT START with Promise.all=")
    return Promise.all([resolveAfter2Sec(), resolveAfter1Sec()]).then(
        (message) => {
        console.log(message[0]);
        console.log(message[1]);
    })
}

async function parallel(){
    console.log("=PARALLEL with await Promise.all=")

    await Promise.all([                 //here 2 async separate function are used so it will run separatlly
        (async () => console.log(await resolveAfter2Sec()))(),
        (async () => console.log(await resolveAfter1Sec()))(),
    ])
}

// console.log(sequentialStart());
// console.log(concurrentStart());
// console.log(concurrentPromise());
// console.log(parallel())

sequentialStart();
setTimeout(concurrentStart, 4000);
setTimeout(concurrentPromise, 7000);
setTimeout(parallel, 10000);