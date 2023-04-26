import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { EachQuestion } from "../Redux/Action";
import { useNavigate } from "react-router-dom";

const EachPremiumQuestion = () => {
  let Puser = window.localStorage.getItem("activated");

  const prmquestionsList = useSelector((state) => state.questionprmList);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {}, []);
  const handleQuestion = (id) => {
    dispatch(EachQuestion(id, navigate));
  };

  return (
    <>
      {
        <div className=" text-center bg-dark text-warning pt-5 pb-5">
          <u className="fa fw-bold fs-1 mb-5 ">Select Previous Exam Quesions</u>
          <br />
          {Puser === true ? (
            <>
              {prmquestionsList.exams ? (
                <div>
                  {prmquestionsList.exams.map((xam, index) => (
                    <div key={index}>
                      <p className="fa fw-bold fs-2 d-block mb-5 mt-5">
                        {" "}
                        <i className="fw-bold">
                          {" "}
                          Category: {Object.keys(xam)[0]}
                        </i>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;({xam.attempted}/{" "}
                        {xam.total} attempted)
                        <br />
                      </p>
                      {Object.values(xam)[0].map((nme, index) => (
                        <div
                          className="card border border-light bg-success mx-3 fa fs-2 fw-bold pt-2 col-4 px-2 my-3"
                          key={index}
                        >
                          <p
                            className="text-warning fs-3 pt-2 "
                            onClick={() => handleQuestion(nme.Exam.id)}
                          >
                            {nme.Exam.name}
                          </p>
                        </div>
                        // </div>
                      ))}
                    </div>
                  ))}
                </div>
              ) : (
                <h2>....Loading</h2>
              )}
            </>
          ) : (
            "Please Buy Premium Account to Access Questions"
          )}
        </div>
      }
    </>
  );
};

export default EachPremiumQuestion;

// {prmquestionsList.exams ? (
//   <div>
//     {prmquestionsList.exams.map((xam, index) => (
//       <div key={index}>
//         <p className="fa fw-bold fs-2 d-block mb-5 mt-5">
//           {" "}
//           <i className="fw-bold"> Category: {Object.keys(xam)[0]}</i>
//           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;({xam.attempted}/ {xam.total}{" "}
//           attempted)
//           <br />
//         </p>
//         {Object.values(xam)[0].map((nme, index) => (
//           // <div className="d-inline mb-3 mt-2">
//           <div
//             className="card border border-light bg-success mx-3 fa fs-2 fw-bold pt-2 col-4 px-2 my-3"
//             key={index}
//           >
//             <p
//               className="text-warning fs-3 pt-2 "
//               onClick={() => handleQuestion(nme.Exam.id)}
//             >
//               {nme.Exam.name}
//             </p>
//           </div>
//           // </div>
//         ))}
//       </div>
//     ))}
//   </div>
// ) : (
//   <h2>....Loading</h2>
// )}
