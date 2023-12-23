import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import GetDastgeerRates from '../../../PetrolAndDeiselRate/Dastgeer/GetDastgeerRates'
const DastgeerData = [
  {
    id: 1,
    name: "Add Today Data",
    path: "/dastgeer-filling-station/add-todays-data"
  },
  {
    id: 2,
    name: "Get All Data",
    path: "/dastgeer-filling-station/get-all-data"
  }
]
const Dastgeer = () => {
  return (
    <>
      <GetDastgeerRates />
      <div class="ali-box-container">
        {DastgeerData.map((item) => (<Link to={item.path}><div key={item.id} class="box">{item.name}</div></Link>))}
      </div>
    </>
  )
}

export default Dastgeer
