import React, { useEffect, useState } from 'react'
import KhalidAndSonsPSO from '../../Manager/AllPump/KhalidAndSonsPSO/KhalidAndSonsPSO';
import AddKhalidAndSonsPSORates from './AddKhalidAndSonsPSORates';

const CheckKhalidAndSonsPSORates = () => {
    const [uData, setUData] = useState([]);
    
    const userData = async() =>{
        let res = await fetch(`${process.env.REACT_APP_BACKEND_URL_KEY}/joiya/rate/khalidAndSon`)
        res = await res.json();    
        setUData(res)
    }
    useEffect(() => {
        userData()
    }, [uData])
  return (
    <div> 
      {
        uData.length >0 ? <KhalidAndSonsPSO/> : <AddKhalidAndSonsPSORates/>
      }
    </div>
  )
}

export default CheckKhalidAndSonsPSORates
