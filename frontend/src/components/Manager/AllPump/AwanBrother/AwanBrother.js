import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import GetAwanBrotherRates from '../../../PetrolAndDeiselRate/AwanBrother/GetAwanBrotherRates'
const AwanBrotherData = [
  {
    id: 1,
    name: "Add Today Data",
    path: "/awan-brother/add-todays-data"
  },
  {
    id: 2,
    name: "Get All Data",
    path: "/awan-brother/get-all-data"
  }
]
const AwanBrother = () => {
  return (
    <>
    <GetAwanBrotherRates/>
      <div class="ali-box-container">
        {AwanBrotherData.map((item) => (<Link to={item.path}><div key={item.id} class="box">{item.name}</div></Link>))}
      </div>
    </>
  )
}

export default AwanBrother
