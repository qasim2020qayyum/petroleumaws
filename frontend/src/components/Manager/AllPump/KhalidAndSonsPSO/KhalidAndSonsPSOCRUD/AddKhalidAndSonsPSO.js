import React, { useEffect, useState } from "react";
import {  useNavigate } from "react-router-dom";
import {  toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const AddKhalidAndSonsPSO = () => { 
    // get last reading 
    const [lastReadingSup1, setLastReadingSup1] = useState([]);
    const [lastReadingSup2, setLastReadingSup2] = useState([]);
    const [lastReadingHsd1, setLastReadingHsd1] = useState([]);
    const [lastReadingHsd2, setLastReadingHsd2] = useState([]);


    // insert table data 

    const [sup1_currentReading, setSup1CurrentReading] = useState('');
    const [sup2_currentReading, setSup2CurrentReading] = useState('');
    const [hsd1_currentReading, setHsd1CurrentReading] = useState('');
    const [hsd2_currentReading, setHsd2CurrentReading] = useState('');
    // rates 
    const [sup_purchase_rate, setSupPurchaseRate] = useState('');
    const [sup_sale_rate, setSupSaleRate] = useState('');
    const [hsd_purchase_rate, setHsdPurchaseRate] = useState('');
    const [hsd_sale_rate, setHsdSaleRate] = useState('');
    // OTHER
    // payments 
    const [psoCard, setPsoCard] = useState(0);
    const [HBLCard, setHBLCard] = useState(0);
    const [bankDeposit, setBankDeposit] = useState(0);
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
            !hsd1_currentReading ||
            !hsd2_currentReading 
        ) {
            setErrorMsg(true)
            return false
        }
        e.preventDefault();
        let pumpData = await fetch(`${process.env.REACT_APP_BACKEND_URL_KEY}/joiya/khalidAndSon/data/`, {
            method: 'POST',
            body: JSON.stringify({
                sup1_currentReading: Number(sup1_currentReading),
                sup2_currentReading: Number(sup2_currentReading),
                hsd1_currentReading: Number(hsd1_currentReading),
                hsd2_currentReading: Number(hsd2_currentReading),
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
                HBLCard:Number(HBLCard), 
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
        navigate('/khalid-&-sons-pso/get-all-data')
        toast.success("Data added👌");
    }




    const [petrolRate, setPetrolRate] = useState([]);
    const petrol = async () => {
        let res = await fetch(`${process.env.REACT_APP_BACKEND_URL_KEY}/joiya/rate/khalidAndSon/`)
        res = await res.json();
        setSupPurchaseRate(res[res.length - 1].sup_purchase_rate)
        setSupSaleRate(res[res.length - 1].sup_sale_rate)
        setHsdPurchaseRate(res[res.length - 1].hsd_purchase_rate)
        setHsdSaleRate(res[res.length - 1].hsd_sale_rate)
        setPetrolRate(res)
      }


    // get last reading 
    const userData = async () => {
        let res = await fetch(`${process.env.REACT_APP_BACKEND_URL_KEY}/joiya/khalidAndSon/data`)
        res = await res.json();
        setLastReadingSup1(res[res.length - 1].sup1_currentReading)
        setLastReadingSup2(res[res.length - 1].sup2_currentReading)
        setLastReadingHsd1(res[res.length - 1].hsd1_currentReading)
        setLastReadingHsd2(res[res.length - 1].hsd2_currentReading)
    }

    const [sup1_difference, setSup1difference] = useState('');
    const [sup2_difference, setSup2difference] = useState('');
    const [hsd1_difference, setHsd1difference] = useState('');
    const [hsd2_difference, setHsd2difference] = useState('');
    useEffect(() => {
        setSup1difference(sup1_currentReading-lastReadingSup1)
        setSup2difference(sup2_currentReading-lastReadingSup2)
        setHsd1difference(hsd1_currentReading-lastReadingHsd1)
        setHsd2difference(hsd2_currentReading-lastReadingHsd2)
        userData()
        petrol() 
    }, [sup1_currentReading,sup2_currentReading,hsd1_currentReading,hsd2_currentReading])



    return (
        <>
            <div className="form-container card border-0 shadow rounded-3 my-5 p-5">
                <h1 className="mb-5">Khalid And Sons PSO</h1>
                 
                <form>
                    
                    {/* sup 1 */}
                    <div className="form-row">
                        <div className="form-group">
                            <h3 style={{ marginTop: "3rem" }}>SUP1 <span className="text-danger"> Difference: {sup1_difference}</span></h3>
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Last Reading</label>
                            <input type="number" id="name" name="name" required value={lastReadingSup1} disabled />
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
                            <h3 style={{ marginTop: "3rem" }}>SUP2 <span className="text-danger"> Difference: {sup2_difference}</span></h3>
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Last Reading</label>
                            <input type="number" id="name" name="name" required value={lastReadingSup2} disabled />
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Current Reading</label>
                            <input type="number" id="name" name="name" required onChange={(e) => setSup2CurrentReading(e.target.value)} />
                            {errorMsg && !sup2_currentReading && <span className="errorHandle">Please enter sup2 before submit</span>}
                        </div>
                    </div>
                    {/* HSD 1 */}
                    <div className="form-row">
                        <div className="form-group">
                            <h3 style={{ marginTop: "3rem" }}>HSD1 <span className="text-danger"> Difference: {hsd1_difference}</span></h3>
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Last Reading</label>
                            <input type="number" id="name" name="name" required value={lastReadingHsd1} disabled />
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Current Reading</label>
                            <input type="number" id="name" name="name" required onChange={(e) => setHsd1CurrentReading(e.target.value)} />
                            {errorMsg && !hsd1_currentReading && <span className="errorHandle">Please enter HSD1 before submit</span>}

                        </div>
                    </div>
                    {/* HSD 2 */}
                    <div className="form-row">
                        <div className="form-group">
                            <h3 style={{ marginTop: "3rem" }}>HSD2 <span className="text-danger"> Difference: {hsd2_difference}</span></h3>
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Last Reading</label>
                            <input type="number" id="name" name="name" required value={lastReadingHsd2} disabled />
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Current Reading</label>
                            <input type="number" id="name" name="name" required onChange={(e) => setHsd2CurrentReading(e.target.value)} />
                            {errorMsg && !hsd2_currentReading && <span className="errorHandle">Please enter HSD2 before submit</span>}
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
                            {/* <input type="number" required onChange={(e) => setPsoCard(Number(e.target.value))} /> */}
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

export default AddKhalidAndSonsPSO
