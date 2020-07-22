const express = require('express');
const app = express();
const cors = require('cors');
const passport = require('passport');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const JWT = require('jsonwebtoken');
const jwt = require('./_helpers/jwt');
const errorHandler = require('./_helpers/errorhandler');
const config = require('./config/constants');
 require('./config/dbconnection');
 

// middleware configurations 
app.use(morgan('dev'));
app.use(jwt());
app.use(cors());
// parse application/x-www-;form-urlencoded
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(passport.session());



// configure routes--------start
 const userRouter = require('./routes/userRoute');
 app.use(userRouter);


//  configure routes----------------end


// global error handler
app.use(errorHandler);
// app.use('/', (req, res)=>{
//     console.log(JWT);
//      res.json(
//          {
//              message :"I am the home page",
            
//          }
//      )
// })


app.listen(config.PORT, ()=>{
    console.log("server running on port" + " " + config.PORT)
})

module.exports = app;