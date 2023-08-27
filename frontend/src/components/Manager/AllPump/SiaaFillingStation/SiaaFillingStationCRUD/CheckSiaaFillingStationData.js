import React, { useEffect, useState } from 'react'
import DataNotAdded from '../../../DataNotAdded';
import GetSiaaFillingStation from './GetSiaaFillingStation';

const CheckSiaaFillingStationData = () => {
    const [uData, setUData] = useState([]);
    
    const userData = async() =>{
        let res = await fetch(`${process.env.REACT_APP_BACKEND_URL_KEY}/joiya/siaaFillingStation/data/reverse`)
        res = await res.json();    
        setUData(res)
    }
    useEffect(() => {
        userData()
    }, [uData])
  return (
    <div> 
      {
        uData.length >0 ? <GetSiaaFillingStation/> : <DataNotAdded/>
      }
    </div>
  )
}

export default CheckSiaaFillingStationData
