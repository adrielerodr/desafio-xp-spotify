import types from './album.types';

const initialState = {
  id: '',
  name: '',
  images: [],
  tracks: [],
  artists: []
};

const resetLists = (state, payload) => {
  let resetedLists = null;
  if (Array.isArray(payload)) {
    let reseted = {};
    payload.map(list => (reseted[list] = initialState.lists[list]));
    resetedLists = { ...reseted };
  } else {
    resetedLists = { [payload]: initialState.lists[payload] };
  }
  return { ...state, lists: { ...state.lists, ...resetedLists } };
};

export default function search(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case types.RESET_LISTS:
      return resetLists(state, payload);
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
