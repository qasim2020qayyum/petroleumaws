import React, { useEffect, useState } from 'react'
import GetAliPetrolium from './GetAliPetrolium';
import FirstAddAliPetrolium from './FirstAddAliPetrolium';
import AddAliPetrolium from './AddAliPetrolium';

const CheckAddAliPetrolium = () => {
    const [uData, setUData] = useState([]);
    
    const userData = async() =>{
        let res = await fetch(`${process.env.REACT_APP_BACKEND_URL_KEY}/joiya/pump/data/reverse`)
        res = await res.json();    
        setUData(res)
    }
    useEffect(() => {
        userData()
    }, [uData])
  return (
    <div> 
      {
        uData.length >0 ? <AddAliPetrolium/> : <FirstAddAliPetrolium/>
      }
    </div>
  )
}

export default CheckAddAliPetrolium
