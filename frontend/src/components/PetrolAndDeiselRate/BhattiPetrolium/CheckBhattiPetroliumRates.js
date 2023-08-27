import React, { useEffect, useState } from 'react'
import BhattiPetrolium from '../../Manager/AllPump/BhattiPetrolium/BhattiPetrolium';
import AddBhattiPetroliumRates from './AddBhattiPetroliumRates';

const CheckBhattiPetroliumRates = () => {
    const [uData, setUData] = useState([]);
    
    const userData = async() =>{
        let res = await fetch(`${process.env.REACT_APP_BACKEND_URL_KEY}/joiya/rate/bhattiPetrolium`)
        res = await res.json();    
        setUData(res)
    }
    useEffect(() => {
        userData()
    }, [uData])
  return (
    <div> 
      {
        uData.length >0 ? <BhattiPetrolium/> : <AddBhattiPetroliumRates/>
      }
    </div>
  )
}

export default CheckBhattiPetroliumRates
