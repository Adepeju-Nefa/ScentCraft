const mongoose = require('mongoose');
const BlogPost = require('./models/BlogPost');

mongoose.connect('mongodb://localhost:27017/my_database',{useNewUrlParser:true});

try{
    BlogPost.create({
        title: 'This is my test Blog',
        body: 'So many things to write about. Where do we start? The world is a big big place full of mysteries, love and life. What a joy it would be to explore it all try and embark on this journey with me'
    });
    console.log('Blog post created', BlogPost);
} catch(error){
    console.error('Error creating blog post:', error);
}

const promise = new Promise((resolve, reject)=>{
    BlogPost.find({
        title: 'This is my test Blog'
    })
    resolve('Blog post found');
})

promise
    .then((result)=>{
        console.log(result);
    })
    .then((error)=>{
        console.error(error)
    });


//     <div class="post-preview">
//     <a href="/post.html"><h2 class="post-title">I believe every human has a finite number of heartbeats. I don't intend to waste any of mine.</h2></a>
//     <p class="post-meta">
//         Posted by
//         <a href="#!">Start Bootstrap</a>
//         on September 18, 2023
//     </p>
// </div>
// <!-- Divider-->
// <hr class="my-4" />
// <!-- Post preview-->
// <div class="post-preview">
//     <a href="/post.html">
//         <h2 class="post-title">Science has not yet mastered prophecy</h2>
//         <h3 class="post-subtitle">We predict too much for the next year and yet far too little for the next ten.</h3>
//     </a>
//     <p class="post-meta">
//         Posted by
//         <a href="#!">Start Bootstrap</a>
//         on August 24, 2023
//     </p>
// </div>
// <!-- Divider-->
// <hr class="my-4" />
// <!-- Post preview-->
// <div class="post-preview">
//     <a href="/post.html">
//         <h2 class="post-title">Failure is not an option</h2>
//         <h3 class="post-subtitle">Many say exploration is part of our destiny, but it’s actually our duty to future generations.</h3>
//     </a>
//     <p class="post-meta">
//         Posted by
//         <a href="#!">Start Bootstrap</a>
//         on July 8, 2023
//     </p>
// </div>
// Divider