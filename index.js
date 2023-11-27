
const mongoose = require('mongoose')
const path = require('path');
const fs = require('fs');
const express = require('express');
const ejs = require('ejs'); //embedded javascript
const  BlogPost = require('./models/BlogPost.js');
const { error } = require('console');
const app = express();
const PORT = 3000;


//define mongoose connection
mongoose.connect('mongodb://localhost/my_database',{useNewUrlParser:true})

//const homePage = fs.readFileSync('index.html');
app.set('view engine', 'ejs') 
//app.use(express.static('pages'))
app.use(express.static('public'))
app.use(express.json());
app.use(express.urlencoded());

// app.get('/',(req,res)=>{
//     res.render('index');
// })

// app.get('/',(req,res)=>{
//     res.sendFile(path.resolve(__dirname,'pages/index.html'))
//     })
app.get('/about',(req,res)=>{
    res.render('about');
});
app.get('/contact',(req,res)=>{
    res.render('contact');
}); 
app.get('/post/:id',async (req,res)=>{
    const blogpost = await BlogPost.findById(req.params.id)
    res.render('post',{blogpost});
});

app.get('/posts/new',(req,res)=>{
    res.render('create')
});

app.post('/posts/store', async(req,res)=>{
    console.log(req.body)
    console.log(req.body.title);
    // try{
        await BlogPost.create(req.body)
        res.redirect('/');
    // } catch(err){
    //     console.error('Error creating blog post', err);
    //     res.status(500).send('Internal Server Error')

    //}
});

// app.get('/', async (req,res)=>{
//     try{
//         blogposts = await BlogPost.find({title:/Test/})
//         res.render('index',{blogposts})

//     }catch(err){
//         console.error('Error finding posts')

//     }
    
// })

app.get('/', async (req,res)=>{
    const blogposts = await BlogPost.find({})
   // console.log(blogposts);
    res.render('index',{
        blogposts:blogposts
    });
});



app.listen(PORT,()=>{
    console.log(`App listening on port ${PORT}`)
})