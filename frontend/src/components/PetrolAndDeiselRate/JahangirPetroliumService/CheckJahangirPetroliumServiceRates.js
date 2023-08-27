import React, { useEffect, useState } from 'react'
import JahangirPetroliumService from '../../Manager/AllPump/JahangirPetroliumService/JahangirPetroliumService';
import AddJahangirPetroliumServiceRates from './AddJahangirPetroliumServiceRates';

const CheckJahangirPetroliumServiceRates = () => {
    const [uData, setUData] = useState([]);
    
    const userData = async() =>{
        let res = await fetch(`${process.env.REACT_APP_BACKEND_URL_KEY}/joiya/rate/jahangirPetrolium`)
        res = await res.json();    
        setUData(res)
    }
    useEffect(() => {
        userData()
    }, [uData])
  return (
    <div> 
      {
        uData.length >0 ? <JahangirPetroliumService/> : <AddJahangirPetroliumServiceRates/>
      }
    </div>
  )
}

export default CheckJahangirPetroliumServiceRates
