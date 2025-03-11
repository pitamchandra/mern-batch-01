let p1 = new Promise((resolve, reject) => setTimeout(() => {
    resolve("task 1 is done")
}, 1200))
let p2 = new Promise((resolve, reject) => setTimeout(() => {
    resolve("task 2 is done")
}, 1000))
let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("task 3 is reject")
    }, 500);
})

Promise.any([p1, p2, p3])
    .then((res) => console.log(res))
    .catch((err) => console.log(err))