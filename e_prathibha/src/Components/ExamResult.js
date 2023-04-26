import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const ExamResult = () => {
  const Result = useSelector((state) => state.result.data);


  // const handleFinish=()=>{

  // }
  // const handleCancel=()=>{

  // }
  useEffect(()=>{},[])
  
  return (
    <div className="text-center mt-5">
      <div className="card col-6">
        <div className="card-header bg-info">Finalize Exam</div>
        <div className="card-body">
          Do you want to finish your exam ? 
          <p className="text-danger">Once you submit this cant be undone!</p>
        </div>
        <div className="card-body fa">
          Total Answered:&nbsp;{Result[2]}
          <br /> <br />
          Not Answered:&nbsp;{Result[3]}
          <br /> <br />
          Marked:&nbsp;{Result[4]}
          <br /> <br />
          Ans & marked for review:&nbsp;{Result[5]}
          <br /> <br />
          Not Visited:&nbsp;{Result[6]}
          <br /> <br />
          Bookmarked:&nbsp;{Result[7]}
          <br />
        </div>
        <hr/>
        {/* <div>
          <button className="btn btn-success me-3"
          onClick={()=>handleFinish()}>Finish Exam</button>
          <button className="btn btn-danger ms-3" onClick={()=>handleCancel()}>Finish Exam</button>
        </div> */}
      </div>
    </div>
  );
};

export default ExamResult;
