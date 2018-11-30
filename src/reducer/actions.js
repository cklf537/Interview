const InterviewReducer = (state, action) => {
  debugger;
  let _state = state;
  switch (action) {
    case "GET_DATA":
      _state = { ...state };
      break;
    default:
      _state = { ...state };
  }
  return _state;
};

export default InterviewReducer;
