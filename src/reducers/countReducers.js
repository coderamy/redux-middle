const initionalCount = Number(localStorage.getItem('count') || 0);

const countReducers = (state = initionalCount, action) => { 
  switch (action.type) {
    case "INCREMENt":
      let count = state + 1;  
      localStorage.setItem('count', count)
      return count;
    case "DECREMENT":
      let countDe = state - 1;  
      localStorage.setItem('count', countDe)
      return countDe;
    default:
      return state;
  }
};

export default countReducers;