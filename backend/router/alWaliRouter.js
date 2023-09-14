const express = require("express")
const {  addAlWaliData,getAlWaliData, updateAlWaliData, deleteAlWali, getAlWaliDataa, getAlWaliDataDetails } = require("../controller/alWaliController")
const router = express.Router()

router.route("/data").post(addAlWaliData).get(getAlWaliData)
router.route("/data/reverse").get(getAlWaliDataa)
router.route("/data/:id").put(updateAlWaliData).delete(deleteAlWali).get(getAlWaliDataDetails)




module.exports = router 