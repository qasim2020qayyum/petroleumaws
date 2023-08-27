import React, { useEffect, useState } from 'react'
import AddAliPetroleumRates from './AddAliPetroleumRates';
import AliPetrolium from '../../Manager/AllPump/AliPetrolium/AliPetrolium';

const CheckAliPetroliumRates = () => {
    const [uData, setUData] = useState([]);
    
    const userData = async() =>{
        let res = await fetch(`${process.env.REACT_APP_BACKEND_URL_KEY}/joiya/rate/pump`)
        res = await res.json();    
        setUData(res)
    }
    useEffect(() => {
        userData()
    }, [uData])
  return (
    <div> 
      {
        uData.length >0 ? <AliPetrolium/> : <AddAliPetroleumRates/>
      }
    </div>
  )
}

export default CheckAliPetroliumRates
