import React, { useEffect, useState } from 'react'
import Go09 from '../../Manager/AllPump/Go09/Go09';
import AddGo09Rates from './AddGo09Rates';

const CheckGo09Rates = () => {
    const [uData, setUData] = useState([]);
    
    const userData = async() =>{
        let res = await fetch(`${process.env.REACT_APP_BACKEND_URL_KEY}/joiya/rate/go09`)
        res = await res.json();    
        setUData(res)
    }
    useEffect(() => {
        userData()
    }, [uData])
  return (
    <div> 
      {
        uData.length >0 ? <Go09/> : <AddGo09Rates/>
      }
    </div>
  )
}

export default CheckGo09Rates
