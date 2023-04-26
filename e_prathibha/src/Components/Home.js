import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Pckginfo } from "../Redux/Action";
import { QuestionFreeList, QuestionPrmList } from "../Redux/Action";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const Puser = window.localStorage.getItem("activated");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleFreeExam = () => {
    dispatch(QuestionFreeList(navigate));
  };
  const handlePremiumExam = () => {
    dispatch(Pckginfo("8", navigate));
  };
  const handlePremiumExams = () => {
    dispatch(QuestionPrmList(navigate));
  };

  return (
    <>
      <div className=" text-center shadow-lg border border-dark rounded col-8 my-5 pb-5 mx-auto">
        <u>
          <p className="my-5 fw-bold fs-3">Please Select Type Of Exam</p>
        </u>
        <div className="d-inline me-5">
          <Button className=" fs-5" onClick={() => handleFreeExam()}>
            Free ExamList
          </Button>
        </div>
        &nbsp;&nbsp;
        {Puser === true ? (
          <>
            <div className=" d-inline ms-5 ">
              <Button
                className=""
                variant="warning text-success fw-bold fs-5"
                onClick={() => handlePremiumExams()}
              >
                {" "}
                <i className="fa-regular fa-book-open-cover" />
                Premium ExamList
              </Button>
            </div>
          </>
        ) : (
          <>
            {" "}
            <div className=" d-inline ms-5 ">
              <Button
                className=""
                variant="warning text-success fw-bold fs-5"
                onClick={() => handlePremiumExam()}
              >
                {" "}
                <i className="fa-regular fa-book-open-cover" />
                Premium ExamList
              </Button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Home;
