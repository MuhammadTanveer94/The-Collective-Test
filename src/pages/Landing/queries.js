import { useQuery } from "react-query";
import { GistsService } from "../../apiServices";
import { API_STORAGE_KEY } from "../../constants/constant";

const gistsListKey = API_STORAGE_KEY.PUBLIC_GISTS_LIST;
const forkListKey = API_STORAGE_KEY.FORK_GISTS_LIST;
const forkUser = API_STORAGE_KEY.FORK_USER;

const listKeys = {
  gistsList: (payload, searchText) => [gistsListKey, payload, searchText],
  forkList: (id) => [forkListKey, id],
  forkUser: (id) => [forkUser, id],
};
function useGistsList(payload, searchText) {
  return useQuery(
    listKeys.gistsList(payload, searchText),
    async () => {
      const res = await GistsService.getGistsList(payload, null, searchText);
      return res;
    },
    {
      keepPreviousData: true,
      staleTime: Infinity,
      enabled: searchText ? true : false,
    }
  );
}
function useForkList(id) {
  return useQuery(
    listKeys.forkList(id),
    async () => {
      const res = await GistsService.getForkList({}, null, id);
      return res;
    },
    { keepPreviousData: true, staleTime: Infinity }
  );
}

function useGetUser(id) {
  return useQuery(
    listKeys.forkUser(id),
    async () => {
      const res = await GistsService.getForkUser({}, null, id);
      return res;
    },
    { keepPreviousData: true, staleTime: Infinity }
  );
}
export { useGistsList, useGetUser, useForkList };
