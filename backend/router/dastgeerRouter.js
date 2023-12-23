const express = require("express")
const {  addDastgeerData,getDastgeerData, updateDastgeerData, deleteDastgeer, getDastgeerDataa, getDastgeerDataDetails } = require("../controller/dastgeerController")
const router = express.Router()

router.route("/data").post(addDastgeerData).get(getDastgeerData)
router.route("/data/reverse").get(getDastgeerDataa)
router.route("/data/:id").put(updateDastgeerData).delete(deleteDastgeer).get(getDastgeerDataDetails)




module.exports = router 