import React, { useEffect, useState } from 'react'
import FirstAddNadirFillingStation from './FirstAddNadirFillingStation';
import AddNadirFillingStation from './AddNadirFillingStation';

const CheckAddNadirFillingStation = () => {
    const [uData, setUData] = useState([]);
    
    const userData = async() =>{
        let res = await fetch(`${process.env.REACT_APP_BACKEND_URL_KEY}/joiya/nadirFillingStations/data/reverse`)
        res = await res.json();    
        setUData(res)
    }
    useEffect(() => {
        userData()
    }, [uData])
  return (
    <div> 
      {
        uData.length >0 ? <AddNadirFillingStation/> : <FirstAddNadirFillingStation/>
      }
    </div>
  )
}

export default CheckAddNadirFillingStation
