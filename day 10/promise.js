let promise = new Promise((resolve, reject) =>{
    let success = true;
    setTimeout(()=>{
        if(success){
            resolve("How are you all?")
        }
        else{
            reject("this operation is fail")
        }
    }, 2000)
})
promise
    .then((success) => console.log(success))
    .catch((err)=> console.log(err))
    .finally(()=>console.log("Good Bye"))



console.log("hello programmers");