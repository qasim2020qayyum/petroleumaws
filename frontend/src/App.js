import React from "react";
import {Routes,Route} from "react-router-dom";
import Navbar from "./components/Landingpage/Navbar";
import Home from "./components/Landingpage/Home";
import Login from "./components/login/Login";
import Signup from "./components/Signup/Signup";
import Header from "./components/Landingpage/Header";
import Footer from "./components/Landingpage/Footer"; 
import { ToastContainer } from 'react-toastify'
import ManagerBoard from "./components/Manager/ManagerBoard";
import GetSingleAliPetroliumData from "./components/Manager/AllPump/AliPetrolium/AliPetroliumCRUD/GetSingleAliPetroliumData";
import EditAliPetrolium from "./components/Manager/AllPump/AliPetrolium/AliPetroliumCRUD/EditAliPetrolium";
import Workers from "./components/Manager/WorkersAndUsers/Workers/Workers";
import AddWorkers from "./components/Manager/WorkersAndUsers/Workers/AddWorkers";
import EditWorker from "./components/Manager/WorkersAndUsers/Workers/EditWorker";
import Users from "./components/Manager/WorkersAndUsers/Users/Users";
import CheckWorker from "./components/Manager/WorkersAndUsers/Workers/CheckWorker";
import CheckAliPetroliumData from "./components/Manager/AllPump/AliPetrolium/AliPetroliumCRUD/CheckAliPetroliumData";
import CheckAddAliPetrolium from "./components/Manager/AllPump/AliPetrolium/AliPetroliumCRUD/CheckAddAliPetrolium";
import CheckAddAlSiddiqueFillingStation from "./components/Manager/AllPump/AlSiddiqueFillingStation/AlSiddiqueFillingStationCRUD/CheckAddAlSiddiqueFillingStation";
import CheckAlSiddiqueFillingStationData from "./components/Manager/AllPump/AlSiddiqueFillingStation/AlSiddiqueFillingStationCRUD/CheckAlSiddiqueFillingStationData";
import GetSingleAlSiddiqueFillingStationData from "./components/Manager/AllPump/AlSiddiqueFillingStation/AlSiddiqueFillingStationCRUD/GetSingleAlSiddiqueFillingStationData";
import EditAlSiddiqueFillingStation from "./components/Manager/AllPump/AlSiddiqueFillingStation/AlSiddiqueFillingStationCRUD/EditAlSiddiqueFillingStation";
import CheckAddAwanBrother from "./components/Manager/AllPump/AwanBrother/AwanBrotherCRUD/CheckAddAwanBrother";
import CheckAwanBrotherData from "./components/Manager/AllPump/AwanBrother/AwanBrotherCRUD/CheckAwanBrotherData";
import GetSingleAwanBrotherData from "./components/Manager/AllPump/AwanBrother/AwanBrotherCRUD/GetSingleAwanBrotherData";
import EditAwanBrother from "./components/Manager/AllPump/AwanBrother/AwanBrotherCRUD/EditAwanBrother";
import BabaFareedFillingStaion from "./components/Manager/AllPump/BabaFareedFillingStation/BabaFareedFillingStaion";
import CheckAddBabaFareedFillingStaion from "./components/Manager/AllPump/BabaFareedFillingStation/BabaFareedFillingStationCRUD/CheckAddBabaFareedFillingStaion";
import CheckBabaFareedFillingStaionData from "./components/Manager/AllPump/BabaFareedFillingStation/BabaFareedFillingStationCRUD/CheckBabaFareedFillingStaionData";
import GetSingleBabaFareedFillingStaionData from "./components/Manager/AllPump/BabaFareedFillingStation/BabaFareedFillingStationCRUD/GetSingleBabaFareedFillingStaionData";
import EditBabaFareedFillingStaion from "./components/Manager/AllPump/BabaFareedFillingStation/BabaFareedFillingStationCRUD/EditBabaFareedFillingStaion";
import BhattiPetrolium from "./components/Manager/AllPump/BhattiPetrolium/BhattiPetrolium";
import CheckAddBhattiPetrolium from "./components/Manager/AllPump/BhattiPetrolium/BhattiPetroliumCRUD/CheckAddBhattiPetrolium";
import CheckBhattiPetroliumData from "./components/Manager/AllPump/BhattiPetrolium/BhattiPetroliumCRUD/CheckBhattiPetroliumData";
import GetSingleBhattiPetroliumData from "./components/Manager/AllPump/BhattiPetrolium/BhattiPetroliumCRUD/GetSingleBhattiPetroliumData";
import EditBhattiPetrolium from "./components/Manager/AllPump/BhattiPetrolium/BhattiPetroliumCRUD/EditBhattiPetrolium";
import Go09 from "./components/Manager/AllPump/Go09/Go09";
import CheckAddGo09 from "./components/Manager/AllPump/Go09/Go09CRUD/CheckAddGo09";
import CheckGo09Data from "./components/Manager/AllPump/Go09/Go09CRUD/CheckGo09Data";
import GetSingleGo09Data from "./components/Manager/AllPump/Go09/Go09CRUD/GetSingleGo09Data";
import EditGo09 from "./components/Manager/AllPump/Go09/Go09CRUD/EditGo09";
import Go45 from "./components/Manager/AllPump/Go45/Go45";
import GetSingleGo45Data from "./components/Manager/AllPump/Go45/Go45CRUD/GetSingleGo45Data";
import CheckAddGo45 from "./components/Manager/AllPump/Go45/Go45CRUD/CheckAddGo45";
import CheckGo45Data from "./components/Manager/AllPump/Go45/Go45CRUD/CheckGo45Data";
import EditGo45 from "./components/Manager/AllPump/Go45/Go45CRUD/EditGo45";
import KhalidAndSonsPSO from "./components/Manager/AllPump/KhalidAndSonsPSO/KhalidAndSonsPSO";
import CheckAddKhalidAndSonsPSO from "./components/Manager/AllPump/KhalidAndSonsPSO/KhalidAndSonsPSOCRUD/CheckAddKhalidAndSonsPSO";
import CheckKhalidAndSonsPSOData from "./components/Manager/AllPump/KhalidAndSonsPSO/KhalidAndSonsPSOCRUD/CheckKhalidAndSonsPSOData";
import GetSingleKhalidAndSonsPSOData from "./components/Manager/AllPump/KhalidAndSonsPSO/KhalidAndSonsPSOCRUD/GetSingleKhalidAndSonsPSOData";
import EditKhalidAndSonsPSO from "./components/Manager/AllPump/KhalidAndSonsPSO/KhalidAndSonsPSOCRUD/EditKhalidAndSonsPSO";
import NoorPetrolium from "./components/Manager/AllPump/NoorPetrolium/NoorPetrolium";
import CheckAddNoorPetrolium from "./components/Manager/AllPump/NoorPetrolium/NoorPetroliumCRUD/CheckAddNoorPetrolium";
import CheckNoorPetroliumData from "./components/Manager/AllPump/NoorPetrolium/NoorPetroliumCRUD/CheckNoorPetroliumData";
import GetSingleNoorPetroliumData from "./components/Manager/AllPump/NoorPetrolium/NoorPetroliumCRUD/GetSingleNoorPetroliumData";
import EditNoorPetrolium from "./components/Manager/AllPump/NoorPetrolium/NoorPetroliumCRUD/EditNoorPetrolium";
import IDFillingStation from "./components/Manager/AllPump/IDFillingStation/IDFillingStation";
import CheckAddIDFillingStation from "./components/Manager/AllPump/IDFillingStation/IDFillingStationCRUD/CheckAddIDFillingStation";
import CheckIDFillingStationData from "./components/Manager/AllPump/IDFillingStation/IDFillingStationCRUD/CheckIDFillingStationData";
import GetSingleIDFillingStationData from "./components/Manager/AllPump/IDFillingStation/IDFillingStationCRUD/GetSingleIDFillingStationData";
import EditIDFillingStation from "./components/Manager/AllPump/IDFillingStation/IDFillingStationCRUD/EditIDFillingStation";
import JahangirPetroliumService from "./components/Manager/AllPump/JahangirPetroliumService/JahangirPetroliumService";
import CheckAddJahangirPetroliumService from "./components/Manager/AllPump/JahangirPetroliumService/JahangirPetroliumServiceCRUD/CheckAddJahangirPetroliumService";
import CheckJahangirPetroliumServiceData from "./components/Manager/AllPump/JahangirPetroliumService/JahangirPetroliumServiceCRUD/CheckJahangirPetroliumServiceData";
import GetSingleJahangirPetroliumServiceData from "./components/Manager/AllPump/JahangirPetroliumService/JahangirPetroliumServiceCRUD/GetSingleJahangirPetroliumServiceData";
import EditJahangirPetroliumService from "./components/Manager/AllPump/JahangirPetroliumService/JahangirPetroliumServiceCRUD/EditJahangirPetroliumService";
import NadirFillingStation from "./components/Manager/AllPump/NadirFillingStation/NadirFillingStation";
import CheckAddNadirFillingStation from "./components/Manager/AllPump/NadirFillingStation/NadirFillingStationCRUD/CheckAddNadirFillingStation";
import CheckNadirFillingStationData from "./components/Manager/AllPump/NadirFillingStation/NadirFillingStationCRUD/CheckNadirFillingStationData";
import GetSingleNadirFillingStationData from "./components/Manager/AllPump/NadirFillingStation/NadirFillingStationCRUD/GetSingleNadirFillingStationData";
import EditNadirFillingStation from "./components/Manager/AllPump/NadirFillingStation/NadirFillingStationCRUD/EditNadirFillingStation";
import SiaaFillingStation from "./components/Manager/AllPump/SiaaFillingStation/SiaaFillingStation";
import CheckAddSiaaFillingStation from "./components/Manager/AllPump/SiaaFillingStation/SiaaFillingStationCRUD/CheckAddSiaaFillingStation";
import CheckSiaaFillingStationData from "./components/Manager/AllPump/SiaaFillingStation/SiaaFillingStationCRUD/CheckSiaaFillingStationData";
import GetSingleSiaaFillingStationData from "./components/Manager/AllPump/SiaaFillingStation/SiaaFillingStationCRUD/GetSingleSiaaFillingStationData";
import EditSiaaFillingStation from "./components/Manager/AllPump/SiaaFillingStation/SiaaFillingStationCRUD/EditSiaaFillingStation";
import PrivateRoutes from "./components/login/PrivateRoutes";
import About from "./components/Landingpage/About";
import Services from "./components/Landingpage/Services";


