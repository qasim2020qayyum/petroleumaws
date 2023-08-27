import React, { useEffect, useState } from 'react'
import BabaFareedFillingStaion from '../../Manager/AllPump/BabaFareedFillingStation/BabaFareedFillingStaion';
import AddBabaFareedFillingStaionRates from './AddBabaFareedFillingStaionRates';

const CheckBabaFareedFillingStaionRates = () => {
    const [uData, setUData] = useState([]);
    
    const userData = async() =>{
        let res = await fetch(`${process.env.REACT_APP_BACKEND_URL_KEY}/joiya/rate/babafareed`)
        res = await res.json();    
        setUData(res)
    }
    useEffect(() => {
        userData()
    }, [uData])
  return (
    <div> 
      {
        uData.length >0 ? <BabaFareedFillingStaion/> : <AddBabaFareedFillingStaionRates/>
      }
    </div>
  )
}

export default CheckBabaFareedFillingStaionRates
