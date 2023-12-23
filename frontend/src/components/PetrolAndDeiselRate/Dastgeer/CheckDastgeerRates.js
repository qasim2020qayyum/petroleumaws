import React, { useEffect, useState } from 'react'
import Dastgeer from '../../Manager/AllPump/Dastgeer/Dastgeer';
import AddDastgeerRates from './AddDastgeerRates';

const CheckDastgeerRates = () => {
    const [uData, setUData] = useState([]);
    const userData = async() =>{
        let res = await fetch(`${process.env.REACT_APP_BACKEND_URL_KEY}/joiya/rate/dastgeer`)
        res = await res.json();    
        setUData(res)
    }
    useEffect(() => {
        userData()
    }, [uData])
  return (
    <div> 
      {
        uData.length >0 ? <Dastgeer/> : <AddDastgeerRates/>
      }
    </div>
  )
}

export default CheckDastgeerRates
