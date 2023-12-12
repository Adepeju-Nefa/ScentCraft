
const mongoose = require('mongoose')
//const path = require('path');
const fs = require('fs');
const express = require('express');
const ejs = require('ejs'); //embedded javascript
//const  BlogPost = require('./models/BlogPost.js');
const fileUpload = require('express-fileupload')
const { error } = require('console');
const expressSession = require('express-session');


const app = express();
const PORT = 3000;
global.loggedIn = null;

//define mongoose connection
mongoose.connect('mongodb://localhost/my_database',{useNewUrlParser:true})

//const homePage = fs.readFileSync('index.html');
app.set('view engine', 'ejs') 
app.use(expressSession({
    secret: 'keyboard pet',
    resave: false,
    saveUninitialized: true,

}));

//app.use(express.static('pages'))
app.use(fileUpload())
app.use(express.static('public'))
app.use(express.json());
app.use(express.urlencoded());


app.use("*", (req,res,next)=>{
    // console.log("Setting loggedIn:", req.session.userId);
    loggedIn = req.session.userId;
    next()
});




// app.get('/',(req,res)=>{
//     res.render('index');
// })

// app.get('/',(req,res)=>{
//     res.sendFile(path.resolve(__dirname,'pages/index.html'))
//     })



//app.use('/posts/store', validateMiddleWare)
const newPostController = require('./controllers/newPost')
const aboutController = require('./controllers/about')
const contactController = require('./controllers/contact')
const postController = require('./controllers/post')
const homeController = require('./controllers/home')
const storePostController = require('./controllers/storePost')
const getPostController = require('./controllers/getPost')
const newUserController = require('./controllers/newUser')
const storeUserController = require('./controllers/storeUser')
const loginController = require('./controllers/login')
const loginUserController = require('./controllers/loginUser')
const logoutController = require('./controllers/logout')

const validateMiddleWare = require('./middleware/validationMiddleware')
const authMiddleware = require('./middleware/authMiddleware')
const redirectIfAuthenticatedMiddleware = require('./middleware/redirectIfAuthenticated')


app.get('/', homeController)
app.get('/post/:id', getPostController)

app.get('/posts/new',authMiddleware, newPostController)
app.get('/post/store',authMiddleware, storePostController)


app.get('/auth/register', redirectIfAuthenticatedMiddleware, newUserController)
app.post('/users/register',redirectIfAuthenticatedMiddleware, storeUserController)
app.get('/auth/login',redirectIfAuthenticatedMiddleware, loginController)
app.post('/users/login', redirectIfAuthenticatedMiddleware, loginUserController)

app.get('/auth/logout', logoutController)
// app.post('post/store',  storePostController)

app.get('/posts', postController)
app.get('/contact', contactController)
app.get('/about', aboutController)

app.use((req,res)=>res.render('notfound'));


// app.get('/post/:id',async (req,res)=>{
//     const blogpost = await BlogPost.findById(req.params.id)
//     res.render('post',{blogpost});
// });
// const newPostController = require('./controllers/newPost')
// app.get('/posts/new', newPostController)


// app.post('/posts/store', async(req,res)=>{
//     let image = req.files.image;
//     image.mv(path.resolve(__dirname,'public/img',image.name), async (error)=>{
//         await BlogPost.create({
//             ...req.body, 
//             image:'/img/'+image.name
//         })
       
//         res.redirect('/');
//        })
// });



// app.get('/contact',(req,res)=>{
//     res.render('contact');
// }); 


// app.get('/posts/new',(req,res)=>{
//     res.render('create')
// });

// app.get('/about',(req,res)=>{
//     res.render('about');
// });


    // console.log(req.body)
    // console.log(req.body.title);
    // try{
       
    // } catch(err){
    //     console.error('Error creating blog post', err);
    //     res.status(500).send('Internal Server Error')

    //}

// app.get('/', async (req,res)=>{
//     try{
//         blogposts = await BlogPost.find({title:/Test/})
//         res.render('index',{blogposts})

//     }catch(err){
//         console.error('Error finding posts')

//     }
    
// })

// app.get('/', async (req,res)=>{
//     const blogposts = await BlogPost.find({})
//    // console.log(blogposts);
//     res.render('index',{
//         blogposts:blogposts
//     });
// });



app.listen(PORT,()=>{
    console.log(`App listening on port ${PORT}`)
})