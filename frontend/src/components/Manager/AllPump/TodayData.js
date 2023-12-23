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
    const [dastgeerTodayData, setDastgeerTodayData] = useState([]);
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


    const [loading, setLoading] = useState(true);


    const getCurrDate = () => {
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
        if (res) {
            let todayData = res.find(item => item.createdDate === currentDate);
            setaliPetroliumTodayData(todayData || 0);
        }
    };

    // set awan Brother Today Data
    const awanBrother = async () => {
        let currentDate = getCurrDate()
        let res = await fetch(`${process.env.REACT_APP_BACKEND_URL_KEY}/joiya/awanbrothers/data/reverse`);
        res = await res.json();
        if (res) {
            let todayData = res.find(item => item.createdDate === currentDate);
            setawanBrotherTodayData(todayData || 0);
        }
    };

    // set baba fareed Today Data
    const babafareed = async () => {
        let currentDate = getCurrDate()
        let res = await fetch(`${process.env.REACT_APP_BACKEND_URL_KEY}/joiya/babafareed/data/reverse`);
        res = await res.json();
        if (res) {
            let todayData = res.find(item => item.createdDate === currentDate);
            setbabaFareedTodayData(todayData || 0);
        }
    };

    // set bhatti Petrolium Today Data
    const bhattiPetrolium = async () => {
        let currentDate = getCurrDate()
        let res = await fetch(`${process.env.REACT_APP_BACKEND_URL_KEY}/joiya/bhattiPetrolium/data/reverse`);
        res = await res.json();
        if (res) {
            let todayData = res.find(item => item.createdDate === currentDate);
            setBhattiPetroliumTodayData(todayData || 0);
        }
    };

    // set go09 Today Data
    const go09 = async () => {
        let currentDate = getCurrDate()
        let res = await fetch(`${process.env.REACT_APP_BACKEND_URL_KEY}/joiya/go09/data/reverse`);
        res = await res.json();
        if (res) {
            let todayData = res.find(item => item.createdDate === currentDate);
            setGo09TodayData(todayData || 0);
        }
    };

    // set go09 Today Data
    const dastgeer = async () => {
        let currentDate = getCurrDate()
        let res = await fetch(`${process.env.REACT_APP_BACKEND_URL_KEY}/joiya/dastgeer/data/reverse`);
        res = await res.json();
        if (res) {
            let todayData = res.find(item => item.createdDate === currentDate);
            setDastgeerTodayData(todayData || 0);
        }
    };

    // set go45 Today Data
    const go45 = async () => {
        let currentDate = getCurrDate()
        let res = await fetch(`${process.env.REACT_APP_BACKEND_URL_KEY}/joiya/go45/data/reverse`);
        res = await res.json();
        if (res) {
            let todayData = res.find(item => item.createdDate === currentDate);
            setgo45TodayData(todayData || 0);
        }
    };

    // set idFillingStation Today Data
    const idFillingStation = async () => {
        let currentDate = getCurrDate()
        let res = await fetch(`${process.env.REACT_APP_BACKEND_URL_KEY}/joiya/idFillingStation/data/reverse`);
        res = await res.json();
        if (res) {
            let todayData = res.find(item => item.createdDate === currentDate);
            setidFillingStationTodayData(todayData || 0);
        }
    };
    // set jahangirPetrolium Today Data
    const jahangirPetrolium = async () => {
        let currentDate = getCurrDate()
        let res = await fetch(`${process.env.REACT_APP_BACKEND_URL_KEY}/joiya/jahangirPetrolium/data/reverse`);
        res = await res.json();
        if (res) {
            let todayData = res.find(item => item.createdDate === currentDate);
            setjahangirPetroliumTodayData(todayData || 0);
        }
    };
    // set khalidAndSon Today Data
    const khalidAndSon = async () => {
        let currentDate = getCurrDate()
        let res = await fetch(`${process.env.REACT_APP_BACKEND_URL_KEY}/joiya/khalidAndSon/data/reverse`);
        res = await res.json();
        if (res) {
            let todayData = res.find(item => item.createdDate === currentDate);
            setkhalidAndSonTodayData(todayData || 0);
        }
    };
    // set nadirFillingStations Today Data
    const nadirFillingStations = async () => {
        let currentDate = getCurrDate()
        let res = await fetch(`${process.env.REACT_APP_BACKEND_URL_KEY}/joiya/nadirFillingStations/data/reverse`);
        res = await res.json();
        if (res) {
            let todayData = res.find(item => item.createdDate === currentDate);
            setnadirFillingStationsTodayData(todayData || 0);
        }
    };
    // set noorPetrolium Today Data
    const noorPetrolium = async () => {
        let currentDate = getCurrDate()
        let res = await fetch(`${process.env.REACT_APP_BACKEND_URL_KEY}/joiya/noorPetrolium/data/reverse`);
        res = await res.json();
        if (res) {
            let todayData = res.find(item => item.createdDate === currentDate);
            setnoorPetroliumTodayData(todayData || 0);
        }
    };
    // set alSiddique Today Data
    const alSiddique = async () => {
        let currentDate = getCurrDate()
        let res = await fetch(`${process.env.REACT_APP_BACKEND_URL_KEY}/joiya/alSiddique/data/reverse`);
        res = await res.json();
        if (res) {
            let todayData = res.find(item => item.createdDate === currentDate);
            setalSiddiqueTodayData(todayData || 0);
        }
    };
    // set alWali Today Data
    const alWali = async () => {
        let currentDate = getCurrDate()
        let res = await fetch(`${process.env.REACT_APP_BACKEND_URL_KEY}/joiya/alwali/data/reverse`);
        res = await res.json();
        if (res) {
            let todayData = res.find(item => item.createdDate === currentDate);
            setAlWaliTodayData(todayData || 0);
        }
    };
    // set Takhat Mahal Today Data
    const takhatMahal = async () => {
        let currentDate = getCurrDate()
        let res = await fetch(`${process.env.REACT_APP_BACKEND_URL_KEY}/joiya/takhatMahal/data/reverse`);
        res = await res.json();
        if (res) {
            let todayData = res.find(item => item.createdDate === currentDate);
            setTakhatMahalTodayData(todayData || 0);
        }
    };
    // set Siaa Station Today Data
    const siaaStation = async () => {
        let currentDate = getCurrDate()
        let res = await fetch(`${process.env.REACT_APP_BACKEND_URL_KEY}/joiya/siaaFillingStation/data/reverse`);
        res = await res.json();
        if (res) {
            let todayData = res.find(item => item.createdDate === currentDate);
            setSiaaStationTodayData(todayData || 0);
            setLoading(false)
        }
    };





    useEffect(() => {
        if (loading) {
            aliPetroleum()
            awanBrother()
            babafareed()
            bhattiPetrolium()
            dastgeer()
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
        }
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
                            {loading ? (<p>Loading...</p>
                            ) : (
                                <tbody>
                                    <tr>
                                        <td>01</td>
                                        <td>Ali Petroleum</td>
                                        <td>{aliPetroliumTodayData?.supSaleAmount !== undefined ? aliPetroliumTodayData.supSaleAmount.toFixed(0) : 0}</td>
                                        <td>{aliPetroliumTodayData?.hsdSaleAmount !== undefined ? aliPetroliumTodayData.hsdSaleAmount.toFixed(0) : 0}</td>
                                        <td>{aliPetroliumTodayData?.totalSaleAmount !== undefined ? aliPetroliumTodayData.totalSaleAmount.toFixed(0) : 0}</td>
                                        <td>{aliPetroliumTodayData?.totalProfit !== undefined ? aliPetroliumTodayData.totalProfit.toFixed(0) : 0}</td>
                                        <td>{aliPetroliumTodayData?.totalExpense !== undefined ? aliPetroliumTodayData.totalExpense.toFixed(0) : 0}</td>
                                        <td>{aliPetroliumTodayData?.netProfit !== undefined ? aliPetroliumTodayData.netProfit.toFixed(0) : 0}</td>
                                        <td>{aliPetroliumTodayData?.bankDeposit !== undefined ? aliPetroliumTodayData.bankDeposit.toFixed(0) : 0}</td>
                                        <td>{aliPetroliumTodayData?.closing !== undefined ? aliPetroliumTodayData.closing.toFixed(0) : 0}</td>
                                    </tr>

                                    <tr>
                                        <td>02</td>
                                        <td>Awan Brother</td>
                                        <td>{awanBrotherTodayData?.supSaleAmount !== undefined ? awanBrotherTodayData.supSaleAmount.toFixed(0) : 0}</td>
                                        <td>{awanBrotherTodayData?.hsdSaleAmount !== undefined ? awanBrotherTodayData.hsdSaleAmount.toFixed(0) : 0}</td>
                                        <td>{awanBrotherTodayData?.totalSaleAmount !== undefined ? awanBrotherTodayData.totalSaleAmount.toFixed(0) : 0}</td>
                                        <td>{awanBrotherTodayData?.totalProfit !== undefined ? awanBrotherTodayData.totalProfit.toFixed(0) : 0}</td>
                                        <td>{awanBrotherTodayData?.totalExpense !== undefined ? awanBrotherTodayData.totalExpense.toFixed(0) : 0}</td>
                                        <td>{awanBrotherTodayData?.netProfit !== undefined ? awanBrotherTodayData.netProfit.toFixed(0) : 0}</td>
                                        <td>{awanBrotherTodayData?.bankDeposit !== undefined ? awanBrotherTodayData.bankDeposit.toFixed(0) : 0}</td>
                                        <td>{awanBrotherTodayData?.closing !== undefined ? awanBrotherTodayData.closing.toFixed(0) : 0}</td>
                                    </tr>

                                    <tr>
                                        <td>03</td>
                                        <td>Baba Fareed</td>
                                        <td>{babaFareedTodayData?.supSaleAmount !== undefined ? babaFareedTodayData.supSaleAmount.toFixed(0) : 0}</td>
                                        <td>{babaFareedTodayData?.hsdSaleAmount !== undefined ? babaFareedTodayData.hsdSaleAmount.toFixed(0) : 0}</td>
                                        <td>{babaFareedTodayData?.totalSaleAmount !== undefined ? babaFareedTodayData.totalSaleAmount.toFixed(0) : 0}</td>
                                        <td>{babaFareedTodayData?.totalProfit !== undefined ? babaFareedTodayData.totalProfit.toFixed(0) : 0}</td>
                                        <td>{babaFareedTodayData?.totalExpense !== undefined ? babaFareedTodayData.totalExpense.toFixed(0) : 0}</td>
                                        <td>{babaFareedTodayData?.netProfit !== undefined ? babaFareedTodayData.netProfit.toFixed(0) : 0}</td>
                                        <td>{babaFareedTodayData?.bankDeposit !== undefined ? babaFareedTodayData.bankDeposit.toFixed(0) : 0}</td>
                                        <td>{babaFareedTodayData?.closing !== undefined ? babaFareedTodayData.closing.toFixed(0) : 0}</td>
                                    </tr>

                                    <tr>
                                        <td>04</td>
                                        <td>Bhatti Petroleum</td>
                                        <td>{bhattiPetroliumTodayData?.supSaleAmount !== undefined ? bhattiPetroliumTodayData.supSaleAmount.toFixed(0) : 0}</td>
                                        <td>{bhattiPetroliumTodayData?.hsdSaleAmount !== undefined ? bhattiPetroliumTodayData.hsdSaleAmount.toFixed(0) : 0}</td>
                                        <td>{bhattiPetroliumTodayData?.totalSaleAmount !== undefined ? bhattiPetroliumTodayData.totalSaleAmount.toFixed(0) : 0}</td>
                                        <td>{bhattiPetroliumTodayData?.totalProfit !== undefined ? bhattiPetroliumTodayData.totalProfit.toFixed(0) : 0}</td>
                                        <td>{bhattiPetroliumTodayData?.totalExpense !== undefined ? bhattiPetroliumTodayData.totalExpense.toFixed(0) : 0}</td>
                                        <td>{bhattiPetroliumTodayData?.netProfit !== undefined ? bhattiPetroliumTodayData.netProfit.toFixed(0) : 0}</td>
                                        <td>{bhattiPetroliumTodayData?.bankDeposit !== undefined ? bhattiPetroliumTodayData.bankDeposit.toFixed(0) : 0}</td>
                                        <td>{bhattiPetroliumTodayData?.closing !== undefined ? bhattiPetroliumTodayData.closing.toFixed(0) : 0}</td>
                                    </tr>

                                    <tr>
                                        <td>05</td>
                                        <td>Dastgeer Filling Station</td>
                                        <td>{dastgeerTodayData?.supSaleAmount !== undefined ? dastgeerTodayData.supSaleAmount.toFixed(0) : 0}</td>
                                        <td>{dastgeerTodayData?.hsdSaleAmount !== undefined ? dastgeerTodayData.hsdSaleAmount.toFixed(0) : 0}</td>
                                        <td>{dastgeerTodayData?.totalSaleAmount !== undefined ? dastgeerTodayData.totalSaleAmount.toFixed(0) : 0}</td>
                                        <td>{dastgeerTodayData?.totalProfit !== undefined ? dastgeerTodayData.totalProfit.toFixed(0) : 0}</td>
                                        <td>{dastgeerTodayData?.totalExpense !== undefined ? dastgeerTodayData.totalExpense.toFixed(0) : 0}</td>
                                        <td>{dastgeerTodayData?.netProfit !== undefined ? dastgeerTodayData.netProfit.toFixed(0) : 0}</td>
                                        <td>{dastgeerTodayData?.bankDeposit !== undefined ? dastgeerTodayData.bankDeposit.toFixed(0) : 0}</td>
                                        <td>{dastgeerTodayData?.closing !== undefined ? dastgeerTodayData.closing.toFixed(0) : 0}</td>
                                    </tr>
                                    <tr>
                                        <td>06</td>
                                        <td>Go 09</td>
                                        <td>{go09TodayData?.supSaleAmount !== undefined ? go09TodayData.supSaleAmount.toFixed(0) : 0}</td>
                                        <td>{go09TodayData?.hsdSaleAmount !== undefined ? go09TodayData.hsdSaleAmount.toFixed(0) : 0}</td>
                                        <td>{go09TodayData?.totalSaleAmount !== undefined ? go09TodayData.totalSaleAmount.toFixed(0) : 0}</td>
                                        <td>{go09TodayData?.totalProfit !== undefined ? go09TodayData.totalProfit.toFixed(0) : 0}</td>
                                        <td>{go09TodayData?.totalExpense !== undefined ? go09TodayData.totalExpense.toFixed(0) : 0}</td>
                                        <td>{go09TodayData?.netProfit !== undefined ? go09TodayData.netProfit.toFixed(0) : 0}</td>
                                        <td>{go09TodayData?.bankDeposit !== undefined ? go09TodayData.bankDeposit.toFixed(0) : 0}</td>
                                        <td>{go09TodayData?.closing !== undefined ? go09TodayData.closing.toFixed(0) : 0}</td>
                                    </tr>

                                    <tr>
                                        <td>07</td>
                                        <td>Go 45</td>
                                        <td>{go45TodayData?.supSaleAmount !== undefined ? go45TodayData.supSaleAmount.toFixed(0) : 0}</td>
                                        <td>{go45TodayData?.hsdSaleAmount !== undefined ? go45TodayData.hsdSaleAmount.toFixed(0) : 0}</td>
                                        <td>{go45TodayData?.totalSaleAmount !== undefined ? go45TodayData.totalSaleAmount.toFixed(0) : 0}</td>
                                        <td>{go45TodayData?.totalProfit !== undefined ? go45TodayData.totalProfit.toFixed(0) : 0}</td>
                                        <td>{go45TodayData?.totalExpense !== undefined ? go45TodayData.totalExpense.toFixed(0) : 0}</td>
                                        <td>{go45TodayData?.netProfit !== undefined ? go45TodayData.netProfit.toFixed(0) : 0}</td>
                                        <td>{go45TodayData?.bankDeposit !== undefined ? go45TodayData.bankDeposit.toFixed(0) : 0}</td>
                                        <td>{go45TodayData?.closing !== undefined ? go45TodayData.closing.toFixed(0) : 0}</td>
                                    </tr>

                                    <tr>
                                        <td>08</td>
                                        <td>ID Filling</td>
                                        <td>{idFillingStationTodayData?.supSaleAmount !== undefined ? idFillingStationTodayData.supSaleAmount.toFixed(0) : 0}</td>
                                        <td>{idFillingStationTodayData?.hsdSaleAmount !== undefined ? idFillingStationTodayData.hsdSaleAmount.toFixed(0) : 0}</td>
                                        <td>{idFillingStationTodayData?.totalSaleAmount !== undefined ? idFillingStationTodayData.totalSaleAmount.toFixed(0) : 0}</td>
                                        <td>{idFillingStationTodayData?.totalProfit !== undefined ? idFillingStationTodayData.totalProfit.toFixed(0) : 0}</td>
                                        <td>{idFillingStationTodayData?.totalExpense !== undefined ? idFillingStationTodayData.totalExpense.toFixed(0) : 0}</td>
                                        <td>{idFillingStationTodayData?.netProfit !== undefined ? idFillingStationTodayData.netProfit.toFixed(0) : 0}</td>
                                        <td>{idFillingStationTodayData?.bankDeposit !== undefined ? idFillingStationTodayData.bankDeposit.toFixed(0) : 0}</td>
                                        <td>{idFillingStationTodayData?.closing !== undefined ? idFillingStationTodayData.closing.toFixed(0) : 0}</td>
                                    </tr>

                                    <tr>
                                        <td>09</td>
                                        <td>Jahangir Petroleum</td>
                                        <td>{jahangirPetroliumTodayData?.supSaleAmount !== undefined ? jahangirPetroliumTodayData.supSaleAmount.toFixed(0) : 0}</td>
                                        <td>{jahangirPetroliumTodayData?.hsdSaleAmount !== undefined ? jahangirPetroliumTodayData.hsdSaleAmount.toFixed(0) : 0}</td>
                                        <td>{jahangirPetroliumTodayData?.totalSaleAmount !== undefined ? jahangirPetroliumTodayData.totalSaleAmount.toFixed(0) : 0}</td>
                                        <td>{jahangirPetroliumTodayData?.totalProfit !== undefined ? jahangirPetroliumTodayData.totalProfit.toFixed(0) : 0}</td>
                                        <td>{jahangirPetroliumTodayData?.totalExpense !== undefined ? jahangirPetroliumTodayData.totalExpense.toFixed(0) : 0}</td>
                                        <td>{jahangirPetroliumTodayData?.netProfit !== undefined ? jahangirPetroliumTodayData.netProfit.toFixed(0) : 0}</td>
                                        <td>{jahangirPetroliumTodayData?.bankDeposit !== undefined ? jahangirPetroliumTodayData.bankDeposit.toFixed(0) : 0}</td>
                                        <td>{jahangirPetroliumTodayData?.closing !== undefined ? jahangirPetroliumTodayData.closing.toFixed(0) : 0}</td>
                                    </tr>

                                    <tr>
                                        <td>10</td>
                                        <td>Khalid & Sons</td>
                                        <td>{khalidAndSonTodayData?.supSaleAmount !== undefined ? khalidAndSonTodayData.supSaleAmount.toFixed(0) : 0}</td>
                                        <td>{khalidAndSonTodayData?.hsdSaleAmount !== undefined ? khalidAndSonTodayData.hsdSaleAmount.toFixed(0) : 0}</td>
                                        <td>{khalidAndSonTodayData?.totalSaleAmount !== undefined ? khalidAndSonTodayData.totalSaleAmount.toFixed(0) : 0}</td>
                                        <td>{khalidAndSonTodayData?.totalProfit !== undefined ? khalidAndSonTodayData.totalProfit.toFixed(0) : 0}</td>
                                        <td>{khalidAndSonTodayData?.totalExpense !== undefined ? khalidAndSonTodayData.totalExpense.toFixed(0) : 0}</td>
                                        <td>{khalidAndSonTodayData?.netProfit !== undefined ? khalidAndSonTodayData.netProfit.toFixed(0) : 0}</td>
                                        <td>{khalidAndSonTodayData?.bankDeposit !== undefined ? khalidAndSonTodayData.bankDeposit.toFixed(0) : 0}</td>
                                        <td>{khalidAndSonTodayData?.closing !== undefined ? khalidAndSonTodayData.closing.toFixed(0) : 0}</td>
                                    </tr>

                                    <tr>
                                        <td>11</td>
                                        <td>Nadir Filling</td>
                                        <td>{nadirFillingStationsTodayData?.supSaleAmount !== undefined ? nadirFillingStationsTodayData.supSaleAmount.toFixed(0) : 0}</td>
                                        <td>{nadirFillingStationsTodayData?.hsdSaleAmount !== undefined ? nadirFillingStationsTodayData.hsdSaleAmount.toFixed(0) : 0}</td>
                                        <td>{nadirFillingStationsTodayData?.totalSaleAmount !== undefined ? nadirFillingStationsTodayData.totalSaleAmount.toFixed(0) : 0}</td>
                                        <td>{nadirFillingStationsTodayData?.totalProfit !== undefined ? nadirFillingStationsTodayData.totalProfit.toFixed(0) : 0}</td>
                                        <td>{nadirFillingStationsTodayData?.totalExpense !== undefined ? nadirFillingStationsTodayData.totalExpense.toFixed(0) : 0}</td>
                                        <td>{nadirFillingStationsTodayData?.netProfit !== undefined ? nadirFillingStationsTodayData.netProfit.toFixed(0) : 0}</td>
                                        <td>{nadirFillingStationsTodayData?.bankDeposit !== undefined ? nadirFillingStationsTodayData.bankDeposit.toFixed(0) : 0}</td>
                                        <td>{nadirFillingStationsTodayData?.closing !== undefined ? nadirFillingStationsTodayData.closing.toFixed(0) : 0}</td>
                                    </tr>

                                    <tr>
                                        <td>12</td>
                                        <td>Noor Petroleum</td>
                                        <td>{noorPetroliumTodayData?.supSaleAmount !== undefined ? noorPetroliumTodayData.supSaleAmount.toFixed(0) : 0}</td>
                                        <td>{noorPetroliumTodayData?.hsdSaleAmount !== undefined ? noorPetroliumTodayData.hsdSaleAmount.toFixed(0) : 0}</td>
                                        <td>{noorPetroliumTodayData?.totalSaleAmount !== undefined ? noorPetroliumTodayData.totalSaleAmount.toFixed(0) : 0}</td>
                                        <td>{noorPetroliumTodayData?.totalProfit !== undefined ? noorPetroliumTodayData.totalProfit.toFixed(0) : 0}</td>
                                        <td>{noorPetroliumTodayData?.totalExpense !== undefined ? noorPetroliumTodayData.totalExpense.toFixed(0) : 0}</td>
                                        <td>{noorPetroliumTodayData?.netProfit !== undefined ? noorPetroliumTodayData.netProfit.toFixed(0) : 0}</td>
                                        <td>{noorPetroliumTodayData?.bankDeposit !== undefined ? noorPetroliumTodayData.bankDeposit.toFixed(0) : 0}</td>
                                        <td>{noorPetroliumTodayData?.closing !== undefined ? noorPetroliumTodayData.closing.toFixed(0) : 0}</td>
                                    </tr>

                                    <tr>
                                        <td>13</td>
                                        <td>Al Siddique</td>
                                        <td>{alSiddiqueTodayData?.supSaleAmount !== undefined ? alSiddiqueTodayData.supSaleAmount.toFixed(0) : 0}</td>
                                        <td>{alSiddiqueTodayData?.hsdSaleAmount !== undefined ? alSiddiqueTodayData.hsdSaleAmount.toFixed(0) : 0}</td>
                                        <td>{alSiddiqueTodayData?.totalSaleAmount !== undefined ? alSiddiqueTodayData.totalSaleAmount.toFixed(0) : 0}</td>
                                        <td>{alSiddiqueTodayData?.totalProfit !== undefined ? alSiddiqueTodayData.totalProfit.toFixed(0) : 0}</td>
                                        <td>{alSiddiqueTodayData?.totalExpense !== undefined ? alSiddiqueTodayData.totalExpense.toFixed(0) : 0}</td>
                                        <td>{alSiddiqueTodayData?.netProfit !== undefined ? alSiddiqueTodayData.netProfit.toFixed(0) : 0}</td>
                                        <td>{alSiddiqueTodayData?.bankDeposit !== undefined ? alSiddiqueTodayData.bankDeposit.toFixed(0) : 0}</td>
                                        <td>{alSiddiqueTodayData?.closing !== undefined ? alSiddiqueTodayData.closing.toFixed(0) : 0}</td>
                                    </tr>

                                    <tr>
                                        <td>14</td>
                                        <td>Al Wali Power</td>
                                        <td>{alWaliTodayData?.supSaleAmount !== undefined ? alWaliTodayData.supSaleAmount.toFixed(0) : 0}</td>
                                        <td>{alWaliTodayData?.hsdSaleAmount !== undefined ? alWaliTodayData.hsdSaleAmount.toFixed(0) : 0}</td>
                                        <td>{alWaliTodayData?.totalSaleAmount !== undefined ? alWaliTodayData.totalSaleAmount.toFixed(0) : 0}</td>
                                        <td>{alWaliTodayData?.totalProfit !== undefined ? alWaliTodayData.totalProfit.toFixed(0) : 0}</td>
                                        <td>{alWaliTodayData?.totalExpense !== undefined ? alWaliTodayData.totalExpense.toFixed(0) : 0}</td>
                                        <td>{alWaliTodayData?.netProfit !== undefined ? alWaliTodayData.netProfit.toFixed(0) : 0}</td>
                                        <td>{alWaliTodayData?.bankDeposit !== undefined ? alWaliTodayData.bankDeposit.toFixed(0) : 0}</td>
                                        <td>{alWaliTodayData?.closing !== undefined ? alWaliTodayData.closing.toFixed(0) : 0}</td>
                                    </tr>



                                    <tr>
                                        <td>15</td>
                                        <td>ID Takhat Mahal</td>
                                        <td>{takhatMahalTodayData?.supSaleAmount !== undefined ? takhatMahalTodayData.supSaleAmount.toFixed(0) : 0}</td>
                                        <td>{takhatMahalTodayData?.hsdSaleAmount !== undefined ? takhatMahalTodayData.hsdSaleAmount.toFixed(0) : 0}</td>
                                        <td>{takhatMahalTodayData?.totalSaleAmount !== undefined ? takhatMahalTodayData.totalSaleAmount.toFixed(0) : 0}</td>
                                        <td>{takhatMahalTodayData?.totalProfit !== undefined ? takhatMahalTodayData.totalProfit.toFixed(0) : 0}</td>
                                        <td>{takhatMahalTodayData?.totalExpense !== undefined ? takhatMahalTodayData.totalExpense.toFixed(0) : 0}</td>
                                        <td>{takhatMahalTodayData?.netProfit !== undefined ? takhatMahalTodayData.netProfit.toFixed(0) : 0}</td>
                                        <td>{takhatMahalTodayData?.bankDeposit !== undefined ? takhatMahalTodayData.bankDeposit.toFixed(0) : 0}</td>
                                        <td>{takhatMahalTodayData?.closing !== undefined ? takhatMahalTodayData.closing.toFixed(0) : 0}</td>
                                    </tr>

                                    <tr>
                                        <td>16</td>
                                        <td>Siaa Filling</td>
                                        <td>{siaaStationTodayData?.supSaleAmount !== undefined ? siaaStationTodayData.supSaleAmount.toFixed(0) : 0}</td>
                                        <td>0</td>
                                        <td>{siaaStationTodayData?.totalSaleAmount !== undefined ? siaaStationTodayData.totalSaleAmount.toFixed(0) : 0}</td>
                                        <td>{siaaStationTodayData?.totalProfit !== undefined ? siaaStationTodayData.totalProfit.toFixed(0) : 0}</td>
                                        <td>{siaaStationTodayData?.totalExpense !== undefined ? siaaStationTodayData.totalExpense.toFixed(0) : 0}</td>
                                        <td>{siaaStationTodayData?.netProfit !== undefined ? siaaStationTodayData.netProfit.toFixed(0) : 0}</td>
                                        <td>{siaaStationTodayData?.bankDeposit !== undefined ? siaaStationTodayData.bankDeposit.toFixed(0) : 0}</td>
                                        <td>{siaaStationTodayData?.closing !== undefined ? siaaStationTodayData.closing.toFixed(0) : 0}</td>
                                    </tr>

                                    <tr >
                                        <th></th>
                                        <th>TOTAL</th>
                                        <th>{((aliPetroliumTodayData ? aliPetroliumTodayData.supSaleAmount : 0) + (awanBrotherTodayData ? awanBrotherTodayData.supSaleAmount : 0) + (babaFareedTodayData ? babaFareedTodayData.supSaleAmount : 0) + (bhattiPetroliumTodayData ? bhattiPetroliumTodayData.supSaleAmount : 0) + (go09TodayData ? go09TodayData.supSaleAmount : 0) + (dastgeerTodayData ? dastgeerTodayData.supSaleAmount : 0) + (go45TodayData ? go45TodayData.supSaleAmount : 0) + (idFillingStationTodayData ? idFillingStationTodayData.supSaleAmount : 0) + (jahangirPetroliumTodayData ? jahangirPetroliumTodayData.supSaleAmount : 0) + (khalidAndSonTodayData ? khalidAndSonTodayData.supSaleAmount : 0) + (nadirFillingStationsTodayData ? nadirFillingStationsTodayData.supSaleAmount : 0) + (noorPetroliumTodayData ? noorPetroliumTodayData.supSaleAmount : 0) + (alSiddiqueTodayData ? alSiddiqueTodayData.supSaleAmount : 0) + (alWaliTodayData ? alWaliTodayData.supSaleAmount : 0) + (takhatMahalTodayData ? takhatMahalTodayData.supSaleAmount : 0) + (siaaStationTodayData ? siaaStationTodayData.supSaleAmount : 0)).toFixed(0)}</th>
                                        <th>{((aliPetroliumTodayData ? aliPetroliumTodayData.hsdSaleAmount : 0) + (awanBrotherTodayData ? awanBrotherTodayData.hsdSaleAmount : 0) + (babaFareedTodayData ? babaFareedTodayData.hsdSaleAmount : 0) + (bhattiPetroliumTodayData ? bhattiPetroliumTodayData.hsdSaleAmount : 0) + (go09TodayData ? go09TodayData.hsdSaleAmount : 0)+ (dastgeerTodayData ? dastgeerTodayData.hsdSaleAmount : 0) + (go45TodayData ? go45TodayData.hsdSaleAmount : 0) + (idFillingStationTodayData ? idFillingStationTodayData.hsdSaleAmount : 0) + (jahangirPetroliumTodayData ? jahangirPetroliumTodayData.hsdSaleAmount : 0) + (khalidAndSonTodayData ? khalidAndSonTodayData.hsdSaleAmount : 0) + (nadirFillingStationsTodayData ? nadirFillingStationsTodayData.hsdSaleAmount : 0) + (noorPetroliumTodayData ? noorPetroliumTodayData.hsdSaleAmount : 0) + (alSiddiqueTodayData ? alSiddiqueTodayData.hsdSaleAmount : 0) + (alWaliTodayData ? alWaliTodayData.hsdSaleAmount : 0) + (takhatMahalTodayData ? takhatMahalTodayData.hsdSaleAmount : 0) + 0).toFixed(0)}</th>
                                        <th>{((aliPetroliumTodayData ? aliPetroliumTodayData.totalSaleAmount : 0) + (awanBrotherTodayData ? awanBrotherTodayData.totalSaleAmount : 0) + (babaFareedTodayData ? babaFareedTodayData.totalSaleAmount : 0) + (bhattiPetroliumTodayData ? bhattiPetroliumTodayData.totalSaleAmount : 0) + (go09TodayData ? go09TodayData.totalSaleAmount : 0) + (dastgeerTodayData ? dastgeerTodayData.totalSaleAmount : 0) + (go45TodayData ? go45TodayData.totalSaleAmount : 0) + (idFillingStationTodayData ? idFillingStationTodayData.totalSaleAmount : 0) + (jahangirPetroliumTodayData ? jahangirPetroliumTodayData.totalSaleAmount : 0) + (khalidAndSonTodayData ? khalidAndSonTodayData.totalSaleAmount : 0) + (nadirFillingStationsTodayData ? nadirFillingStationsTodayData.totalSaleAmount : 0) + (noorPetroliumTodayData ? noorPetroliumTodayData.totalSaleAmount : 0) + (alSiddiqueTodayData ? alSiddiqueTodayData.totalSaleAmount : 0) + (alWaliTodayData ? alWaliTodayData.totalSaleAmount : 0) + (takhatMahalTodayData ? takhatMahalTodayData.totalSaleAmount : 0) + (siaaStationTodayData ? siaaStationTodayData.totalSaleAmount : 0)).toFixed(0)}</th>
                                        <th>{((aliPetroliumTodayData ? aliPetroliumTodayData.totalProfit : 0) + (awanBrotherTodayData ? awanBrotherTodayData.totalProfit : 0) + (babaFareedTodayData ? babaFareedTodayData.totalProfit : 0) + (bhattiPetroliumTodayData ? bhattiPetroliumTodayData.totalProfit : 0) + (go09TodayData ? go09TodayData.totalProfit : 0) + (dastgeerTodayData ? dastgeerTodayData.totalProfit : 0)  + (go45TodayData ? go45TodayData.totalProfit : 0) + (idFillingStationTodayData ? idFillingStationTodayData.totalProfit : 0) + (jahangirPetroliumTodayData ? jahangirPetroliumTodayData.totalProfit : 0) + (khalidAndSonTodayData ? khalidAndSonTodayData.totalProfit : 0) + (nadirFillingStationsTodayData ? nadirFillingStationsTodayData.totalProfit : 0) + (noorPetroliumTodayData ? noorPetroliumTodayData.totalProfit : 0) + (alSiddiqueTodayData ? alSiddiqueTodayData.totalProfit : 0) + (alWaliTodayData ? alWaliTodayData.totalProfit : 0) + (takhatMahalTodayData ? takhatMahalTodayData.totalProfit : 0) + (siaaStationTodayData ? siaaStationTodayData.totalProfit : 0)).toFixed(0)}</th>
                                        <th>{((aliPetroliumTodayData ? aliPetroliumTodayData.totalExpense : 0) + (awanBrotherTodayData ? awanBrotherTodayData.totalExpense : 0) + (babaFareedTodayData ? babaFareedTodayData.totalExpense : 0) + (bhattiPetroliumTodayData ? bhattiPetroliumTodayData.totalExpense : 0) + (go09TodayData ? go09TodayData.totalExpense : 0) + (dastgeerTodayData ? dastgeerTodayData.totalExpense : 0) + (go45TodayData ? go45TodayData.totalExpense : 0) + (idFillingStationTodayData ? idFillingStationTodayData.totalExpense : 0) + (jahangirPetroliumTodayData ? jahangirPetroliumTodayData.totalExpense : 0) + (khalidAndSonTodayData ? khalidAndSonTodayData.totalExpense : 0) + (nadirFillingStationsTodayData ? nadirFillingStationsTodayData.totalExpense : 0) + (noorPetroliumTodayData ? noorPetroliumTodayData.totalExpense : 0) + (alSiddiqueTodayData ? alSiddiqueTodayData.totalExpense : 0) + (alWaliTodayData ? alWaliTodayData.totalExpense : 0) + (takhatMahalTodayData ? takhatMahalTodayData.totalExpense : 0) + (siaaStationTodayData ? siaaStationTodayData.totalExpense : 0)).toFixed(0)}</th>
                                        <th>{((aliPetroliumTodayData ? aliPetroliumTodayData.netProfit : 0) + (awanBrotherTodayData ? awanBrotherTodayData.netProfit : 0) + (babaFareedTodayData ? babaFareedTodayData.netProfit : 0) + (bhattiPetroliumTodayData ? bhattiPetroliumTodayData.netProfit : 0) + (go09TodayData ? go09TodayData.netProfit : 0) + (dastgeerTodayData ? dastgeerTodayData.netProfit : 0) + (go45TodayData ? go45TodayData.netProfit : 0) + (idFillingStationTodayData ? idFillingStationTodayData.netProfit : 0) + (jahangirPetroliumTodayData ? jahangirPetroliumTodayData.netProfit : 0) + (khalidAndSonTodayData ? khalidAndSonTodayData.netProfit : 0) + (nadirFillingStationsTodayData ? nadirFillingStationsTodayData.netProfit : 0) + (noorPetroliumTodayData ? noorPetroliumTodayData.netProfit : 0) + (alSiddiqueTodayData ? alSiddiqueTodayData.netProfit : 0) + (alWaliTodayData ? alWaliTodayData.netProfit : 0) + (takhatMahalTodayData ? takhatMahalTodayData.netProfit : 0) + (siaaStationTodayData ? siaaStationTodayData.netProfit : 0)).toFixed(0)}</th>
                                        <th>{((aliPetroliumTodayData ? aliPetroliumTodayData.bankDeposit : 0) + (awanBrotherTodayData ? awanBrotherTodayData.bankDeposit : 0) + (babaFareedTodayData ? babaFareedTodayData.bankDeposit : 0) + (bhattiPetroliumTodayData ? bhattiPetroliumTodayData.bankDeposit : 0) + (go09TodayData ? go09TodayData.bankDeposit : 0) + (dastgeerTodayData ? dastgeerTodayData.bankDeposit : 0) + (go45TodayData ? go45TodayData.bankDeposit : 0) + (idFillingStationTodayData ? idFillingStationTodayData.bankDeposit : 0) + (jahangirPetroliumTodayData ? jahangirPetroliumTodayData.bankDeposit : 0) + (khalidAndSonTodayData ? khalidAndSonTodayData.bankDeposit : 0) + (nadirFillingStationsTodayData ? nadirFillingStationsTodayData.bankDeposit : 0) + (noorPetroliumTodayData ? noorPetroliumTodayData.bankDeposit : 0) + (alSiddiqueTodayData ? alSiddiqueTodayData.bankDeposit : 0) + (alWaliTodayData ? alWaliTodayData.bankDeposit : 0) + (takhatMahalTodayData ? takhatMahalTodayData.bankDeposit : 0) + (siaaStationTodayData ? siaaStationTodayData.bankDeposit : 0)).toFixed(0)}</th>
                                        <th>{((aliPetroliumTodayData ? aliPetroliumTodayData.closing : 0) + (awanBrotherTodayData ? awanBrotherTodayData.closing : 0) + (babaFareedTodayData ? babaFareedTodayData.closing : 0) + (bhattiPetroliumTodayData ? bhattiPetroliumTodayData.closing : 0) + (go09TodayData ? go09TodayData.closing : 0) + (dastgeerTodayData ? dastgeerTodayData.closing : 0) + (go45TodayData ? go45TodayData.closing : 0) + (idFillingStationTodayData ? idFillingStationTodayData.closing : 0) + (jahangirPetroliumTodayData ? jahangirPetroliumTodayData.closing : 0) + (khalidAndSonTodayData ? khalidAndSonTodayData.closing : 0) + (nadirFillingStationsTodayData ? nadirFillingStationsTodayData.closing : 0) + (noorPetroliumTodayData ? noorPetroliumTodayData.closing : 0) + (alSiddiqueTodayData ? alSiddiqueTodayData.closing : 0) + (alWaliTodayData ? alWaliTodayData.closing : 0) + (takhatMahalTodayData ? takhatMahalTodayData.closing : 0) + (siaaStationTodayData ? siaaStationTodayData.closing : 0)).toFixed(0)}</th>
                                    </tr>
                                </tbody>
                            )
                            }

                        </table>
                    </div>


                </div>
                <button className='btn btn-danger text-light' onClick={generatePDF}>Generate Invoice</button>
            </div>
        </>
    )
}

export default TodayData
