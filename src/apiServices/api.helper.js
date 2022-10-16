import {fetchUtil} from "../utils/fetchUtils";
import {appendQueryParams} from "../utils/urlUtils";

const Get = ({
  url = "",
  params = {},
  isAuthorized = false,
  abortSignal = null,
}) => {
  let token = null;
  if (isAuthorized) {
    // get token here
  }

  return fetchUtil({
    url: appendQueryParams(url, params),
    token,
    abortSignal,
  })
    .then((res) => {
      return Promise.resolve(res);
    })
    .catch((err) => {
      return Promise.reject(err);
    });
};

export {Get};
