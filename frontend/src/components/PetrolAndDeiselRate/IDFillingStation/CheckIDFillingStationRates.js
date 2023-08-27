import React, { useEffect, useState } from 'react'
import IDFillingStation from '../../Manager/AllPump/IDFillingStation/IDFillingStation';
import AddIDFillingStationRates from './AddIDFillingStationRates';

const CheckIDFillingStationRates = () => {
    const [uData, setUData] = useState([]);
    
    const userData = async() =>{
        let res = await fetch(`${process.env.REACT_APP_BACKEND_URL_KEY}/joiya/rate/idFillingStation`)
        res = await res.json();    
        setUData(res)
    }
    useEffect(() => {
        userData()
    }, [uData])
  return (
    <div> 
      {
        uData.length >0 ? <IDFillingStation/> : <AddIDFillingStationRates/>
      }
    </div>
  )
}

export default CheckIDFillingStationRates
