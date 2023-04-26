import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Payment, Pckginfo } from "../Redux/Action";

const PaymentPage = () => {
  const pckg = useSelector((state) => state.Package);
  console.log(pckg);
  // const [time, setTime] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleCancel = () => {
    navigate("/Home");
  };
  const handleBuynow = (time) => {
    window.localStorage.setItem("PremiumUser", true);
    // navigate("/EachPremiumQuestion");
    // navigate("/Transaction")
    dispatch(Payment(time,navigate));
  };
useEffect(()=>{
  // dispatch(Pckginfo())
},[])
  return (
    <div className="text-center">
      {pckg.data ? (
        <>
          <p className="fs-2 ">
            <em>payment Page</em>
          </p>
          <div className="card col-4 m-auto bg  fa fs-2">
            <div className="card-header">Comfirm Purchase</div>
            <div className="card-body">
              <p>Package Type: &nbsp;{pckg.data.name}</p>
              <p>
                Price: &nbsp;
                <i className="fa fa-inr">&nbsp;{pckg.data.amount}/-</i>
              </p>
              <p>Validity:{pckg.data.expiry_days} Day's</p>
            </div>
            <div className="card-footer">
              <button className="btn btn-danger" onClick={() => handleCancel()}>
                Cancel
              </button>{" "}
              &nbsp; &nbsp; &nbsp; &nbsp;
              <button
                className="btn btn-success"
                onClick={() => handleBuynow("")}
              >
                Buy Now
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className="mt-5 pt-5 fs-1">...Loading</div>
      )}
    </div>
  );
};

export default PaymentPage;
