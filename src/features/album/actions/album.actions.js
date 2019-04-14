import types from './album.types';
import AlbumApi from './album.api';

export const resetAlbum = () => dispatch =>
  dispatch({
    type: types.RESET_ALBUM
  });

export const getAlbumById = (id, token) => dispatch =>
  dispatch({
    type: types.GET_ALBUM_BY_ID,
    payload: AlbumApi.getAlbumById(id, token)
  });
