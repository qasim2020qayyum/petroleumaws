import React, { useEffect, useState } from 'react'
import FirstAddIDFillingStation from './FirstAddIDFillingStation';
import AddIDFillingStation from './AddIDFillingStation';

const CheckAddIDFillingStation = () => {
    const [uData, setUData] = useState([]);
    
    const userData = async() =>{
        let res = await fetch(`${process.env.REACT_APP_BACKEND_URL_KEY}/joiya/idFillingStation/data/reverse`)
        res = await res.json();    
        setUData(res)
    }
    useEffect(() => {
        userData()
    }, [uData])
  return (
    <div> 
      {
        uData.length >0 ? <AddIDFillingStation/> : <FirstAddIDFillingStation/>
      }
    </div>
  )
}

export default CheckAddIDFillingStation
