import React, { useEffect, useState } from 'react'
import FirstAddTakhatMahal from './FirstAddTakhatMahal';
import AddTakhatMahal from './AddTakhatMahal';

const CheckAddTakhatMahal = () => {
    const [uData, setUData] = useState([]);
    
    const userData = async() =>{
        let res = await fetch(`${process.env.REACT_APP_BACKEND_URL_KEY}/joiya/takhatMahal/data/reverse`)
        res = await res.json();    
        setUData(res)
    }
    useEffect(() => {
        userData()
    }, [uData])
  return (
    <div> 
      {
        uData.length >0 ? <AddTakhatMahal/> : <FirstAddTakhatMahal/>
      }
    </div>
  )
}

export default CheckAddTakhatMahal
