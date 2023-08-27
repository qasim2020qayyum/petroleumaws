import React, { useEffect, useState } from 'react'
import NadirFillingStation from '../../Manager/AllPump/NadirFillingStation/NadirFillingStation';
import AddNadirFillingStationRates from './AddNadirFillingStationRates';

const CheckNadirFillingStationRates = () => {
    const [uData, setUData] = useState([]);
    
    const userData = async() =>{
        let res = await fetch(`${process.env.REACT_APP_BACKEND_URL_KEY}/joiya/rate/nadirFillingStations`)
        res = await res.json();    
        setUData(res)
    }
    useEffect(() => {
        userData()
    }, [uData])
  return (
    <div> 
      {
        uData.length >0 ? <NadirFillingStation/> : <AddNadirFillingStationRates/>
      }
    </div>
  )
}

export default CheckNadirFillingStationRates
