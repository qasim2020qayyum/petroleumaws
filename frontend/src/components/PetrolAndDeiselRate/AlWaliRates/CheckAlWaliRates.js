import React, { useEffect, useState } from 'react'
import AlWali from '../../Manager/AllPump/AlWali/AlWali';
import AddAlWaliRates from './AddAlWaliRates';

const CheckAlWaliRates = () => {
    const [uData, setUData] = useState([]);
    
    const userData = async() =>{
        let res = await fetch(`${process.env.REACT_APP_BACKEND_URL_KEY}/joiya/rate/alwali`)
        res = await res.json();    
        setUData(res)
    }
    useEffect(() => {
        userData()
    }, [uData])
  return (
    <div> 
      {
        uData.length >0 ? <AlWali/> : <AddAlWaliRates/>
      }
    </div>
  )
}

export default CheckAlWaliRates
