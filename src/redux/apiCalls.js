import { dataRequest } from "../hooks/requestMethods";
import { loginFailure, loginStart, loginSuccess } from "./userRedux";
export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await dataRequest.post("/auth/login", user, {
      withcredentials: true,
      credentials: "include",
    });
    console.log(res);
    dispatch(loginSuccess(res.data));
  } catch (error) {
    dispatch(loginFailure());
  }
};
