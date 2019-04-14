import types from './album.types';

const initialState = {
  id: '',
  name: '',
  images: [],
  tracks: [],
  artists: []
};

export default function search(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case types.RESET_ALBUM:
      return initialState;
    case `${types.GET_ALBUM_BY_ID}_FULFILLED`:
      return {
        artists: payload.artists,
        id: payload.id,
        images: payload.images,
        name: payload.name,
        tracks: payload.tracks
      };
    default:
      return state;
  }
}
