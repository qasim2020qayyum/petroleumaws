import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const FirstAddBhattiPetrolium = () => {
    // get last reading 
    const [lastReadingSup1, setLastReadingSup1] = useState([]);
    const [lastReadingSup2, setLastReadingSup2] = useState([]);
    const [lastReadingSup3, setLastReadingSup3] = useState([]);
    const [lastReadingHsd1, setLastReadingHsd1] = useState([]);
    const [preClosing, setPreClosing] = useState([]);
    


    // insert table data 

    const [sup1_currentReading, setSup1CurrentReading] = useState('');
    const [sup2_currentReading, setSup2CurrentReading] = useState('');
    const [sup3_currentReading, setSup3CurrentReading] = useState('');
    const [hsd1_currentReading, setHsd1CurrentReading] = useState('');
    // rates 
    const [sup_purchase_rate, setSupPurchaseRate] = useState('');
    const [sup_sale_rate, setSupSaleRate] = useState('');
    const [hsd_purchase_rate, setHsdPurchaseRate] = useState('');
    const [hsd_sale_rate, setHsdSaleRate] = useState('');
    // OTHER
    // payments 
    const [psoCard, setPsoCard] = useState('');
    const [HBLCard, setHBLCard] = useState('');
    const [bankDeposit, setBankDeposit] = useState('');
    const [psoPayment, setPsoPayment] = useState('');
    const [advanceSalary, setAdvanceSalary] = useState('');
    const [creditPayment, setcreditPayment] = useState('');
    const [miscPayment2, setmiscPayment2] = useState('');
   
    // recieving 
    const [creditWasoli, setCreditWasoli] = useState('');
    const [lubricants, setLubricants] = useState('');
    const [tucShop, setTucShop] = useState('');
    const [cashFromOtherPumps, setCashFromOtherPumps] = useState('');

    const [miscPayment, setMiscPayment] = useState('');
    const [miscOther, setMiscOther] = useState('');

    const [data, setData] = useState([]);


    const [errorMsg, setErrorMsg] = useState(false);
    const navigate = useNavigate();
    const saveData = async (e) => {
        if (!sup1_currentReading ||
            !sup2_currentReading ||
            !sup3_currentReading ||
            !hsd1_currentReading ||
            !lastReadingSup1 ||
            !lastReadingSup2 ||
            !lastReadingSup3 ||
            !lastReadingHsd1 ||
            !preClosing 
        ) {
            setErrorMsg(true)
            return false
        }
        e.preventDefault();
        let pumpData = await fetch(`${process.env.REACT_APP_BACKEND_URL_KEY}/joiya/bhattiPetrolium/data/`, {
            method: 'POST',
            body: JSON.stringify({
                lastReadingSup1: Number(lastReadingSup1),
                lastReadingSup2: Number(lastReadingSup2),
                lastReadingSup3: Number(lastReadingSup3),
                lastReadingHsd1: Number(lastReadingHsd1),
                preClosing: Number(preClosing),

                sup1_currentReading: Number(sup1_currentReading),
                sup2_currentReading: Number(sup2_currentReading),
                sup3_currentReading: Number(sup3_currentReading),
                hsd1_currentReading: Number(hsd1_currentReading),
                // rates 
                sup_purchase_rate: Number(sup_purchase_rate),
                sup_sale_rate: Number(sup_sale_rate),
                hsd_purchase_rate: Number(hsd_purchase_rate),
                hsd_sale_rate: Number(hsd_sale_rate),

                // recieving 
                creditWasoli: Number(creditWasoli),
                lubricants: Number(lubricants),
                tucShop: Number(tucShop),
                cashFromOtherPumps: Number(cashFromOtherPumps),

                // payments 
                psoCard: Number(psoCard),
                HBLCard: Number(HBLCard),
                bankDeposit: Number(bankDeposit),
                psoPayment: Number(psoPayment),
                advanceSalary: Number(advanceSalary),
                creditPayment: Number(creditPayment),
                miscPayment2: Number(miscPayment2),
                

                // expense
                miscPayment: Number(miscPayment),
                miscOther: Number(miscOther),
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        pumpData = await pumpData.json();
        setData(pumpData);
        navigate('/bhatti-petrolium/get-all-data')
        toast.success("Data added👌");
    }


    const [petrolRate, setPetrolRate] = useState([]);
    const petrol = async () => {
      let res = await fetch(`${process.env.REACT_APP_BACKEND_URL_KEY}/joiya/rate/bhattiPetrolium/`)
      res = await res.json();
    setSupPurchaseRate(res[res.length - 1].sup_purchase_rate)
      setSupSaleRate(res[res.length - 1].sup_sale_rate)
      setHsdPurchaseRate(res[res.length - 1].hsd_purchase_rate)
      setHsdSaleRate(res[res.length - 1].hsd_sale_rate)
      setPetrolRate(res)
    }
    useEffect(()=>{
        petrol()
    },[])
    return (
        <>
            <div className="form-container card border-0 shadow rounded-3 my-5 p-5">
                <h1 className="mb-5">Bhatti Petrolium   </h1>
                <hr />
                <form>
                    
                    {/* sup 1 */}
                    <div className="form-row">
                        <div className="form-group">
                            <h3 style={{ marginTop: "3rem" }}>SUP1</h3>
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Last Reading</label>
                            <input type="number" id="name" name="name" required  onChange={(e) => setLastReadingSup1(e.target.value)} />
                            {errorMsg && !lastReadingSup1 && <span className="errorHandle">Please enter last reading before submit</span>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Current Reading</label>
                            <input type="number" id="name" name="name" required onChange={(e) => setSup1CurrentReading(e.target.value)} />
                            {errorMsg && !sup1_currentReading && <span className="errorHandle">Please enter sup1 before submit</span>}
                        </div>
                    </div>
                    {/* sup 2 */}
                    <div className="form-row">
                        <div className="form-group">
                            <h3 style={{ marginTop: "3rem" }}>SUP2</h3>
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Last Reading</label>
                            <input type="number" id="name" name="name" required onChange={(e) => setLastReadingSup2(e.target.value)} />
                            {errorMsg && !lastReadingSup2 && <span className="errorHandle">Please enter last reading before submit</span>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Current Reading</label>
                            <input type="number" id="name" name="name" required onChange={(e) => setSup2CurrentReading(e.target.value)} />
                            {errorMsg && !sup2_currentReading && <span className="errorHandle">Please enter sup2 before submit</span>}
                        </div>
                    </div>
                    {/* sup 3 */}

                    <div className="form-row">
                        <div className="form-group">
                            <h3 style={{ marginTop: "3rem" }}>SUP3</h3>
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Last Reading</label>
                            <input type="number" id="name" name="name" required onChange={(e) => setLastReadingSup3(e.target.value)} />
                            {errorMsg && !lastReadingSup3 && <span className="errorHandle">Please enter last reading before submit</span>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Current Reading</label>
                            <input type="number" id="name" name="name" required onChange={(e) => setSup3CurrentReading(e.target.value)} />
                            {errorMsg && !sup3_currentReading && <span className="errorHandle">Please enter sup3 before submit</span>}
                        </div>
                    </div>
                    {/* HSD 1 */}
                    <div className="form-row">
                        <div className="form-group">
                            <h3 style={{ marginTop: "3rem" }}>HSD1</h3>
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Last Reading</label>
                            <input type="number" id="name" name="name" required onChange={(e) => setLastReadingHsd1(e.target.value)} />
                            {errorMsg && !lastReadingHsd1 && <span className="errorHandle">Please enter last reading before submit</span>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Current Reading</label>
                            <input type="number" id="name" name="name" required onChange={(e) => setHsd1CurrentReading(e.target.value)} />
                            {errorMsg && !hsd1_currentReading && <span className="errorHandle">Please enter HSD1 before submit</span>}

                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="name">Pre Closing</label>
                            <input type="number" id="name" name="name" required onChange={(e) => setPreClosing(e.target.value)} />
                            {errorMsg && !preClosing && <span className="errorHandle">Please enter last reading before submit</span>}
                        </div>
                    </div>


                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="name">Credit Wasoli</label>
                            <input type="number" id="name" name="name" required onChange={(e) => setCreditWasoli(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Lubricants</label>
                            <input type="number" id="name" name="name" required onChange={(e) => setLubricants(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">TUC/TYRE Shop</label>
                            <input type="number" id="name" name="name" required onChange={(e) => setTucShop(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Cash From Other Pumps</label>
                            <input type="number" id="name" name="name" required onChange={(e) => setCashFromOtherPumps(e.target.value)} />
                        </div>
                    </div>


                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="name">PSO Card</label>
                            <input type="number" required onChange={(e) => setPsoCard(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">HBL Card</label>
                            <input type="number"  required onChange={(e) => setHBLCard(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">BANK Deposit</label>
                            <input type="number"  required onChange={(e) => setBankDeposit(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">PSO Payment</label>
                            <input type="number"  required onChange={(e) => setPsoPayment(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Advance Salary</label>
                            <input type="number"  required onChange={(e) => setAdvanceSalary(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Credit Payment</label>
                            <input type="number"  required onChange={(e) => setcreditPayment(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Misc Payment</label>
                            <input type="number"  required onChange={(e) => setmiscPayment2(e.target.value)} />
                        </div>
                        
                    </div>


                   



                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="name">MISC Payment</label>
                            <input type="number" id="name" name="name" required onChange={(e) => setMiscPayment(e.target.value)} />

                        </div>
                        <div className="form-group">
                            <label htmlFor="name">MISC/Other</label>
                            <input type="number" id="name" name="name" required onChange={(e) => setMiscOther(e.target.value)} />
                        </div>
                    </div>

                    <div style={{ textAlign: "center" }}>
                        <button style={{ color: "white" }} className="btn btn-light login btn-login  fw-bold" type="submit"
                            onClick={saveData}
                        >Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default FirstAddBhattiPetrolium