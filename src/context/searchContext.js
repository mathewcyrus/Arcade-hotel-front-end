import { createContext, useReducer } from "react";

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

  return (
    <searchContext.Provider
      value={{ dates: state.dates, options: state.options, dispatch }}>
      {children}
    </searchContext.Provider>
  );
};
