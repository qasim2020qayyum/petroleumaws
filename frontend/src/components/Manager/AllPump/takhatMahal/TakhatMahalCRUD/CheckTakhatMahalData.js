import React, { useEffect, useState } from 'react'
import DataNotAdded from '../../../DataNotAdded';
import GetTakhatMahal from './GetTakhatMahal';

const CheckTakhatMahalData = () => {
    const [uData, setUData] = useState([]);
    
    const userData = async() =>{
        let res = await fetch(`${process.env.REACT_APP_BACKEND_URL_KEY}/joiya/takhatMahal/data/reverse`)
        res = await res.json();    
        setUData(res)
    }
    useEffect(() => {
        userData()
    }, [uData])
  return (
    <div> 
      {
        uData.length >0 ? <GetTakhatMahal/> : <DataNotAdded/>
      }
    </div>
  )
}

export default CheckTakhatMahalData
