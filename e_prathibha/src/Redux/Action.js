import axios from "axios";
const baseurl = "http://test.e-prathibha.com/apis";
const headers = {
  tokenu: window.sessionStorage.getItem("Token"),
  Id: window.sessionStorage.getItem("Id"),
  server_key: "3w99V63pW7tJ7vavGXtCKo8cp",
};

////User Registration API call
export const RegisterUSer = (user, navigate) => {
  console.log("action called");
  return (dispatch) => {
    const regData = axios.post(`${baseurl}/register`, user).then((response) => {
      console.log(response.data.status);
      if (response.data.status === 200) {
        dispatch({ type: "USER_REGISTRATION", payload: response.data });
        navigate("/UserVerification");
        window.sessionStorage.setItem("regData", regData);
      } else {
        alert(response.data.data);
      }
    });
  };
};

////Verrification of the user API
export const VerifyUser = (userCode, navigate) => {
  return async (dispatch) => {
    const userVcode = await axios
      .post(`${baseurl}/verifyEmail`, { reg_code: userCode })
      .then((response) => {
        console.log(response);
        if (response.data.status === 200) {
          dispatch({ type: "VERIFYEMAIL", payload: response.data });
          window.sessionStorage.setItem("VerificationCode", userVcode.data);
          navigate("/");
        } else {
          alert(response.data);
        }
      });
  };
};

////User Login API call
export const LoginUser = (user, navigate) => {
  return async (dispatch) => {
    await axios.post(`${baseurl}/login`, user).then((response) => {
      if (response.data.status === 200) {
        sessionStorage.setItem("Token", response.data.data.Token);
        sessionStorage.setItem("Id", response.data.data.Id);
        dispatch({ type: "USERLOGIN", payload: response.data });
        navigate("/Home");
      } else {
        alert(response.data.data);
      }
    });
  };
};

///API call for the free-question list
export const QuestionFreeList = (navigate) => {
  return async (dispatch) => {
    await axios
      .post(`${baseurl}/test_free_exam`, {}, { headers })
      .then((response) => {
        if (response.status === 200) {
          navigate("/EachFreeQuestion");
          dispatch({ type: "FREEEXAM", payload: response.data.data });
        } else {
          alert(response.data.data);
        }
      });
  };
};

////API call for the premium question list
export const QuestionPrmList = (navigate) => {
  return async (dispatch) => {
    await axios
      .post(`${baseurl}/premium_exam`, {}, { headers })
      .then((response) => {
        if (response.data.status === 200) {
          navigate("/EachPremiumQuestion");
          dispatch({ type: "PREMIUMEXAM", payload: response.data.data });
        } else {
          alert(response.data.data);
        }
      });
  };
};

////To display each question from the list
export const EachQuestion = (id, navigate) => {
  return async (dispatch) => {
    await axios
      .post(`${baseurl}/start_exam?examId=${id}`, {}, { headers })
      .then((response) => {
        if (response.data.status === 200) {
          navigate("/ExamList");
          dispatch({ type: "EACHQUESTION", payload: response.data });
        } else {
          alert(response.data.data);
        }
      });
  };
};

////To submit the exam after attempting
export const SubmitExam = (exam, ques, navigate) => {
  return async (dispatch) => {
    await axios
      .post(
        `${baseurl}/submit`,
        { examId: exam, examresponseultId: ques },
        { headers }
      )
      .then((response) => {
        if (response.data.status === 200) {
          navigate("/ExamResult");
          dispatch({ type: "SUBMITEXAM", payload: response });
        } else {
          alert(response.data.data);
        }
      });
  };
};

////API to finish the exam
export const FinishExam = (exid, qno) => {
  return async (dispatch) => {
    await axios
      .post(`${baseurl}/finishExam`, { examId: exid, qno: qno }, { headers })
      .then((response) => {
        if (response.data.status === 200) {
          dispatch({ type: "FINISHEXAM", payload: response });
        } else {
          alert(response.data.data);
        }
      });
  };
};

////API to get the responseult fot the exam
export const ExamResult = () => {
  return async (dispatch) => {
    await axios
      .post(`${baseurl}/exam_responseult`, {}, { headers })
      .then((response) => {
        if (response.data.status === 200) {
          dispatch({ type: "EXAMRESULT", payload: response.data });
        } else {
          alert(response.data);
        }
      });
  };
};

////API for the premium exam package subscription
export const Pckginfo = (pkg, navigate) => {
  return async (dispatch) => {
    await axios
      .post(`${baseurl}/packageDetails`, { pkg }, { headers })
      .then((response) => {
        if (response.data.status === 200) {
          navigate("/PaymentPage");
          dispatch({ type: "PACKAGE", payload: response.data });
        } else {
          alert(response.data.data);
        }
      });
  };
};

////API to display the payment details of the subscribed package
export const Payment = (time, navigate) => {
  return async (dispatch) => {
    axios
      .post(
        `${baseurl}/test_paymentGateway`,
        { packagearr: { 8: "1" }, packagetype: "RAZORPAY", year: time },
        { headers }
      )
      .then((response) => {
        if (response.data.status === 200) {
          navigate("/Transaction");
          dispatch({ type: "PAYMENT", payload: response });
        } else {
          alert(response.data.data);
        }
      });
  };
};
