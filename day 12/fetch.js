function loadData(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => showUsers(data))
}

function showUsers(users){
    const ul = document.getElementById('user_list')
    for(user of users){
        console.log(user.email);
        const li = document.createElement('li')
        li.innerText = user.email
        ul.appendChild(li)
    }
}


