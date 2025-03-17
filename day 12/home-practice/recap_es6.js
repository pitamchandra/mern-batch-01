console.log("start");
setTimeout(()=> console.log("timeout function"))
fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => console.log(res))

console.log("end");