import UpdateAliPetroliumRates from "./components/PetrolAndDeiselRate/AliPetroliumRates/UpdateAliPetroliumRates";
import CheckAliPetroliumRates from "./components/PetrolAndDeiselRate/AliPetroliumRates/CheckAliPetroliumRates";
import CheckAlSiddiqueFillingStationRates from "./components/PetrolAndDeiselRate/AlSiddiqueFillingStationRates/CheckAlSiddiqueFillingStationRates";
import UpdateAlSiddiqueFillingStationRates from "./components/PetrolAndDeiselRate/AlSiddiqueFillingStationRates/UpdateCheckAlSiddiqueFillingStationRatesRates";
import CheckAwanBrotherRates from "./components/PetrolAndDeiselRate/AwanBrother/CheckAwanBrotherRates";
import UpdateAwanBrotherRates from "./components/PetrolAndDeiselRate/AwanBrother/UpdateAwanBrotherRates";
import CheckBabaFareedFillingStaionRates from "./components/PetrolAndDeiselRate/BabaFareedFillingStaion/CheckBabaFareedFillingStaionRates";
import UpdateBabaFareedFillingStaionRates from "./components/PetrolAndDeiselRate/BabaFareedFillingStaion/UpdateBabaFareedFillingStaionRates";
import CheckBhattiPetroliumRates from "./components/PetrolAndDeiselRate/BhattiPetrolium/CheckBhattiPetroliumRates";
import UpdateBhattiPetroliumRates from "./components/PetrolAndDeiselRate/BhattiPetrolium/UpdateBhattiPetroliumRates";
import CheckGo09Rates from "./components/PetrolAndDeiselRate/Go09/CheckGo09Rates";
import UpdateGo09Rates from "./components/PetrolAndDeiselRate/Go09/UpdateGo09Rates";
import CheckGo45Rates from "./components/PetrolAndDeiselRate/Go45/CheckGo45Rates";
import UpdateGo45Rates from "./components/PetrolAndDeiselRate/Go45/UpdateGo45Rates";
import CheckIDFillingStationRates from "./components/PetrolAndDeiselRate/IDFillingStation/CheckIDFillingStationRates";
import UpdateIDFillingStationRates from "./components/PetrolAndDeiselRate/IDFillingStation/UpdateIDFillingStationRates";
import CheckJahangirPetroliumServiceRates from "./components/PetrolAndDeiselRate/JahangirPetroliumService/CheckJahangirPetroliumServiceRates";
import UpdateJahangirPetroliumServiceRates from "./components/PetrolAndDeiselRate/JahangirPetroliumService/UpdateJahangirPetroliumServiceRates";
import CheckKhalidAndSonsPSORates from "./components/PetrolAndDeiselRate/KhalidAndSonsPSO/CheckKhalidAndSonsPSORates";
import UpdatekhalidAndSonServiceRates from "./components/PetrolAndDeiselRate/KhalidAndSonsPSO/UpdateKhalidAndSonsPSORates";
import CheckNadirFillingStationRates from "./components/PetrolAndDeiselRate/NadirFillingStation/CheckNadirFillingStationRates";
import UpdateNadirFillingStationRates from "./components/PetrolAndDeiselRate/NadirFillingStation/UpdateNadirFillingStationRates";
import CheckNoorPetroliumRates from "./components/PetrolAndDeiselRate/NoorPetrolium/CheckNoorPetroliumRates";
import UpdateNoorPetroliumRates from "./components/PetrolAndDeiselRate/NoorPetrolium/UpdateNoorPetroliumRates";
import CheckSiaaFillingStationRates from "./components/PetrolAndDeiselRate/SiaaFillingStation/CheckSiaaFillingStationRates";
import UpdateSiaaFillingStationRates from "./components/PetrolAndDeiselRate/SiaaFillingStation/UpdateSiaaFillingStationRates";
import TodayData from "./components/Manager/AllPump/TodayData";
import CheckAlWaliRates from "./components/PetrolAndDeiselRate/AlWaliRates/CheckAlWaliRates";
import UpdateAlWaliRates from "./components/PetrolAndDeiselRate/AlWaliRates/UpdateAlWaliRates";
import CheckAddAlWali from "./components/Manager/AllPump/AlWali/AlWaliCRUD/CheckAddAlWali";
import CheckAlWaliData from "./components/Manager/AllPump/AlWali/AlWaliCRUD/CheckAlWaliData";
import GetSingleAlWaliData from "./components/Manager/AllPump/AlWali/AlWaliCRUD/GetSingleAlWaliData";
import EditAlWali from "./components/Manager/AllPump/AlWali/AlWaliCRUD/EditAlWali";
import EditTakhatMahal from "./components/Manager/AllPump/takhatMahal/TakhatMahalCRUD/EditTakhatMahal";
import GetSingleTakhatMahalData from "./components/Manager/AllPump/takhatMahal/TakhatMahalCRUD/GetSingleTakhatMahalData";
import CheckTakhatMahalData from "./components/Manager/AllPump/takhatMahal/TakhatMahalCRUD/CheckTakhatMahalData";
import CheckAddTakhatMahal from "./components/Manager/AllPump/takhatMahal/TakhatMahalCRUD/CheckAddTakhatMahal";
import CheckTakhatMahalRates from "./components/PetrolAndDeiselRate/TakhatMahalRates/CheckTakhatMahalRates";
import UpdateTakhatMahalRates from "./components/PetrolAndDeiselRate/TakhatMahalRates/UpdateTakhatMahalRates";
import CheckDastgeerRates from "./components/PetrolAndDeiselRate/Dastgeer/CheckDastgeerRates";
import UpdateDastgeerRates from "./components/PetrolAndDeiselRate/Dastgeer/UpdateDastgeerRates";
import CheckAddDastgeer from "./components/Manager/AllPump/Dastgeer/DastgeerCrud/CheckAddDastgeer";
import CheckDastgeerData from "./components/Manager/AllPump/Dastgeer/DastgeerCrud/CheckDastgeerData";
import GetSingleDastgeerData from "./components/Manager/AllPump/Dastgeer/DastgeerCrud/GetSingleDastgeerData";
import EditDastgeer from "./components/Manager/AllPump/Dastgeer/DastgeerCrud/EditDastgeer";
function App() {
  return (
    <div>
      {/* process.env.REACT_APP_BACKEND_URL_KEY  */}
      <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          
          <Route path="/nav" element={<Navbar />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          
          
          <Route element={<PrivateRoutes/>}>

          <Route path="/admin-Dashboard" element={<ManagerBoard/>} />

          {/* ali petrolium  */}

          <Route path='/ali-petrolium' element={<CheckAliPetroliumRates />} />
          <Route path='/edit-ali-petrolium-rates/:id' element={<UpdateAliPetroliumRates />} />
          
          <Route path='/ali-petrolium/add-todays-data' element={<CheckAddAliPetrolium />} />
          <Route path='/ali-petrolium/get-all-data' element={<CheckAliPetroliumData />} />
          <Route path='/ali-petrolium-details/:id' element={<GetSingleAliPetroliumData />} />
          <Route path='/edit-ali-petrolium-data/:id' element={<EditAliPetrolium />} />

          {/* al-siddique-filling-station */}

          <Route path='/al-siddique-filling-station' element={<CheckAlSiddiqueFillingStationRates/>} />
          <Route path='/edit-al-siddique-filling-station-rates/:id' element={<UpdateAlSiddiqueFillingStationRates />} />

          <Route path='/al-siddique-filling-station/add-todays-data' element={<CheckAddAlSiddiqueFillingStation />} />
          <Route path='/al-siddique-filling-station/get-all-data' element={<CheckAlSiddiqueFillingStationData />} />
          <Route path='/al-siddique-filling-station-details/:id' element={<GetSingleAlSiddiqueFillingStationData />} />
          <Route path='/edit-al-siddique-filling-station-data/:id' element={<EditAlSiddiqueFillingStation />} />

          {/* Awan Brother */}
          <Route path='/awan-brother' element={<CheckAwanBrotherRates/>} />
          <Route path='/edit-awan-brother-rates/:id' element={<UpdateAwanBrotherRates />} />

          <Route path='/awan-brother/add-todays-data' element={<CheckAddAwanBrother />} />
          <Route path='/awan-brother/get-all-data' element={<CheckAwanBrotherData />} />
          <Route path='/awan-brother-details/:id' element={<GetSingleAwanBrotherData />} />
          <Route path='/edit-awan-brother-data/:id' element={<EditAwanBrother />} />

          {/* Baba Fareed Filling Staion*/}
          <Route path='/baba-fareed-filling-station' element={<CheckBabaFareedFillingStaionRates/>} />
          <Route path='/edit-baba-fareed-filling-station-rates/:id' element={<UpdateBabaFareedFillingStaionRates />} />

          <Route path='/baba-fareed-filling-station/add-todays-data' element={<CheckAddBabaFareedFillingStaion />} />
          <Route path='/baba-fareed-filling-station/get-all-data' element={<CheckBabaFareedFillingStaionData />} />
          <Route path='/baba-fareed-filling-station-details/:id' element={<GetSingleBabaFareedFillingStaionData />} />
          <Route path='/edit-baba-fareed-filling-station-data/:id' element={<EditBabaFareedFillingStaion />} />

          {/* Bhatti Petrolium*/}
          <Route path='/bhatti-petrolium' element={<CheckBhattiPetroliumRates/>} />
          <Route path='/edit-bhatti-petrolium-rates/:id' element={<UpdateBhattiPetroliumRates />} />

          <Route path='/bhatti-petrolium/add-todays-data' element={<CheckAddBhattiPetrolium />} />
          <Route path='/bhatti-petrolium/get-all-data' element={<CheckBhattiPetroliumData />} />
          <Route path='/bhatti-petrolium-details/:id' element={<GetSingleBhattiPetroliumData />} />
          <Route path='/edit-bhatti-petrolium-data/:id' element={<EditBhattiPetrolium />} />

          {/*Dastgeer Filling Station*/}
          <Route path='/dastgeer-filling-station' element={<CheckDastgeerRates/>} />
          <Route path='/edit-dastgeer-filling-station-rates/:id' element={<UpdateDastgeerRates />} />

          <Route path='/dastgeer-filling-station/add-todays-data' element={<CheckAddDastgeer />} />
          <Route path='/dastgeer-filling-station/get-all-data' element={<CheckDastgeerData />} />
          <Route path='/dastgeer-filling-station-details/:id' element={<GetSingleDastgeerData />} />
          <Route path='/edit-dastgeer-filling-station-data/:id' element={<EditDastgeer />} />

          {/* Go 09*/}
          <Route path='/go-09' element={<CheckGo09Rates/>} />
          <Route path='/edit-go-09-rates/:id' element={<UpdateGo09Rates />} />

          <Route path='/go-09/add-todays-data' element={<CheckAddGo09 />} />
          <Route path='/go-09/get-all-data' element={<CheckGo09Data />} />
          <Route path='/go-09-details/:id' element={<GetSingleGo09Data />} />
          <Route path='/edit-go-09-data/:id' element={<EditGo09 />} />

          {/* Go 45*/}
          <Route path='/go-45' element={<CheckGo45Rates/>} />
          <Route path='/edit-go-45-rates/:id' element={<UpdateGo45Rates />} />

          <Route path='/go-45/add-todays-data' element={<CheckAddGo45 />} />
          <Route path='/go-45/get-all-data' element={<CheckGo45Data />} />
          <Route path='/go-45-details/:id' element={<GetSingleGo45Data />} />
          <Route path='/edit-go-45-data/:id' element={<EditGo45 />} />

          {/* Id Filling station*/}
          <Route path='/id-filling-station' element={<CheckIDFillingStationRates/>} />
          <Route path='/edit-id-filling-station-rates/:id' element={<UpdateIDFillingStationRates />} />

          <Route path='/id-filling-station/add-todays-data' element={<CheckAddIDFillingStation />} />
          <Route path='/id-filling-station/get-all-data' element={<CheckIDFillingStationData />} />
          <Route path='/id-filling-station-details/:id' element={<GetSingleIDFillingStationData />} />
          <Route path='/edit-id-filling-station-data/:id' element={<EditIDFillingStation />} />
         
          {/* Id Takhat Mahal*/}

          <Route path='/id-takhat-mahal' element={<CheckTakhatMahalRates />} />
          <Route path='/edit-id-takhat-mahal-rates/:id' element={<UpdateTakhatMahalRates />} />

          <Route path='/id-takhat-mahal/add-todays-data' element={<CheckAddTakhatMahal />} />
          <Route path='/id-takhat-mahal/get-all-data' element={<CheckTakhatMahalData />} />
          <Route path='/id-takhat-mahal-details/:id' element={<GetSingleTakhatMahalData />} />
          <Route path='/edit-id-takhat-mahal-data/:id' element={<EditTakhatMahal />} />

          {/* Jahangir petrolium service*/}
          <Route path='/jahangir-petrolium-service' element={<CheckJahangirPetroliumServiceRates/>} />
          <Route path='/edit-jahangir-petrolium-service-rates/:id' element={<UpdateJahangirPetroliumServiceRates />} />

          <Route path='/jahangir-petrolium-service/add-todays-data' element={<CheckAddJahangirPetroliumService />} />
          <Route path='/jahangir-petrolium-service/get-all-data' element={<CheckJahangirPetroliumServiceData />} />
          <Route path='/jahangir-petrolium-service-details/:id' element={<GetSingleJahangirPetroliumServiceData />} />
          <Route path='/edit-jahangir-petrolium-service-data/:id' element={<EditJahangirPetroliumService />} />

          {/* Khalid And Sons Pso*/}
          <Route path='/khalid-&-sons-pso' element={<CheckKhalidAndSonsPSORates/>} />
          <Route path='/edit-khalid-&-sons-pso-rates/:id' element={<UpdatekhalidAndSonServiceRates />} />

          <Route path='/khalid-&-sons-pso/add-todays-data' element={<CheckAddKhalidAndSonsPSO />} />
          <Route path='/khalid-&-sons-pso/get-all-data' element={<CheckKhalidAndSonsPSOData />} />
          <Route path='/khalid-&-sons-pso-details/:id' element={<GetSingleKhalidAndSonsPSOData />} />
          <Route path='/edit-khalid-&-sons-pso-data/:id' element={<EditKhalidAndSonsPSO />} />
          
          {/* nadir Filling station*/}
          <Route path='/nadir-filling-station' element={<CheckNadirFillingStationRates/>} />
          <Route path='/edit-nadir-filling-station-rates/:id' element={<UpdateNadirFillingStationRates />} />

          <Route path='/nadir-filling-station/add-todays-data' element={<CheckAddNadirFillingStation />} />
          <Route path='/nadir-filling-station/get-all-data' element={<CheckNadirFillingStationData />} />
          <Route path='/nadir-filling-station-details/:id' element={<GetSingleNadirFillingStationData />} />
          <Route path='/edit-nadir-filling-station-data/:id' element={<EditNadirFillingStation />} />

          {/* Noor Petrolium*/}
          <Route path='/noor-petrolium' element={<CheckNoorPetroliumRates/>} />
          <Route path='/edit-noor-petrolium-rates/:id' element={<UpdateNoorPetroliumRates />} />

          <Route path='/noor-petrolium/add-todays-data' element={<CheckAddNoorPetrolium />} />
          <Route path='/noor-petrolium/get-all-data' element={<CheckNoorPetroliumData />} />
          <Route path='/noor-petrolium-details/:id' element={<GetSingleNoorPetroliumData />} />
          <Route path='/edit-noor-petrolium-data/:id' element={<EditNoorPetrolium />} />

          {/* Siaa Filling Station*/}
          <Route path='/siaa-filling-station' element={<CheckSiaaFillingStationRates/>} />
          <Route path='/edit-siaa-filling-station-rates/:id' element={<UpdateSiaaFillingStationRates />} />

          <Route path='/siaa-filling-station/add-todays-data' element={<CheckAddSiaaFillingStation />} />
          <Route path='/siaa-filling-station/get-all-data' element={<CheckSiaaFillingStationData />} />
          <Route path='/siaa-filling-station-details/:id' element={<GetSingleSiaaFillingStationData />} />
          <Route path='/edit-siaa-filling-station-data/:id' element={<EditSiaaFillingStation />} />

          {/* Al Wali*/}
          <Route path='/al-wali-power-station' element={<CheckAlWaliRates/>} />
          <Route path='/edit-al-wali-power-station-rates/:id' element={<UpdateAlWaliRates />} />

          <Route path='/al-wali-power-station/add-todays-data' element={<CheckAddAlWali />} />
          <Route path='/al-wali-power-station/get-all-data' element={<CheckAlWaliData />} />
          <Route path='/al-wali-power-station-details/:id' element={<GetSingleAlWaliData />} />
          <Route path='/edit-al-wali-power-station-data/:id' element={<EditAlWali />} />

          {/* worker  */}
          <Route path='/workers' element={<Workers />} />
          <Route path='/all-worker' element={<CheckWorker />} />
          <Route path='/users' element={<Users />} />
          <Route path='/add-worker' element={<AddWorkers />} />
          <Route path='/edit-worker/:id' element={<EditWorker />} />

          {/* today-data */}
          <Route path='/today-data' element={<TodayData />} />

          </Route>
        </Routes>
      <Footer/>
      <ToastContainer theme="dark"/>
    </div>
  );
}

export default App;
