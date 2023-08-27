import React, { useEffect, useState } from 'react'
import DataNotAdded from '../../../DataNotAdded';
import GetGo09 from './GetGo09';

const CheckGo09Data = () => {
    const [uData, setUData] = useState([]);
    
    const userData = async() =>{
        let res = await fetch(`${process.env.REACT_APP_BACKEND_URL_KEY}/joiya/go09/data/reverse`)
        res = await res.json();    
        setUData(res)
    }
    useEffect(() => {
        userData()
    }, [uData])
  return (
    <div> 
      {
        uData.length >0 ? <GetGo09/> : <DataNotAdded/>
      }
    </div>
  )
}

export default CheckGo09Data
