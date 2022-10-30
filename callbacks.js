// create the initial array of posts to display
const posts = [
    { title: 'Post One', body: 'This is post one' },
    { title: 'Post Two', body: 'This is post two' }
]

// This function reads all the posts currently in the array and adds each one
// to the web page as a list item
function getPosts() {
    // initialize the list (table)
    let output = '<h1>Blog Posts</h1><div><table><tr><th style="width: 35%">Title</th><th>Text</th></tr>';
    // loop through the array of posts and add each of them to the list to be displayed
    posts.forEach((post, index) => {
        output += `<tr><td>${post.title}<td>${post.body}</td></tr>`;
    });
    output += '</table></div>'
    // send the list to the web page
    document.body.innerHTML = output;
}

// This functions allows us to add additianal posts to the original array and
// then it calls the  'callback' function (getPosts) to actually send the list 
// to the web page
function createPost(post, callback) {
    posts.push(post);
    callback();
}

// The following lines call the function that adds new posts to the array and includes the
// name of the function (the callbak function, getPosts) that sends the list to the web page.
// The first one does it immediately.  The remaining lines are delayed by 1, 3, and 2
// seconds.  The delay determines the order that each post will be added to the list, which,
//  in this case, because the delay on the line that adds post five waits longer that the delay 
// for post six, should display the sixth post before the fifth.
createPost({ title: 'Post Three', body: 'This is post three' }, getPosts);
setTimeout(() => { createPost({ title: 'Post Four', body: 'This is post four' }, getPosts) }, 1000);
setTimeout(() => { createPost({ title: 'Post Five', body: 'This is post five' }, getPosts) }, 3000);
setTimeout(() => { createPost({ title: 'Post Six', body: 'This is post six, which has ' +
    'shorter timeout than post five, so it should actually show up BEFORE post five. ' +
    'It is also a much longer post so it should cause the text to wrap and show what a post ' +
    'will look like when it is too long to fit on a single line.' }, getPosts) }, 2000);
