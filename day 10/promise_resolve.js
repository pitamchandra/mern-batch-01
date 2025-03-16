Promise.resolve("Immediate success").then((value) => console.log(value));
Promise.resolve(10).then((value) => console.log(value));

// resolve value output korbe

Promise.reject(12).catch(err => console.log(err)).finally(() => console.log("lalala I am finally"))

// reject value output korbe
