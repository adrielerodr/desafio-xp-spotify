import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import search from '@/features/search/actions/search.reducer.js';
import album from '@/features/album/actions/album.reducer.js';

export default combineReducers({
  search,
  album,
  form
});
