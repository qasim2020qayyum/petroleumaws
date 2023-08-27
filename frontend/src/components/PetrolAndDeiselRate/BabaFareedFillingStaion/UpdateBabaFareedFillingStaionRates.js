import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const UpdateBabaFareedFillingStaionRates = () => {

  const [sup_purchase_rate, setsupPurchaseRate] = useState('');
  const [sup_sale_rate, setSupSaleRate] = useState('');
  const [hsd_purchase_rate, setHsdPurchaseRate] = useState('');
  const [hsd_sale_rate, setHsdSaleRate] = useState('');

  //   const [data, setData] = useState([]);
  const navigate = useNavigate();

  const params = useParams();


  const getUserDetail = async () => {
    let res = await fetch(`${process.env.REACT_APP_BACKEND_URL_KEY}/joiya/rate/babafareed/${params.id}`)
    res = await res.json();

    setsupPurchaseRate(res.sup_purchase_rate)
    setSupSaleRate(res.sup_sale_rate)
    setHsdPurchaseRate(res.hsd_purchase_rate)
    setHsdSaleRate(res.hsd_sale_rate)
  }


  const updateData = async (e) => {
    e.preventDefault();
    let res = await fetch(`${process.env.REACT_APP_BACKEND_URL_KEY}/joiya/rate/babafareed/${params.id}`, {
      method: "put",
      body: JSON.stringify({ sup_purchase_rate, sup_sale_rate, hsd_purchase_rate, hsd_sale_rate }),
      headers: {
        "Content-Type": "Application/json"
      }
    })
    res = await res.json();
    console.log(res);
    navigate('/baba-fareed-filling-station');
    toast.success("Rates Are updated👌");
  }

  useEffect(() => {
    getUserDetail();
  }, [])


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
                      placeholder="Sup Purchase"
                      value={sup_purchase_rate}
                      onChange={(e) => setsupPurchaseRate(e.target.value)}
                    />
                  </div>
                  <div className="form-floating mb-4">
                    <input
                      name="suprate"
                      type="text"
                      className="form-control input"
                      id="floatingPassword"
                      placeholder="Sup Sale"
                      value={sup_sale_rate}
                      onChange={(e) => setSupSaleRate(e.target.value)}
                    />
                  </div>
                  <div className="form-floating mb-4">
                    <input
                      name="suprate"
                      type="text"
                      className="form-control input"
                      id="floatingPassword"
                      placeholder="HSD Purchase"
                      value={hsd_purchase_rate}
                      onChange={(e) => setHsdPurchaseRate(e.target.value)}
                    />
                  </div>
                  <div className="form-floating mb-4">
                    <input
                      name="suprate"
                      type="text"
                      className="form-control input"
                      id="floatingPassword"
                      placeholder="HSD Sale"
                      value={hsd_sale_rate}
                      onChange={(e) => setHsdSaleRate(e.target.value)}
                    />
                  </div>

                  <div className="d-grid">
                    <button
                      className="btn btn-light login text-light btn-login  fw-bold"
                      onClick={updateData} type="submit"
                    >
                      Update Rates
                    </button>
                  </div>
                  <br />
                  <div style={{ textAlign: "center" }}>
                    <Link to="/baba-fareed-filling-station">
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

export default UpdateBabaFareedFillingStaionRates;
