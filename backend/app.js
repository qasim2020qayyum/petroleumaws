const express = require("express");
const bodyParser = require('body-parser');
const connectDB = require("./db/conn");
const cors = require("cors")
const env = require("dotenv").config()

const port = process.env.PORT || 6000;

const app = express();

// app.use(express.json())
app.use(bodyParser.json());
app.use(cors());


app.use(express.urlencoded({extended:false}))
connectDB()
app.use("/joiya/pump", require("./router/pumpRouter"))
app.use("/joiya/awanbrothers", require("./router/awanBrothersRouter"))
app.use("/joiya/babafareed", require("./router/babaFareedRouter"))
app.use("/joiya/bhattiPetrolium", require("./router/bhattiPetroliumRouter"))
app.use("/joiya/go09", require("./router/go09Router"))
app.use("/joiya/go45", require("./router/go45Router"))
app.use("/joiya/idFillingStation", require("./router/idFillingStationRouter"))
app.use("/joiya/jahangirPetrolium", require("./router/jahangirPetroliumRouter"))
app.use("/joiya/khalidAndSon", require("./router/khalidAndSonRouter"))
app.use("/joiya/noorPetrolium", require("./router/noorPetroliumRouter"))
app.use("/joiya/alSiddique", require("./router/alSiddiqueRouter"))
app.use("/joiya/nadirFillingStations", require("./router/nadirFillingStationsRouter"))
app.use("/joiya/siaaFillingStation", require("./router/siaaFillingStationRouter"))
app.use("/joiya/alwali", require("./router/alWaliRouter"))
app.use("/joiya/takhatMahal", require("./router/takhatMahalRouter"))

// rate router 
app.use("/joiya/rate/pump", require("./router/RateRouter/rateRouterAliPetrolium"))
app.use("/joiya/rate/awanbrothers", require("./router/RateRouter/rateRouterAwanBrothers"))
app.use("/joiya/rate/babafareed", require("./router/RateRouter/rateRouterBabaFareed"))
app.use("/joiya/rate/bhattiPetrolium", require("./router/RateRouter/rateRouterBhattiPetrolium"))
app.use("/joiya/rate/go09", require("./router/RateRouter/rateRouterGo09"))
app.use("/joiya/rate/go45", require("./router/RateRouter/rateRouterGo45"))
app.use("/joiya/rate/idFillingStation", require("./router/RateRouter/rateRouterIdFillingStation"))
app.use("/joiya/rate/jahangirPetrolium", require("./router/RateRouter/rateRouterJahangirPetrolium"))
app.use("/joiya/rate/khalidAndSon", require("./router/RateRouter/rateRouterKhalidAndSon"))
app.use("/joiya/rate/noorPetrolium", require("./router/RateRouter/rateRouterNoorPetrolium"))
app.use("/joiya/rate/alSiddique", require("./router/RateRouter/rateRouterAlSiddique"))
app.use("/joiya/rate/nadirFillingStations", require("./router/RateRouter/rateRouterNadirFillingStations"))
app.use("/joiya/rate/siaaFillingStation", require("./router/RateRouter/rateRouterSiaaFillingStation"))
app.use("/joiya/rate/alwali", require("./router/RateRouter/rateRouterAlWali"))
app.use("/joiya/rate/takhatMahal", require("./router/RateRouter/rateRouterTakhatMahal"))

// worker router 
app.use("/joiya/worker", require("./router/workerRouter"))
app.use("/joiya/user", require("./router/userRouter"))

app.listen(port, ()=> console.log(`server is running of port ${port}`))



// MONGO_URI = mongodb://127.0.0.1:27017/joiya_petrolium 
// mongodb+srv://qasim20qayyum:qasim2020qayyUM@cluster0.mhruebn.mongodb.net/?retryWrites=true&w=majority    