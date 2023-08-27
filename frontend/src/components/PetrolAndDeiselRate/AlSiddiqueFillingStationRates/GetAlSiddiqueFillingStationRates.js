import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
const GetAlSiddiqueFillingStationRates = () => {

  const [uData, setUData] = useState([]);

  const userData = async () => {
    let res = await fetch(`${process.env.REACT_APP_BACKEND_URL_KEY}/joiya/rate/alSiddique/`)
    res = await res.json();
    setUData(res)
  }
  useEffect(() => {
    userData()
  }, [])

  return (
    <>
      <div>
        {
          uData.map((item) => {
            return (
              <>
              <div className="box-containerr" key={item._id}>

                <div  className="rate_box">
                  <h5>SUP Purchase Rate </h5>
                  <h5 className='ratebox_clr'>: {item.sup_purchase_rate}</h5>
                </div>
                <div className="rate_box">
                  <h5>SUP sale Rate </h5>
                  <h5 className='ratebox_clr'>: {item.sup_sale_rate}</h5>
                </div>
                <div className="rate_box">
                  <h5>HSD Purchase Rate </h5><br />
                  <h5 className='ratebox_clr'>: {item.hsd_purchase_rate}</h5>
                </div>
                <div className="rate_box">
                  <h5>HSD Purchase Rate </h5>
                  <h5 className='ratebox_clr'>: {item.hsd_sale_rate}</h5>
                </div>
                  <Link to={`/edit-al-siddique-filling-station-rates/${item._id}`} style={{position:"absolute", left:"5.2rem", top:"11.5rem"}} className='btn btn-success btn-sm me-2 mt-5'><i class="fas fa-edit"></i></Link>
              </div>
              </>
            )
          })
        }

      </div>
    </>
  )
}

export default GetAlSiddiqueFillingStationRates
