const express = require("express")
const {getRate, postRate, updateRate, getRateDetails} = require("../../controller/RateController/rateControllerGo09")
const router = express.Router()

router.route("/").get(getRate).post(postRate)

router.route("/:id").put(updateRate).get(getRateDetails)
 

module.exports = router