const Pump = require("../models/go09")



exports.addGo09Data = async (req, res) => {
  // let rateData = await Rates.find()
  let pumpData = await Pump.find()
  // last readings

  if (pumpData.length === 0) {
    const {
      // nosels 
      sup1_currentReading, sup2_currentReading, hsd1_currentReading, hsd2_currentReading,
      // get super and hsd rate 
      sup_purchase_rate, sup_sale_rate, hsd_purchase_rate, hsd_sale_rate,
      // recieving 
      creditWasoli, lubricants, tucShop, cashFromOtherPumps,
      // payment 
      psoCard, HBLCard, bankDeposit, psoPayment, advanceSalary, creditPayment , miscPayment2,
      // expense 
      miscPayment, miscOther, lastReadingSup1, lastReadingSup2, preClosing, lastReadingHsd1, lastReadingHsd2
    } = req.body;




    // date 
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    const createdDate = `${day} ${month}, ${year}`


    if (
      // nosels 
      !sup1_currentReading || !sup2_currentReading || !hsd1_currentReading || !hsd2_currentReading
    ) {
      return res.status(400).send({
        message: "Please fill all the nosels",
      });
    }
    try {
      // computer sale calculation 
      // petrol 
      let comSaleSup1 = sup1_currentReading - lastReadingSup1;
      let comSaleSup2 = sup2_currentReading - lastReadingSup2;
      // diesal 
      let comSalehsd1 = hsd1_currentReading - lastReadingHsd1;
      let comSalehsd2 = hsd2_currentReading - lastReadingHsd2;

      // sale amount calculations
      let allSupComSale = comSaleSup1 + comSaleSup2;
      let allHsdComSale = comSalehsd1 + comSalehsd2;

      // sup Sale Amount
      let supSaleAmount = allSupComSale * sup_sale_rate;
      let supPurchaseAmount = allSupComSale * sup_purchase_rate;
      // hsd Sale Amount
      let hsdSaleAmount = allHsdComSale * hsd_sale_rate;
      let hsdPurchaseAmount = allHsdComSale * hsd_purchase_rate;

      // profit 
      let supProfit = supSaleAmount - supPurchaseAmount;
      let hsdProfit = hsdSaleAmount - hsdPurchaseAmount;
      // total Sale Amount
      let totalSaleAmount = supSaleAmount + hsdSaleAmount;
      // total Profit
      let totalProfit = supProfit + hsdProfit;
      // other calculations 
      // total Expense
      let totalExpense = miscPayment + miscOther
      // total Recieving
      let totalRecieving = creditWasoli + lubricants + tucShop + preClosing + cashFromOtherPumps
      // total Payment
      let totalPayment = psoCard + HBLCard + bankDeposit + psoPayment + advanceSalary + creditPayment + miscPayment2
      let netProfit = totalProfit - totalExpense
      // closing 
      let closingtotal = (totalSaleAmount + totalRecieving) - (totalExpense + totalPayment)
      let closing = Math.floor(closingtotal)


      const newPumpData = new Pump({
        // nosels 
        sup1_currentReading, sup2_currentReading, hsd1_currentReading, hsd2_currentReading,

        // last readings  this will come from database 
        lastReadingHsd1, lastReadingHsd2, lastReadingSup1, lastReadingSup2,

        // petrol and deisel rate
        sup_purchase_rate, sup_sale_rate, hsd_purchase_rate, hsd_sale_rate,

        // payment 
        psoCard, HBLCard, bankDeposit, psoPayment, advanceSalary, creditPayment , miscPayment2,
        totalPayment,

        // recieving 
        creditWasoli, lubricants, tucShop, preClosing, cashFromOtherPumps,
        totalRecieving,
        // expense 
        miscPayment, miscOther, totalExpense,


        // computer sale 
        comSaleSup1, comSaleSup2, comSalehsd1, comSalehsd2,

        // sold quantity 
        supSoldQty: allSupComSale, hsdSoldQty: allHsdComSale,

        // sale amount calculations
        supSaleAmount, hsdSaleAmount,
        // profit 
        supProfit, hsdProfit, totalSaleAmount, totalProfit,
        // other calculations 
        closing, netProfit,
        createdDate
      }
      );

      const pump = await newPumpData.save();

      res.send(pump);
    } catch (error) {
      res.status(500).send({
        message:
          error.message || "Some error occurred while creating the product.",
        text: "Error From Add Product to Controllers",
      });
    }

  } else {
    const {
      // nosels 
      sup1_currentReading, sup2_currentReading, hsd1_currentReading, hsd2_currentReading,
      // get super and hsd rate 
      sup_purchase_rate, sup_sale_rate, hsd_purchase_rate, hsd_sale_rate,
      // recieving 
      creditWasoli, lubricants, tucShop, cashFromOtherPumps,
      // payment 
      psoCard, HBLCard, bankDeposit, psoPayment, advanceSalary, creditPayment , miscPayment2 ,
      // expense 
      miscPayment, miscOther,
    } = req.body;
    let lastReadingSup1 = pumpData[pumpData.length - 1].sup1_currentReading
    let lastReadingSup2 = pumpData[pumpData.length - 1].sup2_currentReading

    let lastReadingHsd1 = pumpData[pumpData.length - 1].hsd1_currentReading
    let lastReadingHsd2 = pumpData[pumpData.length - 1].hsd2_currentReading

    // pre Closing
    let preClosing = pumpData[pumpData.length - 1].closing





    // date 
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    const createdDate = `${day} ${month}, ${year}`


    if (
      // nosels 
      !sup1_currentReading || !sup2_currentReading  || !hsd1_currentReading || !hsd2_currentReading
    ) {
      return res.status(400).send({
        message: "Please fill all the nosels",
      });
    }
    try {
      // computer sale calculation 
      // petrol 
      let comSaleSup1 = sup1_currentReading - lastReadingSup1;
      let comSaleSup2 = sup2_currentReading - lastReadingSup2;
      // diesal 
      let comSalehsd1 = hsd1_currentReading - lastReadingHsd1;
      let comSalehsd2 = hsd2_currentReading - lastReadingHsd2;

      // sale amount calculations
      let allSupComSale = comSaleSup1 + comSaleSup2;
      let allHsdComSale = comSalehsd1 + comSalehsd2;

      // sup Sale Amount
      let supSaleAmount = allSupComSale * sup_sale_rate;
      let supPurchaseAmount = allSupComSale * sup_purchase_rate;
      // hsd Sale Amount
      let hsdSaleAmount = allHsdComSale * hsd_sale_rate;
      let hsdPurchaseAmount = allHsdComSale * hsd_purchase_rate;

      // profit 
      let supProfit = supSaleAmount - supPurchaseAmount;
      let hsdProfit = hsdSaleAmount - hsdPurchaseAmount;
      // total Sale Amount
      let totalSaleAmount = supSaleAmount + hsdSaleAmount;
      // total Profit
      let totalProfit = supProfit + hsdProfit;


      // other calculations 
      // total Expense
      let totalExpense = miscPayment + miscOther
      // total Recieving
      let totalRecieving = creditWasoli + lubricants + tucShop + preClosing + cashFromOtherPumps
      // total Payment
      let totalPayment = psoCard + HBLCard + bankDeposit + psoPayment + advanceSalary + creditPayment + miscPayment2
      let netProfit = totalProfit - totalExpense
      // closing 
      let closingtotal = (totalSaleAmount + totalRecieving) - (totalExpense + totalPayment)
      let closing = Math.floor(closingtotal)


      const newPumpData = new Pump({
        // nosels 
        sup1_currentReading, sup2_currentReading, hsd1_currentReading, hsd2_currentReading,

        // last readings  this will come from database 
        lastReadingHsd1, lastReadingHsd2, lastReadingSup1, lastReadingSup2,

        // petrol and deisel rate
        sup_purchase_rate, sup_sale_rate, hsd_purchase_rate, hsd_sale_rate,

        // payment 
        psoCard, HBLCard, bankDeposit, psoPayment, advanceSalary, creditPayment , miscPayment2 ,
        totalPayment,

        // recieving 
        creditWasoli, lubricants, tucShop, preClosing, cashFromOtherPumps,
        totalRecieving,
        // expense 
        miscPayment, miscOther, totalExpense,


        // computer sale 
        comSaleSup1, comSaleSup2, comSalehsd1, comSalehsd2,

        // sold quantity 
        supSoldQty: allSupComSale, hsdSoldQty: allHsdComSale,

        // sale amount calculations
        supSaleAmount, hsdSaleAmount,
        // profit 
        supProfit, hsdProfit, totalSaleAmount, totalProfit,
        // other calculations 
        closing, netProfit,
        createdDate
      }
      );

      const pump = await newPumpData.save();

      res.send(pump);
    } catch (error) {
      res.status(500).send({
        message:
          error.message || "Some error occurred while creating the product.",
        text: "Error From Add Product to Controllers",
      });
    }

  }




};

