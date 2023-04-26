import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Transaction = () => {
  const Prmuser = useSelector((state) => state.premium.data);
  const price=Prmuser.amount
  console.log(price)
  console.log(Prmuser.data.prefill.name);
 const navigate= useNavigate()
 const handleTransfer=()=>{
  window.localStorage.setItem("activated",true)
  console.log(window.localStorage.getItem("activated"))
navigate("/EachPremiumQuestion")
 }
 useEffect(()=>{},[])
  return (
    <>
      <div className="text-center mt-5 col-4 m-auto">
        <div className="card">
          <div className="card-header">Transaction Details</div>
          <div className="card-body">
            {/* <p>{Prmuser.data.description}</p> */}
           
            <p>Order id:&nbsp;<i>{Prmuser.data.order_id}</i></p>
<p> To:&nbsp;<i>{Prmuser.data.prefill.name}</i></p>
<p>{Prmuser.data.prefill.email}</p>
<p>Amount:&nbsp;<i>{price}/-</i></p>
          </div>
          <div className="card-footer">
            <button className="btn btn-danger me-2">Cancel</button>
            <button className="btn btn-success ms-2" onClick={()=>{handleTransfer()}}>Proceed </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Transaction;
