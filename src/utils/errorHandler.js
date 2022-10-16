import {AuthCode} from "../constants";
import {toasterService} from "../utils/toasterUtil";
export const handleFetchError = async (res) => {
  if (
    res.status >= AuthCode.BAD_REQUEST &&
    res.status < AuthCode.CONNECTION_TIMED_OUT
  ) {
    const response = await res.clone().json();
    let errRes = {
      ...response,
      Message: response.Message,
      Status: res.status,
    };
    if (res.status === AuthCode.UNAUTHORIZED) {
      // Call logout api here
      localStorage.clear();
    }
    toasterService.error("something went wrong");
    throw errRes;
  }
  return res.json();
};
