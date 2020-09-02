const express = require("express");
const app = express();
const cors = require("cors");
const passport = require("passport");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const swaggerUi = require("swagger-ui-express");
const YAML = require('yamljs');
const swaggerDocument = YAML.load("./api-docs/swagger.yaml");
const jwt = require("./_helpers/jwt");
const errorHandler = require("./_helpers/errorhandler");
const config = require("./config/constants");
 require("./config/dbconnection");
 

// middleware configurations 
app.use(morgan("dev"));
app.use(jwt());
app.use(cors({
  origin:"*",
  methods:" GET,HEAD,PUT,PATCH,POST,DELETE",
  allowedHeaders:"content-Type, Authorization, Origin XRequested, Accept"
}));
// parse application/x-www-;form-urlencoded
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(passport.initialize());
// app.use(passport.session());



// configure routes--------start

 const userRouter = require("./routes/userRoute");
 app.use(userRouter);
    
 const merchantRouter = require("./routes/merchantRoutes");
 app.use(merchantRouter);

 const adminRouter = require("./routes/adminRoutes");
 app.use(adminRouter);

 const walletRouter = require("./routes/walletRoutes");
 app.use(walletRouter);

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

app.use("/", (req, res, next)=> {
    res.status(200).json({
        message: "welcome to vinebill api"
    })
})
// configure api-docs ----------starts

var options = {
    swaggerOptions: {
      customJs: "/custom.js",
    }
  }
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument, options));

// configure api-docs ------------ends

app.listen(config.PORT, ()=>{
    console.log("server running on port" + " " + config.PORT)
})

module.exports = app;