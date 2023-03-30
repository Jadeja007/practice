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

//Async & await
function resolveAfter2Sec(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve('resolved')
        },2000)
    })
}

async function callback(){
    console.log("Calling");
    const result = await resolveAfter2Sec();
    console.log(result);
}

callback();