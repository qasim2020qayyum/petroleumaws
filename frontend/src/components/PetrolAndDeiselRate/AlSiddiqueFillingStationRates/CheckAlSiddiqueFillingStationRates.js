import React, { useEffect, useState } from 'react'
import AlSiddiqueFillingStation from '../../Manager/AllPump/AlSiddiqueFillingStation/AlSiddiqueFillingStation';
import AddAlSiddiqueFillingStationRates from './AddAlSiddiqueFillingStationRates';

const CheckAlSiddiqueFillingStationRates = () => {
    const [uData, setUData] = useState([]);
    
    const userData = async() =>{
        let res = await fetch(`${process.env.REACT_APP_BACKEND_URL_KEY}/joiya/rate/alSiddique`)
        res = await res.json();    
        setUData(res)
    }
    useEffect(() => {
        userData()
    }, [uData])
  return (
    <div> 
      {
        uData.length >0 ? <AlSiddiqueFillingStation/> : <AddAlSiddiqueFillingStationRates/>
      }
    </div>
  )
}

export default CheckAlSiddiqueFillingStationRates
