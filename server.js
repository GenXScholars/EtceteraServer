const express = require("express");
const app = express();
// security
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");

const morgan = require("morgan");
const bodyParser = require("body-parser");
const swaggerUi = require("swagger-ui-express");
const YAML = require('yamljs');
const swaggerDocument = YAML.load("./api-docs/swagger.yaml");
const jwt = require("./_helpers/jwt");
const errorHandler = require("./_helpers/errorhandler");
const config = require("./config/constants");
 require("./config/dbconnection");
 
// security config

const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 15 minutes
  max: 50 // limit each IP to 100 requests per windowMs
});

app.use(limiter);
app.use(helmet());

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

 const cardRouter = require("./routes/cardsRoutes");
 app.use(cardRouter);

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

  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, options));

// configure api-docs ------------ends

app.listen( process.env.PORT || 3000);

module.exports = app;