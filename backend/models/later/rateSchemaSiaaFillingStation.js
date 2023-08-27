const mongoose = require("mongoose");

const rateSchema = new mongoose.Schema({
   
    sup_purchase_rate: {
        type: Number,
        required: true,
        default: 0,
    },
    sup_sale_rate: {
        type: Number,
        required: true,
        default: 0,
    },
    
    createdDate: {
        type: Date,
        default: Date.now,
      },

})

module.exports = mongoose.model("siaaFillingStation", rateSchema)