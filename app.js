const express = require('express');
const app = express();
const passport = require('passport');
const { connection } = require('mongoose');
 require('./config/dbconnection');



// middleware config
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(require('express-session')({
     secret: 'keyboard cat',
      resave: true, 
      saveUninitialized: true}));
app.use(passport.initialize());
app.use(passport.session());
const port = process.env.PORT || 3070;


app.use('/', (req, res)=>{
    console.log(passport);
    console.log(req.session);
     res.status(200).json(
         {
             message :"I am the home page"
         }
     )
})


app.listen(port, ()=>{
    console.log("server running on port" + " " + port)
})