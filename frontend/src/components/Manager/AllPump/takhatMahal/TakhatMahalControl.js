import React from 'react'
import { Link } from 'react-router-dom'
import GetTakhatMahalRates from '../../../PetrolAndDeiselRate/TakhatMahalRates/GetTakhatMahalRates'
const TakhatMahalData = [
  {
    id: 1,
    name: "Add Today Data",
    path: "/id-takhat-mahal/add-todays-data"
  },
  {
    id: 2,
    name: "Get All Data",
    path: "/id-takhat-mahal/get-all-data"
  }
]

const TakhatMahalControl = () => {
return (
    <>
    <GetTakhatMahalRates/>
      <div class="ali-box-container">
        {TakhatMahalData.map((item) => (<Link to={item.path}><div key={item.id} class="box">{item.name}</div></Link>))}
      </div>
    </>
  )
}

export default TakhatMahalControl
