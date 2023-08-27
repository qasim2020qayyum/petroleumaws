import React, { useEffect, useState } from 'react'
import Go45 from '../../Manager/AllPump/Go45/Go45';
import AddGo45Rates from './AddGo45Rates';

const CheckGo45Rates = () => {
    const [uData, setUData] = useState([]);
    
    const userData = async() =>{
        let res = await fetch(`${process.env.REACT_APP_BACKEND_URL_KEY}/joiya/rate/go45`)
        res = await res.json();    
        setUData(res)
    }
    useEffect(() => {
        userData()
    }, [uData])
  return (
    <div> 
      {
        uData.length >0 ? <Go45/> : <AddGo45Rates/>
      }
    </div>
  )
}

export default CheckGo45Rates
