const express = require("express")
const {  addTakhatMahalData,getTakhatMahalData, updateTakhatMahalData, deleteTakhatMahal, getTakhatMahalDataa, getTakhatMahalDataDetails } = require("../controller/takhatMahalController")
const router = express.Router()

router.route("/data").post(addTakhatMahalData).get(getTakhatMahalData)
router.route("/data/reverse").get(getTakhatMahalDataa)
router.route("/data/:id").put(updateTakhatMahalData).delete(deleteTakhatMahal).get(getTakhatMahalDataDetails)




module.exports = router 