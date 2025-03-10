const p1 = new Promise((resolve, reject) => resolve("operation successful"))
const p2 = new Promise((resolve, reject) => resolve("operation successful"))
const p3 = new Promise((resolve, reject) => resolve("operation fail"))

Promise.all([p1,p2,p3])
    .then(result => console.log(result))
    .catch((err) => console.log(err))
    .finally(()=> "done")

// if any result come fail, all will print fail result

// first reject will print