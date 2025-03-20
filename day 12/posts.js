function loadData(){
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res) => res.json())
        .then((data) => showPosts(data))
}

loadData()

function showPosts(data){
    const postWrapper = document.getElementById('post_container')
    for(post of data){
        console.log(post);
        const singlePost = document.createElement('div')
        singlePost.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.body}</p>
        `
        postWrapper.appendChild(singlePost)
    }
}