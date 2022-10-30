const posts = [
    {title: 'Post One', body: 'This is post one'},
    {title: 'Post Two', body: 'This is post two'}
]

function getPosts() {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}: &nbsp;&nbsp;&nbsp;${post.body}</li>`;
        });
        document.body.innerHTML = output;
}

function createPost(post, callback) {
        posts.push(post);
        callback();
}

createPost({ title: 'Post Three', body: 'This is post three'}, getPosts);
setTimeout(() => {createPost({ title: 'Post Four', body: 'This is post four'}, getPosts)}, 1000);
setTimeout(() => {createPost({ title: 'Post Five', body: 'This is post five'}, getPosts)}, 3000);
setTimeout(() => {createPost({ title: 'Post Six', body: 'This is post six'}, getPosts)}, 2000);
