import types from './search.types';
import _ from 'lodash';

const initialState = {
  album: {},
  fields: {
    search: ''
  },
  lists: {
    results: []
  }
};

const mergeFields = (fields, payload) => {
  let updatedFields = _.cloneDeep(fields);
  if (payload.overwrite) _.set(updatedFields, payload.field, payload.value);
  else _.merge(updatedFields, { [payload.field]: payload.value });

  return updatedFields;
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

const resetFields = (state, payload) => {
  let resetedFields = null;
  if (!payload) {
    return { ...state, fields: { ...initialState.fields } };
  } else if (Array.isArray(payload)) {
    let reseted = {};
    payload.map(field => (reseted[field] = initialState.fields[field]));
    resetedFields = { ...reseted };
  } else {
    resetedFields = { [payload]: initialState.fields[payload] };
  }
  return { ...state, fields: { ...state.fields, ...resetedFields } };
};

export default function search(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case types.SET_FIELD:
      return { ...state, fields: mergeFields(state.fields, payload) };
    case types.RESET_LISTS:
      return resetLists(state, payload);
    case types.RESET_FIELDS:
      return resetFields(state, payload);
    default:
      return state;
  }
}