// get 
exports.getGo09Data = async (req, res) => {
  let pumpData = await Pump.find()
  if (pumpData.length > 0) {
    res.send(pumpData)
  } else {
    res.send({ msg: "No user Data found in Database" })
  }
}


//  get in reverse
exports.getGo09Dataa = async (req, res) => {
  try {
    let pumpData = await Pump.find().sort({ _id: -1 });
    if (pumpData.length > 0) {
      res.send(pumpData);
    } else {
      res.send({ msg: "No user Data found in Database" });
    }
  } catch (error) {
    res.status(500).send({
      message: "Error fetching data from the database.",
    });
  }
};

// get pump data details
exports.getGo09DataDetails = async (req, res) => {
  let result = await Pump.findOne({ _id: req.params.id })
  if (result) {
    res.send(result)
  } else {
    res.send({ msg: "No user found" })
  }
}

// update 
exports.updateGo09Data = async (req, res) => {
  const pumpId = req.params.id; // Assuming you pass the pump ID in the URL parameter

  try {
    // Fetch the existing pump data from the database
    let PumpResult = await Pump.findOne({ _id: req.params.id })
    let pumpData = await Pump.findById(pumpId);

    if (!pumpData) {
      return res.status(404).send({
        message: "Pump data not found",
      });
    }

    // Update the pump data fields with the values from the request body
    pumpData.sup1_currentReading = req.body.sup1_currentReading;
    pumpData.sup2_currentReading = req.body.sup2_currentReading;
    pumpData.hsd1_currentReading = req.body.hsd1_currentReading;
    pumpData.hsd2_currentReading = req.body.hsd2_currentReading;

    pumpData.lastReadingSup1 = PumpResult.lastReadingSup1
    pumpData.lastReadingSup2 = PumpResult.lastReadingSup2

    pumpData.lastReadingHsd1 = PumpResult.lastReadingHsd1
    pumpData.lastReadingHsd2 = PumpResult.lastReadingHsd2



    // recieving 
    pumpData.creditWasoli = req.body.creditWasoli;
    pumpData.lubricants = req.body.lubricants;
    pumpData.tucShop = req.body.tucShop;
    pumpData.cashFromOtherPumps = req.body.cashFromOtherPumps;

    pumpData.totalRecieving = req.body.tucShop + PumpResult.preClosing + req.body.creditWasoli + req.body.lubricants + req.body.cashFromOtherPumps
    // payment 
    pumpData.psoCard = req.body.psoCard;
    pumpData.HBLCard = req.body.HBLCard;
    pumpData.bankDeposit = req.body.bankDeposit;
    pumpData.psoPayment = req.body.psoPayment;
    pumpData.advanceSalary = req.body.advanceSalary;
    pumpData.creditPayment = req.body.creditPayment;
    pumpData.miscPayment2 = req.body.miscPayment2;

   

    pumpData.totalPayment = req.body.psoCard + req.body.HBLCard + req.body.bankDeposit + req.body.psoPayment + req.body.advanceSalary + req.body.creditPayment + req.body.miscPayment2

    // expense 
    pumpData.miscPayment = req.body.miscPayment;
    pumpData.miscOther = req.body.miscOther;
    pumpData.totalExpense = req.body.miscPayment + req.body.miscOther;
    // other calculations 
    // total Expense


    pumpData.comSaleSup1 = req.body.sup1_currentReading - PumpResult.lastReadingSup1;
    pumpData.comSaleSup2 = req.body.sup2_currentReading - PumpResult.lastReadingSup2;
    pumpData.comSalehsd1 = req.body.hsd1_currentReading - PumpResult.lastReadingHsd1;
    pumpData.comSalehsd2 = req.body.hsd2_currentReading - PumpResult.lastReadingHsd2;
    // Perform any necessary calculations here (similar to your existing post method)
    // sale amount calculations

    pumpData.allSupComSale = pumpData.comSaleSup1 + pumpData.comSaleSup2
    pumpData.allHsdComSale = pumpData.comSalehsd1 + pumpData.comSalehsd2
    // sup Sale Amount

    pumpData.supSaleAmount = pumpData.allSupComSale * PumpResult.sup_sale_rate;
    pumpData.supPurchaseAmount = pumpData.allSupComSale * PumpResult.sup_purchase_rate;

    // hsd Sale Amount
    pumpData.hsdSaleAmount = pumpData.allHsdComSale * PumpResult.hsd_sale_rate;
    pumpData.hsdPurchaseAmount = pumpData.allHsdComSale * PumpResult.hsd_purchase_rate;

    // profit 
    pumpData.supProfit = pumpData.supSaleAmount - pumpData.supPurchaseAmount;
    pumpData.hsdProfit = pumpData.hsdSaleAmount - pumpData.hsdPurchaseAmount;

    // total Sale Amount
    pumpData.totalSaleAmount = pumpData.supSaleAmount + pumpData.hsdSaleAmount;

    // total Profit
    pumpData.totalProfit = pumpData.supProfit + pumpData.hsdProfit;
    pumpData.netProfit = pumpData.totalProfit - pumpData.totalExpense;

    // closing 
    // pumpData.closing = (pumpData.totalSaleAmount + pumpData.totalRecieving) - (pumpData.totalExpense + pumpData.totalPayment)
    // closing 
    let closingtotal =(pumpData.totalSaleAmount + pumpData.totalRecieving) - (pumpData.totalExpense + pumpData.totalPayment)
    pumpData.closing = Math.floor(closingtotal)
    // Save the updated pump data
    const updatedPumpData = await pumpData.save();

    res.send(updatedPumpData);
  } catch (error) {
    res.status(500).send({
      message: "Some error occurred while updating the pump data.",
      error: error.message,
    });
  }
};

// delete
exports.deleteGo09 = async (req, res) => {
  // res.send(req.params)
  let pumpData = await Pump.deleteOne({ _id: req.params.id })
  if (pumpData) {
    res.send(pumpData)
  } else {
    res.send({ msg: "No record found" })
  }
}