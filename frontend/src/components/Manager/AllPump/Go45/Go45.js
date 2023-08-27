import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import GetGo45Rates from '../../../PetrolAndDeiselRate/Go45/GetGo45Rates'
const Go45Data = [
  {
    id: 1,
    name: "Add Today Data",
    path: "/go-45/add-todays-data"
  },
  {
    id: 2,
    name: "Get All Data",
    path: "/go-45/get-all-data"
  }
]
const Go45 = () => {
  return (
    <>
    <GetGo45Rates/>
      <div class="ali-box-container">
        {Go45Data.map((item) => (<Link to={item.path}><div key={item.id} class="box">{item.name}</div></Link>))}
      </div>
    </>
  )
}

export default Go45
