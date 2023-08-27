import React, { useEffect, useState } from 'react'
import DataNotAdded from '../../../DataNotAdded';
import GetAlSiddiqueFillingStation from './GetAlSiddiqueFillingStation';

const CheckAlSiddiqueFillingStationData = () => {
    const [uData, setUData] = useState([]);
    
    const userData = async() =>{
        let res = await fetch(`${process.env.REACT_APP_BACKEND_URL_KEY}/joiya/alSiddique/data/reverse`)
        res = await res.json();    
        setUData(res)
    }
    useEffect(() => {
        userData()
    }, [uData])
  return (
    <div> 
      {
        uData.length >0 ? <GetAlSiddiqueFillingStation/> : <DataNotAdded/>
      }
    </div>
  )
}

export default CheckAlSiddiqueFillingStationData
