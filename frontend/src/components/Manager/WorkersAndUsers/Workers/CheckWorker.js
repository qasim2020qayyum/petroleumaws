import React, { useEffect, useState } from 'react'
import GetWorkers from './GetWorkers';
import DataNotAdded from '../../DataNotAdded';

const CheckWorker = () => {
    const [uData, setUData] = useState([]);
    
const userData = async() =>{
    let res = await fetch(`${process.env.REACT_APP_BACKEND_URL_KEY}/joiya/worker`)
    res = await res.json();    
    setUData(res)
}
useEffect(() => {
    userData()
}, [uData])
  return (
    <div>
      {
        uData.length >0 ? <GetWorkers/> : <DataNotAdded/>
      }
    </div>
  )
}

export default CheckWorker
