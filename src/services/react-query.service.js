import {PAGINATION_COUNT, PAGINATION_CONSTANT} from "../constants/constant";

const getNextPageParam = (lastPage, allPages) => {
  return lastPage?.filteredCount / PAGINATION_COUNT > allPages?.length
    ? allPages.length
    : undefined;
};

const createPagination = (pageParam) => {
  return {offset: pageParam * PAGINATION_COUNT, count: PAGINATION_COUNT};
};

export {getNextPageParam, createPagination};
