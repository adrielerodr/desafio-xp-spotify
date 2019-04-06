import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import search from '@/features/search/actions/search.reducer.js';

export default combineReducers({
  search,
  form
});
