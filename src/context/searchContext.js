import { createContext, useEffect, useReducer } from "react";

const initial_State = {
  dates: [],
  options: {
    adults: undefined,
    children: undefined,
    bedrooms: undefined,
  },
};
export const searchContext = createContext(initial_State);
const searchReducer = (state, action) => {
  switch (action.type) {
    case "NEW_SEARCH":
      return action.payload;
    default:
      return state;
  }
};

export const SearchContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(searchReducer, initial_State);
  // Load state from local storage on component mount
  useEffect(() => {
    const savedState = localStorage.getItem("searchState");
    if (savedState) {
      dispatch({ type: "NEW_SEARCH", payload: JSON.parse(savedState) });
    }
  }, []);

  // Save state to local storage on state change
  useEffect(() => {
    localStorage.setItem("searchState", JSON.stringify(state));
  }, [state]);

  return (
    <searchContext.Provider
      value={{ dates: state.dates, options: state.options, dispatch }}>
      {children}
    </searchContext.Provider>
  );
};
