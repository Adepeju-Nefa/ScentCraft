

const path = require('path');
const fs = require('fs');
const express = require('express');
const ejs = require('ejs'); //embedded javascript
const app = express();
const PORT = 3000;



//const homePage = fs.readFileSync('index.html');
app.set('view engine', 'ejs') 
//app.use(express.static('pages'))
app.use(express.static('public'))

app.get('/',(req,res)=>{
    res.render('index');
})

// app.get('/',(req,res)=>{
//     res.sendFile(path.resolve(__dirname,'pages/index.html'))
//     })
app.get('/about',(req,res)=>{
    res.render('about');
});
app.get('/contact',(req,res)=>{
    res.render('contact');
});
app.get('/post',(req,res)=>{
    res.render('post');
})


app.listen(PORT,()=>{
    console.log(`App listening on port ${PORT}`)
})