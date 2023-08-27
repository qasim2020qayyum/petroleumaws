import React, { useEffect, useState } from 'react'
import FirstAddBabaFareedFillingStaion from './FirstAddBabaFareedFillingStaion';
import AddBabaFareedFillingStaion from './AddBabaFareedFillingStaion';

const CheckAddBabaFareedFillingStaion = () => {
    const [uData, setUData] = useState([]);
    
    const userData = async() =>{
        let res = await fetch(`${process.env.REACT_APP_BACKEND_URL_KEY}/joiya/babafareed/data/reverse`)
        res = await res.json();    
        setUData(res)
    }
    useEffect(() => {
        userData()
    }, [uData])
  return (
    <div> 
      {
        uData.length >0 ? <AddBabaFareedFillingStaion/> : <FirstAddBabaFareedFillingStaion/>
      }
    </div>
  )
}

export default CheckAddBabaFareedFillingStaion
