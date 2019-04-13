import types from './album.types';
import AlbumApi from './album.api';

export const setToken = token => dispatch =>
  dispatch({
    type: types.SET_TOKEN,
    payload: token
  });

export const getAlbumById = (id, token) => dispatch =>
  dispatch({
    type: types.GET_ALBUM_BY_ID,
    payload: AlbumApi.getAlbumById(id, token)
  });
