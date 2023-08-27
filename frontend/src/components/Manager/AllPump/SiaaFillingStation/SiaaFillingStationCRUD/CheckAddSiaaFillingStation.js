import React, { useEffect, useState } from 'react'
import FirstAddSiaaFillingStation from './FirstAddSiaaFillingStation';
import AddSiaaFillingStation from './AddSiaaFillingStation';

const CheckAddSiaaFillingStation = () => {
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
        uData.length >0 ? <AddSiaaFillingStation/> : <FirstAddSiaaFillingStation/>
      }
    </div>
  )
}

export default CheckAddSiaaFillingStation
