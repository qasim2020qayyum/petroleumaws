import React, { useEffect, useState } from 'react'
import DataNotAdded from '../../../DataNotAdded';
import GetDastgeer from './GetDastgeer';

const CheckDastgeerData = () => {
    const [uData, setUData] = useState([]);
    
    const userData = async() =>{
        let res = await fetch(`${process.env.REACT_APP_BACKEND_URL_KEY}/joiya/dastgeer/data/reverse`)
        res = await res.json();    
        setUData(res)
    }
    useEffect(() => {
        userData()
    }, [uData])
  return (
    <div> 
      {
        uData.length >0 ? <GetDastgeer/> : <DataNotAdded/>
      }
    </div>
  )
}

export default CheckDastgeerData
