import React, { useEffect, useState } from 'react'
import DataNotAdded from '../../../DataNotAdded';
import GetBabaFareedFillingStaion from './GetBabaFareedFillingStaion';

const CheckBabaFareedFillingStaionData = () => {
    const [uData, setUData] = useState([]);
    
    const userData = async() =>{
        let res = await fetch(`${process.env.REACT_APP_BACKEND_URL_KEY}/joiya/babafareed/data/reverse`)
        res = await res.json();    
        setUData(res)
    }
    useEffect(() => {
        userData()
    }, [uData])
  return (
    <div> 
      {
        uData.length >0 ? <GetBabaFareedFillingStaion/> : <DataNotAdded/>
      }
    </div>
  )
}

export default CheckBabaFareedFillingStaionData
