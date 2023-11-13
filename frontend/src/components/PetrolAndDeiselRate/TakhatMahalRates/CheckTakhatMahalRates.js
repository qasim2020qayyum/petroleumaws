import React, { useEffect, useState } from 'react'
import AddTakhatMahalRates from './AddTakhatMahalRates';
import TakhatMahalControl from '../../Manager/AllPump/takhatMahal/TakhatMahalControl';

const CheckTakhatMahalRates = () => {
    const [uData, setUData] = useState([]);
    const userData = async() =>{
        let res = await fetch(`${process.env.REACT_APP_BACKEND_URL_KEY}/joiya/rate/TakhatMahal`)
        res = await res.json();    
        setUData(res)
    }
    useEffect(() => {
        userData()
    }, [uData])
  return (
    <div> 
      {
        uData.length >0 ? <TakhatMahalControl/> : <AddTakhatMahalRates/>
      }
    </div>
  )
}

export default CheckTakhatMahalRates