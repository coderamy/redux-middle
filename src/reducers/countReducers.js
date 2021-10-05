const countReducers = (state = 0, action) => { 
  switch (action.type) {
    case "INCREMENt":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

export default countReducers;