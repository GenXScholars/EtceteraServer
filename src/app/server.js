const express = require("express");
const app = express();
const router = require("express").Router();
const cors = require("cors");
const compression = require('compression');

const debug = require("debug")("app")
const morgan = require("morgan");
const bodyParser = require("body-parser");
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const swaggerDocument = YAML.load("./swagger.yaml");
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const jwt = require("../_helpers/jwt");
const errorHandler = require("../_helpers/errorhandler");
const config = require("../config/constants");
 require("../config/dbconnection");


// security middlewares
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
// security config


const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 15 minutes
  max: 50 // limit each IP to 50 requests per windowMs
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

// compress all responses
app.use(compression())
// configure routes--------start

 const userRouter = require("./users/userRoute");
 app.use(userRouter);
    
 const merchantRouter = require("./merchants/merchantRoutes");
 app.use(merchantRouter);

 const adminRouter = require("./admin/adminRoutes");
 app.use(adminRouter);

//  const walletRouter = require("../src/app/wallet/User");
//  app.use(walletRouter);

 const cardRouter = require("./credit-cards/cardsRoutes");
 app.use(cardRouter);

 const walletInDbRouter = require("./wallet/User-wallet/wallet-in-Db/walletsInDBRoutes");
 app.use(walletInDbRouter);

//  bills api routes
 const EEDCRouter = require("./electricity-bills/EEDC/EEDCRoutes");
 app.use(EEDCRouter);

 const EKEDCRouter = require("./electricity-bills/EKEDC/EKEDCRoutes");
 app.use(EKEDCRouter);

 const IBEDCRouter = require("./electricity-bills/IBEDC/IBEDCRoutes");
 app.use(IBEDCRouter);

 const IKEDCRouter = require("./electricity-bills/IKEDC/IKEDCRoutes");
 app.use(IKEDCRouter);

//  wace, neco and nabteb apis
 const resultCheckerRouter = require("./result-checker/resultCheckerRoutes");
 app.use(resultCheckerRouter);


 const fundByCardRouter = require("./wallet/fund/Card-Flw/fundWalletByCardRoutes");
 app.use(fundByCardRouter);


//  airtime and data routes

const airtimeRouter = require("./airtime/airtime_ng_Routes");
app.use(airtimeRouter);

const mtnDataRouter = require("./data/mtn-data/mtndataRechargeRoutes");
app.use(mtnDataRouter);

// dstv route

const dstvRouter = require("./cable-tv/DSTV/dstvRoutes");
app.use(dstvRouter);

//  configure routes----------------end


// global error handler
app.use(errorHandler);

app.use("/", (req, res, next)=> {
    res.status(200).json({
        message: "the oficial api of vineBill app"
    })
})
// configure api-docs ----------starts

var options = {
    swaggerOptions: {
      customJs: "/custom.js",
    }
  }
  // router.use("/api-docs", swaggerUi.serve);
  // router.get("/api-docs", swaggerUi.setup(swaggerDocument));

// configure api-docs ------------ends

app.listen( process.env.port || 8080, ()=>{
  console.log("server running on port" + " " + config.PORT)
} );

module.exports = app;