import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const AllPump = () => {
  return (
    <>
      {/* start  */}
      <div className="d-flex justify-content-around flex-wrap align-items-center ">
        <Link to="/awan-brother"><div
          style={{ backgroundColor: '#a83c27' }}
          className="d-flex justify-content-center align-items-center fw-bold text-white rounded shadow-sm  w-100 m-4 p-3 ">
          Awan Brother
        </div></Link>

        <Link to="/siaa-filling-station"><div
          style={{ backgroundColor: '#a83c27' }}
          className="d-flex justify-content-center align-items-center fw-bold text-white rounded shadow-sm  w-100 m-4 p-3 ">
          SIAA Filling Station
        </div></Link>

        <Link to="/ali-petrolium"><div
          style={{ backgroundColor: '#a83c27' }}
          className="d-flex justify-content-center align-items-center fw-bold text-white rounded shadow-sm  w-100 m-4 p-3 ">
          Ali Petrolium
        </div></Link>


        <Link to="/bhatti-petrolium"><div
          style={{ backgroundColor: '#a83c27' }}
          className="d-flex justify-content-center align-items-center fw-bold text-white rounded shadow-sm  w-100 m-4 p-3 ">
          Bhatti Petrolium
        </div></Link>

        <Link to="/id-takhat-mahal"><div
          style={{ backgroundColor: '#a83c27' }}
          className="d-flex justify-content-center align-items-center fw-bold text-white rounded shadow-sm  w-100 m-4 p-3 ">
          ID Takhat Mahal
        </div></Link>
      </div>
      {/* end  */}
      <hr/>

      {/* start  */}
      <div className="d-flex justify-content-around flex-wrap align-items-center ">
        <Link to="/go-09"><div
          style={{ backgroundColor: '#a83c27' }}
          className="d-flex justify-content-center align-items-center fw-bold text-white rounded shadow-sm  w-100 m-4 p-3 ">
          GO 09
        </div></Link>

        <Link to="/go-45"><div
          style={{ backgroundColor: '#a83c27' }}
          className="d-flex justify-content-center align-items-center fw-bold text-white rounded shadow-sm  w-100 m-4 p-3 ">
          GO 45
        </div></Link>

        <Link to="/nadir-filling-station"><div
          style={{ backgroundColor: '#a83c27' }}
          className="d-flex justify-content-center align-items-center fw-bold text-white rounded shadow-sm  w-100 m-4 p-3 ">
          Nadir Filling Station
        </div></Link>

        <Link to="/jahangir-petrolium-service"><div
          style={{ backgroundColor: '#a83c27' }}
          className="d-flex justify-content-center align-items-center fw-bold text-white rounded shadow-sm  w-100 m-4 p-3 ">
          Jahangir Petrolium Service
        </div></Link>

        <Link to="/al-wali-power-station"><div
          style={{ backgroundColor: '#a83c27' }}
          className="d-flex justify-content-center align-items-center fw-bold text-white rounded shadow-sm  w-100 m-4 p-3 ">
          Al Wali Power Station
        </div></Link>
      </div>
      {/* end  */}

      <hr/>
      {/* start  */}
      <div className="d-flex justify-content-around flex-wrap align-items-center ">
        <Link to="/baba-fareed-filling-station"><div
          style={{ backgroundColor: '#a83c27' }}
          className="d-flex justify-content-center align-items-center fw-bold text-white rounded shadow-sm  w-100 m-4 p-3 ">
          Baba Fareed Filling Station
        </div></Link>

        <Link to="/al-siddique-filling-station"><div
          style={{ backgroundColor: '#a83c27' }}
          className="d-flex justify-content-center align-items-center fw-bold text-white rounded shadow-sm  w-100 m-4 p-3 ">
          AL Siddique Filling Station
        </div></Link>

        <Link to="/noor-petrolium"><div
          style={{ backgroundColor: '#a83c27' }}
          className="d-flex justify-content-center align-items-center fw-bold text-white rounded shadow-sm  w-100 m-4 p-3 ">
          Noor Petrolium
        </div></Link>

        <Link to="/khalid-&-sons-pso"><div
          style={{ backgroundColor: '#a83c27' }}
          className="d-flex justify-content-center align-items-center fw-bold text-white rounded shadow-sm  w-100 m-4 p-3 ">
          Khalid & Sons PSO
        </div></Link>

        <Link to="/id-filling-station"><div
          style={{ backgroundColor: '#a83c27' }}
          className="d-flex justify-content-center align-items-center fw-bold text-white rounded shadow-sm  w-auto m-4 p-3 ">
          ID Filling Station
        </div></Link>
      </div>
      {/* end  */}
      <hr/> 
    </>
  )
}

export default AllPump
