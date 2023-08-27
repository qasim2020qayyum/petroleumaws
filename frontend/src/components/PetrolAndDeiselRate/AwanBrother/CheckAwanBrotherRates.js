import React, { useEffect, useState } from 'react'
import AwanBrother from '../../Manager/AllPump/AwanBrother/AwanBrother';
import AddAwanBrotherRates from './AddAwanBrotherRates';

const CheckAwanBrotherRates = () => {
    const [uData, setUData] = useState([]);
    
    const userData = async() =>{
        let res = await fetch(`${process.env.REACT_APP_BACKEND_URL_KEY}/joiya/rate/awanbrothers`)
        res = await res.json();    
        setUData(res)
    }
    useEffect(() => {
        userData()
    }, [uData])
  return (
    <div> 
      {
        uData.length >0 ? <AwanBrother/> : <AddAwanBrotherRates/>
      }
    </div>
  )
}

export default CheckAwanBrotherRates
