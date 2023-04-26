import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserRegistration from "./Components/userRegistration";
import UserVerification from "./Components/UserVerification";
import UserLogin from "./Components/UserLogin";
import Home from "./Components/Home";
import EachFreeQuestion from "./Components/EachFreeQuestion";
import EachPremiumQuestion from "./Components/EachPremiumQuestion";
import ExamList from "./Components/ExamList";
import ExamResult from "./Components/ExamResult";
import SubmitExamComp from "./Components/SubmitExam";
import FinishExam from "./Components/FinishExam";
import PaymentPage from "./Components/PaymentPage";
import Transaction from "./Components/Transaction";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/UserRegistration" element={<UserRegistration />} />
          <Route path="/UserVerification" element={<UserVerification />} />
          <Route path="/" element={<UserLogin />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/EachFreeQuestion" element={<EachFreeQuestion />} />
          <Route path="/EachPremiumQuestion" element={<EachPremiumQuestion />}/>
          <Route path="/ExamList" element={<ExamList />} />
          <Route path="/ExamResult" element={<ExamResult />} />
          <Route path="/SubmitExamComp" element={<SubmitExamComp />} />
          <Route path="/FinishExam/:name" element={<FinishExam />} />
          <Route path="/PaymentPage" element={<PaymentPage />} />
          <Route path="/Transaction" element={<Transaction />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
