import React from "react";
import { useDispatch, useSelector } from "react-redux";

const FinishExam = ({match}) => {
  const finish=useSelector((state)=>state.finsh)
  const dispatch=useDispatch()
  
  
  const finishExam=(Exid,qno)=>{

 dispatch(FinishExam(Exid,qno))

  }
  return <div className="m-auto">
 <div className="text-center"> 
 <div className="card col-3 ">
  <div className="card-header">
  Finish Exam
  </div>
  <div className="card-body">  Do you want to finish your exam?</div>
  <div className="card-footer">
    <button className="btn btn-danger me-2">Cancel</button>
    <button className="btn btn-success ms-2" onClick={()=>finishExam()}>Finish</button>
  </div>

</div></div>
  </div>;
};

export default FinishExam;
