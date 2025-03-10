Promise.any([
    // new Promise((resolve, reject) => setTimeout(() => resolve("task 1 is completed"), 500)),
    new Promise((resolve, reject) => setTimeout(() => reject("task 2 is reject"))),
    new Promise((resolve, reject) => setTimeout(() => reject("task 2 is reject"))),
    // new Promise((resolve, reject) => setTimeout(() => resolve("task 3 is completed"))),
])
.then((resolve) => console.log(resolve))
.catch((err) => console.log(err))


// first resolve print korbe

