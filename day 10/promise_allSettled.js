Promise.allSettled([
    new Promise((resolve, reject) => resolve("this is done")),
    new Promise((resolve, reject) => resolve("this is done")),
    new Promise((resolve, reject) => reject("error"))
]).then((res) => console.log(res))