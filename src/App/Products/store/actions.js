import { API_ACTION_FETCH } from "./constants";
import httpService from "../../../httpService";

const fetchStart = () => ({
  type: API_ACTION_FETCH.START,
});

export function fetchHouses() {
  return async (dispatch) => {
    try {
      fetchStart();
      httpService.get("/products", dispatch);
    } catch (e) {
      dispatch({
        type: API_ACTION_FETCH.FAILURE,
        payload: e.message,
      });
    }
  };
}
