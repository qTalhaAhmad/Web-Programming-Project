const express = require('express');
const app = express();
const mongoose= require('mongoose');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

// import toutes
const postsRoute = require('./routes/posts');
const userRoute = require("./routes/user");
const productRoute = require("./routes/product");
const adminRoute = require("./routes/admin");



app.use('/posts',postsRoute);
app.use('/user', userRoute);
app.use('/product', productRoute);
app.use('/admin', adminRoute);


const db='mongodb://localhost:27017/project'

// Routes
//app.get('/',(req,res)=>{
  //  res.send('we are on home');
//});

//app.get('/posts',(req,res)=>{
    //res.send('we are on posts');
//});

mongoose.connect(db);
const con = mongoose.connection
con.on('open',function()
{
console.log('connected')
});
//listening
app.listen(3000);