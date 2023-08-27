import React, {useState, useEffect} from "react";
import { Link, useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const AddGo45Rates = () => {

  const [sup_purchase_rate, setsupPurchaseRate] = useState('');
  const [sup_sale_rate, setSupSaleRate] = useState('');
  const [hsd_purchase_rate, setHsdPurchaseRate] = useState('');
  const [hsd_sale_rate, setHsdSaleRate] = useState('');
  
//   const [data, setData] = useState([]);




  
  const [data, setData] = useState([]);


  const [errorMsg, setErrorMsg] = useState(false);
  const navigate = useNavigate();
  const saveData = async (e) => {
      if (!sup_purchase_rate ||
          !sup_sale_rate ||
          !hsd_purchase_rate ||
          !hsd_sale_rate 
      ) {
          setErrorMsg(true)
          return false
      }
      e.preventDefault();
      let pumpData = await fetch(`${process.env.REACT_APP_BACKEND_URL_KEY}/joiya/rate/go45/`,  {
          method: 'POST',
          body: JSON.stringify({
              // rates 
              sup_purchase_rate: Number(sup_purchase_rate),
              sup_sale_rate: Number(sup_sale_rate),
              hsd_purchase_rate: Number(hsd_purchase_rate),
              hsd_sale_rate: Number(hsd_sale_rate),

          }),
          headers: {
              'Content-Type': 'application/json'
          }
      })
      pumpData = await pumpData.json();
      setData(pumpData);
      navigate('/go-45')
      toast.success("Rates added👌");
  }






  return (
    <div
      className="bgimage"
      style={{ backgroundImage: "url(assets/images/truck.avif)" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card border-0 shadow rounded-3 my-5">
              <div className="card-body p-4 p-sm-5">
               
                <form>
                 
                  <div className="form-floating mb-4">
                    <input
                      name="suprate"
                      type="text"
                      className="form-control input"
                      id="floatingInput"
                      placeholder="SUP purchase rate"
                      onChange={(e)=>setsupPurchaseRate(e.target.value)} 
                    />
                      {errorMsg && !sup_purchase_rate && <span className="errorHandle">Please enter SUP purchase rate before submit</span>}
                  </div>
                  <div className="form-floating mb-4">
                    <input
                      name="suprate"
                      type="text"
                      className="form-control input"
                      id="floatingPassword"
                      placeholder="SUP Sale rate"
                      onChange={(e)=>setSupSaleRate(e.target.value)}  
                    />
                      {errorMsg && !sup_sale_rate && <span className="errorHandle">Please enter SUP Sale rate before submit</span>}
                  </div>
                  <div className="form-floating mb-4">
                    <input
                      name="suprate"
                      type="text"
                      className="form-control input"
                      id="floatingPassword"
                      placeholder="HSD purchase rate"
                      onChange={(e)=>setHsdPurchaseRate(e.target.value)}  
                    />
                      {errorMsg && !hsd_purchase_rate && <span className="errorHandle">Please enter HSD purchase rate before submit</span>}
                  </div>
                  <div className="form-floating mb-4">
                    <input
                      name="suprate"
                      type="text"
                      className="form-control input"
                      id="floatingPassword"
                      placeholder="HSD Sale rate"
                      onChange={(e)=>setHsdSaleRate(e.target.value)}  
                    />
                      {errorMsg && !hsd_sale_rate && <span className="errorHandle">Please enter HSD Sale rate before submit</span>}
                  </div>

                  <div className="d-grid">
                    <button
                      className="btn btn-light login btn-login text-light fw-bold"
                      onClick={saveData} type="submit"
                    >
                      Add Rates
                    </button>
                  </div>
                  <br />
                  <div style={{textAlign:"center"}}>
                    <Link to="/admin-Dashboard">
                      <span className="signup">Go Back</span>
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddGo45Rates;
