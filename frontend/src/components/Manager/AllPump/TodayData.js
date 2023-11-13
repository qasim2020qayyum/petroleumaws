import React, { useEffect, useRef, useState } from 'react'
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useReactToPrint } from 'react-to-print';
import logo from "../../../assets/petrolium1.png"
const TodayData = () => {
    const componentPDF = useRef();
    const [aliPetroliumTodayData, setaliPetroliumTodayData] = useState([]);
    const [awanBrotherTodayData, setawanBrotherTodayData] = useState([]);
    const [babaFareedTodayData, setbabaFareedTodayData] = useState([]);
    const [bhattiPetroliumTodayData, setBhattiPetroliumTodayData] = useState([]);
    const [go09TodayData, setGo09TodayData] = useState([]);
    const [go45TodayData, setgo45TodayData] = useState([]);
    const [idFillingStationTodayData, setidFillingStationTodayData] = useState([]);
    const [jahangirPetroliumTodayData, setjahangirPetroliumTodayData] = useState([]);
    const [khalidAndSonTodayData, setkhalidAndSonTodayData] = useState([]);
    const [nadirFillingStationsTodayData, setnadirFillingStationsTodayData] = useState([]);
    const [noorPetroliumTodayData, setnoorPetroliumTodayData] = useState([]);
    const [alSiddiqueTodayData, setalSiddiqueTodayData] = useState([]);
    const [alWaliTodayData, setAlWaliTodayData] = useState([]);
    const [takhatMahalTodayData, setTakhatMahalTodayData] = useState([]);
    const [siaaStationTodayData, setSiaaStationTodayData] = useState([]);


    const getCurrDate = ()=>{
        const date = new Date();
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        let currentDate = `${day} ${month}, ${year}`;
        return currentDate;
    }
    
    // set ali Petroleum Today Data
    const aliPetroleum = async () => {
        let currentDate = getCurrDate()
        let res = await fetch(`${process.env.REACT_APP_BACKEND_URL_KEY}/joiya/pump/data/reverse`);
        res = await res.json();
        if (res){
            let todayData = res.find(item => item.createdDate === currentDate); 
            setaliPetroliumTodayData(todayData || 0);
        }
    };

    // set awan Brother Today Data
    const awanBrother = async () => {
        let currentDate = getCurrDate()
        let res = await fetch(`${process.env.REACT_APP_BACKEND_URL_KEY}/joiya/awanbrothers/data/reverse`);
        res = await res.json();
        if (res){
            let todayData = res.find(item => item.createdDate === currentDate); 
            setawanBrotherTodayData(todayData || 0);
        }
    };

    // set baba fareed Today Data
    const babafareed = async () => {
        let currentDate = getCurrDate()
        let res = await fetch(`${process.env.REACT_APP_BACKEND_URL_KEY}/joiya/babafareed/data/reverse`);
        res = await res.json();
        if (res){
            let todayData = res.find(item => item.createdDate === currentDate); 
            setbabaFareedTodayData(todayData || 0);
        }
    };

    // set bhatti Petrolium Today Data
    const bhattiPetrolium = async () => {
        let currentDate = getCurrDate()
        let res = await fetch(`${process.env.REACT_APP_BACKEND_URL_KEY}/joiya/bhattiPetrolium/data/reverse`);
        res = await res.json();
        if (res){
            let todayData = res.find(item => item.createdDate === currentDate); 
            setBhattiPetroliumTodayData(todayData || 0);
        }
    };

    // set go09 Today Data
    const go09 = async () => {
        let currentDate = getCurrDate()
        let res = await fetch(`${process.env.REACT_APP_BACKEND_URL_KEY}/joiya/go09/data/reverse`);
        res = await res.json();
        if (res){
            let todayData = res.find(item => item.createdDate === currentDate); 
            setGo09TodayData(todayData || 0);
        }
    };

    // set go45 Today Data
    const go45 = async () => {
        let currentDate = getCurrDate()
        let res = await fetch(`${process.env.REACT_APP_BACKEND_URL_KEY}/joiya/go45/data/reverse`);
        res = await res.json();
        if (res){
            let todayData = res.find(item => item.createdDate === currentDate); 
            setgo45TodayData(todayData || 0);
        }
    };

    // set idFillingStation Today Data
    const idFillingStation = async () => {
        let currentDate = getCurrDate()
        let res = await fetch(`${process.env.REACT_APP_BACKEND_URL_KEY}/joiya/idFillingStation/data/reverse`);
        res = await res.json();
        if (res){
            let todayData = res.find(item => item.createdDate === currentDate); 
            setidFillingStationTodayData(todayData || 0);
        }
    };
    // set jahangirPetrolium Today Data
    const jahangirPetrolium = async () => {
        let currentDate = getCurrDate()
        let res = await fetch(`${process.env.REACT_APP_BACKEND_URL_KEY}/joiya/jahangirPetrolium/data/reverse`);
        res = await res.json();
        if (res){
            let todayData = res.find(item => item.createdDate === currentDate); 
            setjahangirPetroliumTodayData(todayData || 0);
        }
    };
    // set khalidAndSon Today Data
    const khalidAndSon = async () => {
        let currentDate = getCurrDate()
        let res = await fetch(`${process.env.REACT_APP_BACKEND_URL_KEY}/joiya/khalidAndSon/data/reverse`);
        res = await res.json();
        if (res){
            let todayData = res.find(item => item.createdDate === currentDate); 
            setkhalidAndSonTodayData(todayData || 0);
        }
    };
    // set nadirFillingStations Today Data
    const nadirFillingStations = async () => {
        let currentDate = getCurrDate()
        let res = await fetch(`${process.env.REACT_APP_BACKEND_URL_KEY}/joiya/nadirFillingStations/data/reverse`);
        res = await res.json();
        if (res){
            let todayData = res.find(item => item.createdDate === currentDate); 
            setnadirFillingStationsTodayData(todayData || 0);
        }
    };
    // set noorPetrolium Today Data
    const noorPetrolium = async () => {
        let currentDate = getCurrDate()
        let res = await fetch(`${process.env.REACT_APP_BACKEND_URL_KEY}/joiya/noorPetrolium/data/reverse`);
        res = await res.json();
        if (res){
            let todayData = res.find(item => item.createdDate === currentDate); 
            setnoorPetroliumTodayData(todayData || 0);
        }
    };
    // set alSiddique Today Data
    const alSiddique = async () => {
        let currentDate = getCurrDate()
        let res = await fetch(`${process.env.REACT_APP_BACKEND_URL_KEY}/joiya/alSiddique/data/reverse`);
        res = await res.json();
        if (res){
            let todayData = res.find(item => item.createdDate === currentDate); 
            setalSiddiqueTodayData(todayData || 0);
        }
    };
    // set alWali Today Data
    const alWali = async () => {
        let currentDate = getCurrDate()
        let res = await fetch(`${process.env.REACT_APP_BACKEND_URL_KEY}/joiya/alwali/data/reverse`);
        res = await res.json();
        if (res){
            let todayData = res.find(item => item.createdDate === currentDate); 
            setAlWaliTodayData(todayData || 0);
        }
    };
    // set Takhat Mahal Today Data
    const takhatMahal = async () => {
        let currentDate = getCurrDate()
        let res = await fetch(`${process.env.REACT_APP_BACKEND_URL_KEY}/joiya/takhatMahal/data/reverse`);
        res = await res.json();
        if (res){
            let todayData = res.find(item => item.createdDate === currentDate); 
            setTakhatMahalTodayData(todayData || 0);
        }
    };
    // set Siaa Station Today Data
    const siaaStation = async () => {
        let currentDate = getCurrDate()
        let res = await fetch(`${process.env.REACT_APP_BACKEND_URL_KEY}/joiya/siaaFillingStation/data/reverse`);
        res = await res.json();
        if(res){
            let todayData = res.find(item => item.createdDate === currentDate); 
            setSiaaStationTodayData(todayData || 0);
        }
    };





    useEffect(() => {
        aliPetroleum()
        awanBrother()
        babafareed()
        bhattiPetrolium()
        go09()
        go45()
        idFillingStation()
        jahangirPetrolium()
        khalidAndSon()
        nadirFillingStations()
        noorPetrolium()
        alSiddique()
        alWali()
        takhatMahal()
        siaaStation()
    }, [])


    const generatePDF = useReactToPrint({
        content: () => componentPDF.current,
        documentTitle: "TodaysData",
        onAfterPrint: () => toast.success("invoice generated")
    })
    let userName = sessionStorage.getItem("username")
    return (
        <>
            <div style={{ padding: "1rem", border: "1px solid black" }} className='table-container'>
                <div ref={componentPDF} style={{ textAlign: "center", width: "100%" }}>
                    <div>
                        <div className='headcss'>
                            <img className='headcss_name' src={logo} alt='logo' />
                        </div>
                        <div className='headcss_2'>
                            <p>Date: {siaaStationTodayData.createdDate}</p>
                            <p>User: {userName}</p>
                        </div>
                    </div>
                    <div className="table-container">

                        <table>
                            <thead>
                                <tr>
                                    <th>Sr No.</th>
                                    <th>Pump Name</th>
                                    <th>Sup Sale</th>
                                    <th>HSD Sale </th>
                                    <th>Total Sale</th>
                                    <th>Gross Profit</th>
                                    <th>Total Expense</th>
                                    <th>Net Profit</th>
                                    <th>Bank Deposit</th>
                                    <th>Closing</th>
                                </tr>
                            </thead> 
                            <tbody>
                                <tr>
                                    <td>01</td>
                                    <td>Ali Petroleum</td>
                                    <td>{aliPetroliumTodayData? aliPetroliumTodayData.supSaleAmount.toFixed(0):  0}</td>
                                    <td>{aliPetroliumTodayData? aliPetroliumTodayData.hsdSaleAmount.toFixed(0): 0}</td>
                                    <td>{aliPetroliumTodayData? aliPetroliumTodayData.totalSaleAmount.toFixed(0): 0}</td>
                                    <td>{aliPetroliumTodayData? aliPetroliumTodayData.totalProfit.toFixed(0): 0}</td>
                                    <td>{aliPetroliumTodayData? aliPetroliumTodayData.totalExpense.toFixed(0): 0}</td>
                                    <td>{aliPetroliumTodayData? aliPetroliumTodayData.netProfit.toFixed(0): 0}</td>
                                    <td>{aliPetroliumTodayData? aliPetroliumTodayData.bankDeposit.toFixed(0): 0}</td>
                                    <td>{aliPetroliumTodayData? aliPetroliumTodayData.closing.toFixed(0): 0}</td>   
                                </tr>
                                <tr>
                                    <td>02</td>
                                    <td>Awan Brother</td>
                                    <td>{awanBrotherTodayData? awanBrotherTodayData.supSaleAmount.toFixed(0):  0}</td>
                                    <td>{awanBrotherTodayData? awanBrotherTodayData.hsdSaleAmount.toFixed(0): 0}</td>
                                    <td>{awanBrotherTodayData? awanBrotherTodayData.totalSaleAmount.toFixed(0): 0}</td>
                                    <td>{awanBrotherTodayData? awanBrotherTodayData.totalProfit.toFixed(0): 0}</td>
                                    <td>{awanBrotherTodayData? awanBrotherTodayData.totalExpense.toFixed(0): 0}</td>
                                    <td>{awanBrotherTodayData? awanBrotherTodayData.netProfit.toFixed(0): 0}</td>
                                    <td>{awanBrotherTodayData? awanBrotherTodayData.bankDeposit.toFixed(0): 0}</td>
                                    <td>{awanBrotherTodayData? awanBrotherTodayData.closing.toFixed(0): 0}</td>   
                                </tr>
                                <tr>
                                    <td>03</td>
                                    <td>Baba Fareed</td>
                                    <td>{babaFareedTodayData? babaFareedTodayData.supSaleAmount.toFixed(0):  0}</td>
                                    <td>{babaFareedTodayData? babaFareedTodayData.hsdSaleAmount.toFixed(0): 0}</td>
                                    <td>{babaFareedTodayData? babaFareedTodayData.totalSaleAmount.toFixed(0): 0}</td>
                                    <td>{babaFareedTodayData? babaFareedTodayData.totalProfit.toFixed(0): 0}</td>
                                    <td>{babaFareedTodayData? babaFareedTodayData.totalExpense.toFixed(0): 0}</td>
                                    <td>{babaFareedTodayData? babaFareedTodayData.netProfit.toFixed(0): 0}</td>
                                    <td>{babaFareedTodayData? babaFareedTodayData.bankDeposit.toFixed(0): 0}</td>
                                    <td>{babaFareedTodayData? babaFareedTodayData.closing.toFixed(0): 0}</td>  
                                </tr>
                                <tr>
                                    <td>04</td>
                                    <td>Bhatti Petroleum</td>
                                    <td>{bhattiPetroliumTodayData? bhattiPetroliumTodayData.supSaleAmount.toFixed(0):  0}</td>
                                    <td>{bhattiPetroliumTodayData? bhattiPetroliumTodayData.hsdSaleAmount.toFixed(0): 0}</td>
                                    <td>{bhattiPetroliumTodayData? bhattiPetroliumTodayData.totalSaleAmount.toFixed(0): 0}</td>
                                    <td>{bhattiPetroliumTodayData? bhattiPetroliumTodayData.totalProfit.toFixed(0): 0}</td>
                                    <td>{bhattiPetroliumTodayData? bhattiPetroliumTodayData.totalExpense.toFixed(0): 0}</td>
                                    <td>{bhattiPetroliumTodayData? bhattiPetroliumTodayData.netProfit.toFixed(0): 0}</td>
                                    <td>{bhattiPetroliumTodayData? bhattiPetroliumTodayData.bankDeposit.toFixed(0): 0}</td>
                                    <td>{bhattiPetroliumTodayData? bhattiPetroliumTodayData.closing.toFixed(0): 0}</td>  
                                </tr>
                                <tr>
                                    <td>05</td>
                                    <td>Go 09</td>
                                    <td>{go09TodayData? go09TodayData.supSaleAmount.toFixed(0):  0}</td>
                                    <td>{go09TodayData? go09TodayData.hsdSaleAmount.toFixed(0): 0}</td>
                                    <td>{go09TodayData? go09TodayData.totalSaleAmount.toFixed(0): 0}</td>
                                    <td>{go09TodayData? go09TodayData.totalProfit.toFixed(0): 0}</td>
                                    <td>{go09TodayData? go09TodayData.totalExpense.toFixed(0): 0}</td>
                                    <td>{go09TodayData? go09TodayData.netProfit.toFixed(0): 0}</td>
                                    <td>{go09TodayData? go09TodayData.bankDeposit.toFixed(0): 0}</td>
                                    <td>{go09TodayData? go09TodayData.closing.toFixed(0): 0}</td>  
                                </tr>
                                <tr>
                                    <td>06</td>
                                    <td>Go 45</td>
                                    <td>{go45TodayData? go45TodayData.supSaleAmount.toFixed(0):  0}</td>
                                    <td>{go45TodayData? go45TodayData.hsdSaleAmount.toFixed(0): 0}</td>
                                    <td>{go45TodayData? go45TodayData.totalSaleAmount.toFixed(0): 0}</td>
                                    <td>{go45TodayData? go45TodayData.totalProfit.toFixed(0): 0}</td>
                                    <td>{go45TodayData? go45TodayData.totalExpense.toFixed(0): 0}</td>
                                    <td>{go45TodayData? go45TodayData.netProfit.toFixed(0): 0}</td>
                                    <td>{go45TodayData? go45TodayData.bankDeposit.toFixed(0): 0}</td>
                                    <td>{go45TodayData? go45TodayData.closing.toFixed(0): 0}</td> 
                                </tr>
                                <tr>
                                    <td>07</td>
                                    <td>ID Filling</td>
                                    <td>{idFillingStationTodayData? idFillingStationTodayData.supSaleAmount.toFixed(0):  0}</td>
                                    <td>{idFillingStationTodayData? idFillingStationTodayData.hsdSaleAmount.toFixed(0): 0}</td>
                                    <td>{idFillingStationTodayData? idFillingStationTodayData.totalSaleAmount.toFixed(0): 0}</td>
                                    <td>{idFillingStationTodayData? idFillingStationTodayData.totalProfit.toFixed(0): 0}</td>
                                    <td>{idFillingStationTodayData? idFillingStationTodayData.totalExpense.toFixed(0): 0}</td>
                                    <td>{idFillingStationTodayData? idFillingStationTodayData.netProfit.toFixed(0): 0}</td>
                                    <td>{idFillingStationTodayData? idFillingStationTodayData.bankDeposit.toFixed(0): 0}</td>
                                    <td>{idFillingStationTodayData? idFillingStationTodayData.closing.toFixed(0): 0}</td> 
                                </tr>
                                <tr>
                                    <td>08</td>
                                    <td>Jahangir Petroleum</td>
                                    <td>{jahangirPetroliumTodayData? jahangirPetroliumTodayData.supSaleAmount.toFixed(0):  0}</td>
                                    <td>{jahangirPetroliumTodayData? jahangirPetroliumTodayData.hsdSaleAmount.toFixed(0): 0}</td>
                                    <td>{jahangirPetroliumTodayData? jahangirPetroliumTodayData.totalSaleAmount.toFixed(0): 0}</td>
                                    <td>{jahangirPetroliumTodayData? jahangirPetroliumTodayData.totalProfit.toFixed(0): 0}</td>
                                    <td>{jahangirPetroliumTodayData? jahangirPetroliumTodayData.totalExpense.toFixed(0): 0}</td>
                                    <td>{jahangirPetroliumTodayData? jahangirPetroliumTodayData.netProfit.toFixed(0): 0}</td>
                                    <td>{jahangirPetroliumTodayData? jahangirPetroliumTodayData.bankDeposit.toFixed(0): 0}</td>
                                    <td>{jahangirPetroliumTodayData? jahangirPetroliumTodayData.closing.toFixed(0): 0}</td> 
                                </tr>
                                <tr>
                                    <td>09</td>
                                    <td>Khalid & Sons</td>
                                    <td>{khalidAndSonTodayData? khalidAndSonTodayData.supSaleAmount.toFixed(0):  0}</td>
                                    <td>{khalidAndSonTodayData? khalidAndSonTodayData.hsdSaleAmount.toFixed(0): 0}</td>
                                    <td>{khalidAndSonTodayData? khalidAndSonTodayData.totalSaleAmount.toFixed(0): 0}</td>
                                    <td>{khalidAndSonTodayData? khalidAndSonTodayData.totalProfit.toFixed(0): 0}</td>
                                    <td>{khalidAndSonTodayData? khalidAndSonTodayData.totalExpense.toFixed(0): 0}</td>
                                    <td>{khalidAndSonTodayData? khalidAndSonTodayData.netProfit.toFixed(0): 0}</td>
                                    <td>{khalidAndSonTodayData? khalidAndSonTodayData.bankDeposit.toFixed(0): 0}</td>
                                    <td>{khalidAndSonTodayData? khalidAndSonTodayData.closing.toFixed(0): 0}</td> 
                                </tr>
                                <tr>
                                    <td>10</td>
                                    <td>Nadir Filling</td>
                                    <td>{nadirFillingStationsTodayData? nadirFillingStationsTodayData.supSaleAmount.toFixed(0):  0}</td>
                                    <td>{nadirFillingStationsTodayData? nadirFillingStationsTodayData.hsdSaleAmount.toFixed(0): 0}</td>
                                    <td>{nadirFillingStationsTodayData? nadirFillingStationsTodayData.totalSaleAmount.toFixed(0): 0}</td>
                                    <td>{nadirFillingStationsTodayData? nadirFillingStationsTodayData.totalProfit.toFixed(0): 0}</td>
                                    <td>{nadirFillingStationsTodayData? nadirFillingStationsTodayData.totalExpense.toFixed(0): 0}</td>
                                    <td>{nadirFillingStationsTodayData? nadirFillingStationsTodayData.netProfit.toFixed(0): 0}</td>
                                    <td>{nadirFillingStationsTodayData? nadirFillingStationsTodayData.bankDeposit.toFixed(0): 0}</td>
                                    <td>{nadirFillingStationsTodayData? nadirFillingStationsTodayData.closing.toFixed(0): 0}</td> 
                                </tr>
                                <tr>
                                    <td>11</td>
                                    <td>Noor Petroleum</td>
                                    <td>{noorPetroliumTodayData? noorPetroliumTodayData.supSaleAmount.toFixed(0):  0}</td>
                                    <td>{noorPetroliumTodayData? noorPetroliumTodayData.hsdSaleAmount.toFixed(0): 0}</td>
                                    <td>{noorPetroliumTodayData? noorPetroliumTodayData.totalSaleAmount.toFixed(0): 0}</td>
                                    <td>{noorPetroliumTodayData? noorPetroliumTodayData.totalProfit.toFixed(0): 0}</td>
                                    <td>{noorPetroliumTodayData? noorPetroliumTodayData.totalExpense.toFixed(0): 0}</td>
                                    <td>{noorPetroliumTodayData? noorPetroliumTodayData.netProfit.toFixed(0): 0}</td>
                                    <td>{noorPetroliumTodayData? noorPetroliumTodayData.bankDeposit.toFixed(0): 0}</td>
                                    <td>{noorPetroliumTodayData? noorPetroliumTodayData.closing.toFixed(0): 0}</td> 
                                </tr>
                                <tr>
                                    <td>12</td>
                                    <td>Al Siddique</td>
                                    <td>{alSiddiqueTodayData? alSiddiqueTodayData.supSaleAmount.toFixed(0):  0}</td>
                                    <td>{alSiddiqueTodayData? alSiddiqueTodayData.hsdSaleAmount.toFixed(0): 0}</td>
                                    <td>{alSiddiqueTodayData? alSiddiqueTodayData.totalSaleAmount.toFixed(0): 0}</td>
                                    <td>{alSiddiqueTodayData? alSiddiqueTodayData.totalProfit.toFixed(0): 0}</td>
                                    <td>{alSiddiqueTodayData? alSiddiqueTodayData.totalExpense.toFixed(0): 0}</td>
                                    <td>{alSiddiqueTodayData? alSiddiqueTodayData.netProfit.toFixed(0): 0}</td>
                                    <td>{alSiddiqueTodayData? alSiddiqueTodayData.bankDeposit.toFixed(0): 0}</td>
                                    <td>{alSiddiqueTodayData? alSiddiqueTodayData.closing.toFixed(0): 0}</td> 
                                </tr>
                                <tr>
                                    <td>13</td>
                                    <td>Al Wali Power</td>
                                    <td>{alWaliTodayData? alWaliTodayData.supSaleAmount.toFixed(0):  0}</td>
                                    <td>{alWaliTodayData? alWaliTodayData.hsdSaleAmount.toFixed(0): 0}</td>
                                    <td>{alWaliTodayData? alWaliTodayData.totalSaleAmount.toFixed(0): 0}</td>
                                    <td>{alWaliTodayData? alWaliTodayData.totalProfit.toFixed(0): 0}</td>
                                    <td>{alWaliTodayData? alWaliTodayData.totalExpense.toFixed(0): 0}</td>
                                    <td>{alWaliTodayData? alWaliTodayData.netProfit.toFixed(0): 0}</td>
                                    <td>{alWaliTodayData? alWaliTodayData.bankDeposit.toFixed(0): 0}</td>
                                    <td>{alWaliTodayData? alWaliTodayData.closing.toFixed(0): 0}</td> 
                                </tr>
                            
                                <tr>
                                    <td>14</td>
                                    <td>ID Takhat Mahal</td>
                                    <td>{takhatMahalTodayData ? takhatMahalTodayData.supSaleAmount.toFixed(0) : 0}</td>
                                    <td>{takhatMahalTodayData ? takhatMahalTodayData.hsdSaleAmount.toFixed(0) : 0}</td>
                                    <td>{takhatMahalTodayData ? takhatMahalTodayData.totalSaleAmount.toFixed(0) : 0}</td>
                                    <td>{takhatMahalTodayData ? takhatMahalTodayData.totalProfit.toFixed(0) : 0}</td>
                                    <td>{takhatMahalTodayData ? takhatMahalTodayData.totalExpense.toFixed(0) : 0}</td>
                                    <td>{takhatMahalTodayData ? takhatMahalTodayData.netProfit.toFixed(0) : 0}</td>
                                    <td>{takhatMahalTodayData ? takhatMahalTodayData.bankDeposit.toFixed(0) : 0}</td>
                                    <td>{takhatMahalTodayData ? takhatMahalTodayData.closing.toFixed(0) : 0}</td> 
                                </tr>

                                <tr>
                                    <td>15</td>
                                    <td>Siaa Filling</td>
                                    <td>{siaaStationTodayData? siaaStationTodayData.supSaleAmount.toFixed(0): 0}</td>
                                    <td>0</td>
                                    <td>{siaaStationTodayData? siaaStationTodayData.totalSaleAmount.toFixed(0): 0}</td>
                                    <td>{siaaStationTodayData? siaaStationTodayData.totalProfit.toFixed(0): 0}</td>
                                    <td>{siaaStationTodayData? siaaStationTodayData.totalExpense.toFixed(0): 0}</td>
                                    <td>{siaaStationTodayData? siaaStationTodayData.netProfit.toFixed(0): 0}</td>
                                    <td>{siaaStationTodayData? siaaStationTodayData.bankDeposit.toFixed(0): 0}</td>
                                    <td>{siaaStationTodayData? siaaStationTodayData.closing.toFixed(0): 0}</td>   
                                </tr>
                                <tr >
                                    <th></th>
                                    <th>TOTAL</th>
                                    <th>{((aliPetroliumTodayData? aliPetroliumTodayData.supSaleAmount:  0) +  (awanBrotherTodayData? awanBrotherTodayData.supSaleAmount:  0) +  (babaFareedTodayData? babaFareedTodayData.supSaleAmount:  0) +  (bhattiPetroliumTodayData? bhattiPetroliumTodayData.supSaleAmount:  0) + (go09TodayData? go09TodayData.supSaleAmount:  0 )+ (go45TodayData? go45TodayData.supSaleAmount:  0) + (idFillingStationTodayData? idFillingStationTodayData.supSaleAmount:  0) + (jahangirPetroliumTodayData? jahangirPetroliumTodayData.supSaleAmount:  0) + (khalidAndSonTodayData? khalidAndSonTodayData.supSaleAmount:  0) + (nadirFillingStationsTodayData? nadirFillingStationsTodayData.supSaleAmount:  0) + (noorPetroliumTodayData? noorPetroliumTodayData.supSaleAmount:  0) + (alSiddiqueTodayData? alSiddiqueTodayData.supSaleAmount:  0) + (alWaliTodayData? alWaliTodayData.supSaleAmount:  0) + (takhatMahalTodayData? takhatMahalTodayData.supSaleAmount:  0) + (siaaStationTodayData? siaaStationTodayData.supSaleAmount:  0)).toFixed(0)}</th>
                                    <th>{((aliPetroliumTodayData? aliPetroliumTodayData.hsdSaleAmount:  0) +  (awanBrotherTodayData? awanBrotherTodayData.hsdSaleAmount:  0) +  (babaFareedTodayData? babaFareedTodayData.hsdSaleAmount:  0) +  (bhattiPetroliumTodayData? bhattiPetroliumTodayData.hsdSaleAmount:  0) + (go09TodayData? go09TodayData.hsdSaleAmount:  0 )+ (go45TodayData? go45TodayData.hsdSaleAmount:  0) + (idFillingStationTodayData? idFillingStationTodayData.hsdSaleAmount:  0) + (jahangirPetroliumTodayData? jahangirPetroliumTodayData.hsdSaleAmount:  0) + (khalidAndSonTodayData? khalidAndSonTodayData.hsdSaleAmount:  0) + (nadirFillingStationsTodayData? nadirFillingStationsTodayData.hsdSaleAmount:  0) + (noorPetroliumTodayData? noorPetroliumTodayData.hsdSaleAmount:  0) + (alSiddiqueTodayData? alSiddiqueTodayData.hsdSaleAmount:  0) + (alWaliTodayData? alWaliTodayData.hsdSaleAmount:  0) + (takhatMahalTodayData? takhatMahalTodayData.hsdSaleAmount:  0) + 0).toFixed(0)}</th>
                                    <th>{((aliPetroliumTodayData? aliPetroliumTodayData.totalSaleAmount:  0) +  (awanBrotherTodayData? awanBrotherTodayData.totalSaleAmount:  0) +  (babaFareedTodayData? babaFareedTodayData.totalSaleAmount:  0) +  (bhattiPetroliumTodayData? bhattiPetroliumTodayData.totalSaleAmount:  0) + (go09TodayData? go09TodayData.totalSaleAmount:  0 )+ (go45TodayData? go45TodayData.totalSaleAmount:  0) + (idFillingStationTodayData? idFillingStationTodayData.totalSaleAmount:  0) + (jahangirPetroliumTodayData? jahangirPetroliumTodayData.totalSaleAmount:  0) + (khalidAndSonTodayData? khalidAndSonTodayData.totalSaleAmount:  0) + (nadirFillingStationsTodayData? nadirFillingStationsTodayData.totalSaleAmount:  0) + (noorPetroliumTodayData? noorPetroliumTodayData.totalSaleAmount:  0) + (alSiddiqueTodayData? alSiddiqueTodayData.totalSaleAmount:  0) + (alWaliTodayData? alWaliTodayData.totalSaleAmount:  0) + (takhatMahalTodayData? takhatMahalTodayData.totalSaleAmount:  0) + (siaaStationTodayData? siaaStationTodayData.totalSaleAmount:  0)).toFixed(0)}</th>
                                    <th>{((aliPetroliumTodayData? aliPetroliumTodayData.totalProfit:  0) +  (awanBrotherTodayData? awanBrotherTodayData.totalProfit:  0) +  (babaFareedTodayData? babaFareedTodayData.totalProfit:  0) +  (bhattiPetroliumTodayData? bhattiPetroliumTodayData.totalProfit:  0) + (go09TodayData? go09TodayData.totalProfit:  0 )+ (go45TodayData? go45TodayData.totalProfit:  0) + (idFillingStationTodayData? idFillingStationTodayData.totalProfit:  0) + (jahangirPetroliumTodayData? jahangirPetroliumTodayData.totalProfit:  0) + (khalidAndSonTodayData? khalidAndSonTodayData.totalProfit:  0) + (nadirFillingStationsTodayData? nadirFillingStationsTodayData.totalProfit:  0) + (noorPetroliumTodayData? noorPetroliumTodayData.totalProfit:  0) + (alSiddiqueTodayData? alSiddiqueTodayData.totalProfit:  0) + (alWaliTodayData? alWaliTodayData.totalProfit:  0) + (takhatMahalTodayData? takhatMahalTodayData.totalProfit:  0) + (siaaStationTodayData? siaaStationTodayData.totalProfit:  0)).toFixed(0)}</th>
                                    <th>{((aliPetroliumTodayData? aliPetroliumTodayData.totalExpense:  0) +  (awanBrotherTodayData? awanBrotherTodayData.totalExpense:  0) +  (babaFareedTodayData? babaFareedTodayData.totalExpense:  0) +  (bhattiPetroliumTodayData? bhattiPetroliumTodayData.totalExpense:  0) + (go09TodayData? go09TodayData.totalExpense:  0 )+ (go45TodayData? go45TodayData.totalExpense:  0) + (idFillingStationTodayData? idFillingStationTodayData.totalExpense:  0) + (jahangirPetroliumTodayData? jahangirPetroliumTodayData.totalExpense:  0) + (khalidAndSonTodayData? khalidAndSonTodayData.totalExpense:  0) + (nadirFillingStationsTodayData? nadirFillingStationsTodayData.totalExpense:  0) + (noorPetroliumTodayData? noorPetroliumTodayData.totalExpense:  0) + (alSiddiqueTodayData? alSiddiqueTodayData.totalExpense:  0) + (alWaliTodayData? alWaliTodayData.totalExpense:  0) + (takhatMahalTodayData? takhatMahalTodayData.totalExpense:  0) + (siaaStationTodayData? siaaStationTodayData.totalExpense:  0)).toFixed(0)}</th>
                                    <th>{((aliPetroliumTodayData? aliPetroliumTodayData.netProfit:  0) +  (awanBrotherTodayData? awanBrotherTodayData.netProfit:  0) +  (babaFareedTodayData? babaFareedTodayData.netProfit:  0) +  (bhattiPetroliumTodayData? bhattiPetroliumTodayData.netProfit:  0) + (go09TodayData? go09TodayData.netProfit:  0 )+ (go45TodayData? go45TodayData.netProfit:  0) + (idFillingStationTodayData? idFillingStationTodayData.netProfit:  0) + (jahangirPetroliumTodayData? jahangirPetroliumTodayData.netProfit:  0) + (khalidAndSonTodayData? khalidAndSonTodayData.netProfit:  0) + (nadirFillingStationsTodayData? nadirFillingStationsTodayData.netProfit:  0) + (noorPetroliumTodayData? noorPetroliumTodayData.netProfit:  0) + (alSiddiqueTodayData? alSiddiqueTodayData.netProfit:  0) + (alWaliTodayData? alWaliTodayData.netProfit:  0) + (takhatMahalTodayData? takhatMahalTodayData.netProfit:  0) + (siaaStationTodayData? siaaStationTodayData.netProfit:  0)).toFixed(0)}</th>
                                    <th>{((aliPetroliumTodayData? aliPetroliumTodayData.bankDeposit:  0) +  (awanBrotherTodayData? awanBrotherTodayData.bankDeposit:  0) +  (babaFareedTodayData? babaFareedTodayData.bankDeposit:  0) +  (bhattiPetroliumTodayData? bhattiPetroliumTodayData.bankDeposit:  0) + (go09TodayData? go09TodayData.bankDeposit:  0 )+ (go45TodayData? go45TodayData.bankDeposit:  0) + (idFillingStationTodayData? idFillingStationTodayData.bankDeposit:  0) + (jahangirPetroliumTodayData? jahangirPetroliumTodayData.bankDeposit:  0) + (khalidAndSonTodayData? khalidAndSonTodayData.bankDeposit:  0) + (nadirFillingStationsTodayData? nadirFillingStationsTodayData.bankDeposit:  0) + (noorPetroliumTodayData? noorPetroliumTodayData.bankDeposit:  0) + (alSiddiqueTodayData? alSiddiqueTodayData.bankDeposit:  0) + (alWaliTodayData? alWaliTodayData.bankDeposit:  0) + (takhatMahalTodayData? takhatMahalTodayData.bankDeposit:  0) + (siaaStationTodayData? siaaStationTodayData.bankDeposit:  0)).toFixed(0)}</th>
                                    <th>{((aliPetroliumTodayData? aliPetroliumTodayData.closing:  0) +  (awanBrotherTodayData? awanBrotherTodayData.closing:  0) +  (babaFareedTodayData? babaFareedTodayData.closing:  0) +  (bhattiPetroliumTodayData? bhattiPetroliumTodayData.closing:  0) + (go09TodayData? go09TodayData.closing:  0 )+ (go45TodayData? go45TodayData.closing:  0) + (idFillingStationTodayData? idFillingStationTodayData.closing:  0) + (jahangirPetroliumTodayData? jahangirPetroliumTodayData.closing:  0) + (khalidAndSonTodayData? khalidAndSonTodayData.closing:  0) + (nadirFillingStationsTodayData? nadirFillingStationsTodayData.closing:  0) + (noorPetroliumTodayData? noorPetroliumTodayData.closing:  0) + (alSiddiqueTodayData? alSiddiqueTodayData.closing:  0) + (alWaliTodayData? alWaliTodayData.closing:  0) + (takhatMahalTodayData? takhatMahalTodayData.closing:  0) + (siaaStationTodayData? siaaStationTodayData.closing:  0)).toFixed(0)}</th>
                                </tr>
                            </tbody>
                        </table>
                    </div>


                </div>
                <button className='btn btn-danger text-light' onClick={generatePDF}>Generate Invoice</button>
            </div>
        </>
    )
}

export default TodayData
