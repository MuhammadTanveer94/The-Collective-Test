import { Get } from "./api.helper";

const getGistsList = (params = {}, abortSignal = null, username) => {
  return Get({
    url: `/users/${username}/gists`,
    params,
    abortSignal,
  });
};

const getForkList = (params = {}, abortSignal = null, id) => {
  return Get({
    url: `/gists/${id}/forks`,
    params,
    abortSignal,
  });
};

const getForkUser = (params = {}, abortSignal = null, id) => {
  return Get({
    url: `/gists/${id}`,
    params,
    abortSignal,
  });
};

const GistsService = {
  getGistsList,
  getForkList,
  getForkUser,
};

export default GistsService;
