import React, { useEffect, useState } from 'react'
import FirstAddDastgeer from './FirstAddDastgeer';
import AddDastgeer from './AddDastgeer';

const CheckAddDastgeer = () => {
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
        uData.length >0 ? <AddDastgeer/> : <FirstAddDastgeer/>
      }
    </div>
  )
}

export default CheckAddDastgeer
