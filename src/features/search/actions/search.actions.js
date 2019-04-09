import types from './search.types';
import SearchApi from './search.api';

export const setField = payload => {
  return { type: types.SET_FIELD, payload };
};

export const resetFields = payload => {
  return { type: types.RESET_FIELDS, payload };
};

export const resetLists = payload => {
  return { type: types.RESET_LISTS, payload };
};

export const setToken = token => dispatch =>
  dispatch({
    type: types.SET_TOKEN,
    payload: token
  });

export const getRecommendations = token => dispatch =>
  dispatch({
    type: types.GET_RECOMMENDATIONS,
    payload: SearchApi.getRecommendations(token)
  });

export const getAlbums = (search, token) => dispatch =>
  dispatch({
    type: types.GET_ALBUMS,
    payload: SearchApi.getAlbums(search, token)
  });
