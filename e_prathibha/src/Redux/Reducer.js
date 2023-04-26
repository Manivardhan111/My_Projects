const initialState = {
  user: [],
  ExamType: [],
  questionfreeList: [],
  questionprmList: [],
  result: [],
  login: [],
  verify: [],
  Package: [],
  premium: [],
  status:[],
  finsh:[]
};

const RootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "USER_REGISTRATION":
      return {
        ...state,
        user: action.payload,
      };
    case "VERIFYEMAIL":
      return {
        ...state,
        verify: action.payload,
      };
    case "USER_LOGIN":
      return { ...state, login: action.payload };
    case "FREEEXAM":
      return {
        ...state,
        questionfreeList: action.payload,
      };
    case "PREMIUMEXAM":
      return {
        ...state,
        questionprmList: action.payload,
      };
    case "EACHQUESTION":
      // console.log(action.payload,"red")
      return {
        ...state,
        ExamType: action.payload,
      };
    case "SUBMITEXAM":
      return {
        ...state,
        result: action.payload.data,
        status:action.payload.status
      };
    case "EXAMRESULT":
      return {
        ...state,
        
      };
    case "FINISHEXAM":
      console.log(action.payload)
      return {
        ...state,
        finsh:action.payload

      };
    case "PAYMENT":
      return {
        ...state,
        premium: action.payload,
      };
    case "PACKAGE":
      return {
        ...state,
        Package: action.payload,
      };

    default:
      return state;
  }
};
export default RootReducer;
