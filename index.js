
// fetch("https://jsonplaceholder.typicode.com/posts")
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error("❌ Error:", error));


    const users = {
        name: "pitam",
        email: "email"
    }
    const udpateUser = {
        name: "imran",
        email: "imran@gmail.com",
        phone: "012457"
    }
    console.log({...users, ...udpateUser});