import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import GetAlSiddiqueFillingStationRates from '../../../PetrolAndDeiselRate/AlSiddiqueFillingStationRates/GetAlSiddiqueFillingStationRates'
const AlSiddiqueFillingStationData = [
  {
    id: 1,
    name: "Add Today Data",
    path: "/al-siddique-filling-station/add-todays-data"
  },
  {
    id: 2,
    name: "Get All Data",
    path: "/al-siddique-filling-station/get-all-data"
  }
]
const AlSiddiqueFillingStation = () => {
  return (
    <>
    <GetAlSiddiqueFillingStationRates/>
      <div class="ali-box-container">
        {AlSiddiqueFillingStationData.map((item) => (<Link to={item.path}><div key={item.id} class="box">{item.name}</div></Link>))}
      </div>
    </>
  )
}

export default AlSiddiqueFillingStation
