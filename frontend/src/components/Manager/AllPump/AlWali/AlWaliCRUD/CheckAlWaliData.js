import React, { useEffect, useState } from 'react'
import DataNotAdded from '../../../DataNotAdded';
import GetAlWali from './GetAlWali';

const CheckAlWaliData = () => {
    const [uData, setUData] = useState([]);
    
    const userData = async() =>{
        let res = await fetch(`${process.env.REACT_APP_BACKEND_URL_KEY}/joiya/alwali/data/reverse`)
        res = await res.json();    
        setUData(res)
    }
    useEffect(() => {
        userData()
    }, [uData])
  return (
    <div> 
      {
        uData.length >0 ? <GetAlWali/> : <DataNotAdded/>
      }
    </div>
  )
}

export default CheckAlWaliData
