import iniState from "./state";

const FeedbackFormReducer = (state = { ...iniState }, action) => {
  debugger;
  switch (action.type) {
    case "ADD_INTERVIEW_FEEDBACK":
      state = { ...state };
      state.defaultTechStack.push(state.defaultTechStack[0] + action.payload);
      break;
    default:
      console.log("test");
  }
  return state;
};

export default FeedbackFormReducer;
