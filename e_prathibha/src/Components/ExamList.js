import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SubmitExam } from "../Redux/Action";
import {
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalTitle,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ExamList = () => {
  let ind = "";

  const Questions = useSelector((state) => state.ExamType.data);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showMod, setshowMod] = useState(false);

  const hanldeModal = () => {
    setshowMod(true);
  };

  const handleClose = () => {
    setshowMod(false);
  };

  const submitExam = (exam, ques) => {
    dispatch(SubmitExam(exam, ques, navigate));
  };

  useEffect(() => {}, []);

  return (
    <div className="text-center mb-5">
      <span className="mb-5 mt-5 fs-1 text-primary">Question's List</span>
      <br />
      {Questions ? (
        <div>
          {Questions?.exam.map((ques, index) => (
            <div
              className="card col-7 m-auto mb-5 border-dark shadow-lg"
              key={index}
            >
              <p className="card-header ">
                {/* <b className="ms-0 me-4 ">Q.no:{index + 1}</b> */}
                <span className="fw-bold">
                  {(ind = index)}
                  {ques?.Question?.question?.above}
                </span>
              </p>

              <div className="card-body ">
                {ques.Question.option1 ? (
                  <span className="card-text">
                    <input
                      type="radio"
                      className="radioInput me-3 "
                      id={ques?.Question.id}
                      name={ques?.Question.id}
                    />
                    {ques?.Question.option1}
                  </span>
                ) : null}
                <br />
                {ques.Question.option2 ? (
                  <span className="card-text">
                    <input
                      type="radio"
                      className="radioInput me-3 "
                      id={ques?.Question.id}
                      name={ques?.Question.id}
                    />
                    {ques?.Question.option2}
                  </span>
                ) : null}
                <br />
                {ques.Question.option3 ? (
                  <span className="card-text">
                    <input
                      type="radio"
                      className="radioInput me-3 "
                      id={ques?.Question.id}
                      name={ques.Question.id}
                    />
                    {ques?.Question.option3}
                  </span>
                ) : null}
                <br />
                {ques.Question.option4 ? (
                  <span className="card-text">
                    <input
                      type="radio"
                      className="radioInput me-3 "
                      id={ques?.Question.id}
                      name={ques?.Question.id}
                    />
                    {ques.Question.option4}
                  </span>
                ) : null}
                <br />
                {ques.Question.option5 ? (
                  <span className="card-text">
                    <input
                      type="radio"
                      className="radioInput me-3 "
                      id={ques?.Question.id}
                      name={ques?.Question.id}
                    />
                    {ques.Question.option5}
                  </span>
                ) : null}
                <br />
                {ques.Question.option6 ? (
                  <span className="card-text">
                    <input
                      type="radio"
                      className="radioInput me-3 "
                      id={ques?.Question.id}
                      name={ques?.Question.id}
                    />
                    {ques.Question.option6}
                  </span>
                ) : null}
              </div>
            </div>
          ))}
          <div>
            <button className="btn btn-primary" onClick={hanldeModal}>
              Submit
            </button>
          </div>

          <Modal show={showMod}>
            <ModalHeader>
              <ModalTitle>Submit Exam</ModalTitle>
            </ModalHeader>
            <ModalBody>Do you want to submit your exam? </ModalBody>
            <ModalFooter>
              <button className="btn btn-danger" onClick={handleClose}>
                Close
              </button>
              <button
                className="btn btn-success modal-bs-close"
                onClick={() => {
                  submitExam(
                    Questions.exam[0].Exam.id,
                    Questions.exam[0].ExamStat.exam_result_id
                  )(handleClose());
                }}
              >
                Submit
              </button>
            </ModalFooter>
          </Modal>

          {/* <Modal show={mod}>
            <ModalHeader>
              <ModalTitle>
               Finish Exam
              </ModalTitle>
            </ModalHeader>
            <ModalBody>
            Do you want to finish your exam?
            </ModalBody>
            <ModalFooter>
<button className="btn btn-danger" onClick={handleClose()}> Cancel</button>
<button className="btn btn-success" onClick={()=>{ FinishExam(
                    Questions.exam[0].Exam.id,
                    Questions.exam[ind].Question.id
                    
                  )}}> Finish</button>
            </ModalFooter>

          </Modal> */}
        </div>
      ) : (
        <h2>....Loading</h2>
      )}
    </div>
  );
};

export default ExamList;
