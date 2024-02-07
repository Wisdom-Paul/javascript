// setTimeout
console.log("first");
 
 setTimeout(()=>{
    console.log("second")
 },2000)
console.log("third");
console.log("fourth"); 

//callback
// function greeting (name, callback){
//     console.log(`Hello ${name}`);
//     callback()
// }

// function callbackFunction(){
//     console.log(`i am a callback function`)
// }
// greeting('Nkechi', callbackFunction)

//promise
function greeting (name){
    return new Promise((resolve, rejecct)=>{
        console.log(`Hello ${name}`);
        resolve();
    });
}
function callbackFunction(){
    console.log(`I am a callback function`)
}

greeting(`Nkechi`).then(()=>{
    callbackFunction();
}).catch(error=>{
    console.log("Error", error)
})
