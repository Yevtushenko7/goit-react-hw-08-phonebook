import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from 'redux';
import actions from "./actions";


const {
  fetchSuccess,
  addSuccess,
  deleteSuccess,
} = actions;

export const items  = createReducer([], {
  [fetchSuccess]: (_, { payload }) => payload,
  [addSuccess]: (state, { payload }) => [payload, ...state],
  [deleteSuccess]: (state, { payload }) => state.filter(({ id }) => id !== payload),
});

export const filter = createReducer("", {
  [actions.Filter]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});