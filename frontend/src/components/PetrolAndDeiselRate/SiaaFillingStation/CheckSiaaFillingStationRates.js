import React, { useEffect, useState } from 'react'
import SiaaFillingStation from '../../Manager/AllPump/SiaaFillingStation/SiaaFillingStation';
import AddSiaaFillingStationRates from './AddSiaaFillingStationRates';

const CheckSiaaFillingStationRates = () => {
    const [uData, setUData] = useState([]);
    
    const userData = async() =>{
        let res = await fetch(`${process.env.REACT_APP_BACKEND_URL_KEY}/joiya/rate/siaaFillingStation`)
        res = await res.json();    
        setUData(res)
    }
    useEffect(() => {
        userData()
    }, [uData])
  return (
    <div> 
      {
        uData.length >0 ? <SiaaFillingStation/> : <AddSiaaFillingStationRates/>
      }
    </div>
  )
}

export default CheckSiaaFillingStationRates
