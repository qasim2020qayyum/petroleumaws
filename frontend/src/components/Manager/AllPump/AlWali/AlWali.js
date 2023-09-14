import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import GetAlWaliRates from '../../../PetrolAndDeiselRate/AlWaliRates/GetAlWaliRates'
const AlWaliData = [
  {
    id: 1,
    name: "Add Today Data",
    path: "/al-wali-power-station/add-todays-data"
  },
  {
    id: 2,
    name: "Get All Data",
    path: "/al-wali-power-station/get-all-data"
  }
]
const AlWali = () => {
  return (
    <>
    <GetAlWaliRates/>
      <div class="ali-box-container">
        {AlWaliData.map((item) => (<Link to={item.path}><div key={item.id} class="box">{item.name}</div></Link>))}
      </div>
    </>
  )
}

export default AlWali
