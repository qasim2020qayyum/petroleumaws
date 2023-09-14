import React, { useEffect, useState } from 'react'
import GetAlWali from './GetAlWali';
import FirstAddAlWali from './FirstAddAlWali';
import AddAlWali from './AddAlWali';

const CheckAddAlWali = () => {
    const [uData, setUData] = useState([]);
    
    const userData = async() =>{
        let res = await fetch(`${process.env.REACT_APP_BACKEND_URL_KEY}/joiya/alwali/data/reverse`)
        res = await res.json();    
        setUData(res)
    }
    useEffect(() => {
        userData()
    }, [uData])
  return (
    <div> 
      {
        uData.length >0 ? <AddAlWali/> : <FirstAddAlWali/>
      }
    </div>
  )
}

export default CheckAddAlWali
