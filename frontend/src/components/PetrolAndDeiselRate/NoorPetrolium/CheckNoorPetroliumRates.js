import React, { useEffect, useState } from 'react'
import NoorPetrolium from '../../Manager/AllPump/NoorPetrolium/NoorPetrolium';
import AddNoorPetroliumRates from './AddNoorPetroliumRates';

const CheckNoorPetroliumRates = () => {
    const [uData, setUData] = useState([]);
    
    const userData = async() =>{
        let res = await fetch(`${process.env.REACT_APP_BACKEND_URL_KEY}/joiya/rate/noorPetrolium`)
        res = await res.json();    
        setUData(res)
    }
    useEffect(() => {
        userData()
    }, [uData])
  return (
    <div> 
      {
        uData.length >0 ? <NoorPetrolium/> : <AddNoorPetroliumRates/>
      }
    </div>
  )
}

export default CheckNoorPetroliumRates
