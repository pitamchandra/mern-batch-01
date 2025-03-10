Promise.race([
  new Promise((resolve, reject) => setTimeout(() => reject("Task 1 finished"), 500)),
  new Promise((resolve, reject) => setTimeout(() => resolve("Task 2 finished"), 1000)),
  new Promise((resolve, reject) => setTimeout(() => resolve("Task 4 finished"), 2000)),
  new Promise((resolve,reject) => setTimeout(() => reject("Task 3 rejects"), 100)),
]).then((result) => console.log(result)).catch(err => console.log(err))

// first promise will return.