import React, { useEffect, useState } from 'react'
import FirstAddAwanBrother from './FirstAddAwanBrother';
import AddAwanBrother from './AddAwanBrother';

const CheckAddAwanBrother = () => {
    const [uData, setUData] = useState([]);
    
    const userData = async() =>{
        let res = await fetch(`${process.env.REACT_APP_BACKEND_URL_KEY}/joiya/awanbrothers/data/reverse`)
        res = await res.json();    
        setUData(res)
    }
    useEffect(() => {
        userData()
    }, [uData])
  return (
    <div> 
      {
        uData.length >0 ? <AddAwanBrother/> : <FirstAddAwanBrother/>
      }
    </div>
  )
}

export default CheckAddAwanBrother
