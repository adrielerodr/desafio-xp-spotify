import types from './search.types';
// import SpotifyApi from './spotifyApi';

export const setField = payload => {
  return { type: types.SET_FIELD, payload };
};

export const resetFields = payload => {
  return { type: types.RESET_FIELDS, payload };
};

export const resetLists = payload => {
  return { type: types.RESET_LISTS, payload };
};
