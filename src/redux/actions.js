import { createAction } from "@reduxjs/toolkit";

const fetchRequest = createAction('contacts/fetchRequest');
const fetchSuccess = createAction('contacts/fetchSuccess');
const fetchError = createAction('contacts/fetchError');


const addRequest = createAction('contacts/addRequest');
const addSuccess = createAction('contacts/addSuccess');
const addError = createAction('contacts/addError');

const deleteRequest = createAction('contacts/deleteRequest');
const deleteSuccess = createAction('contacts/deleteSuccess');
const deleteError = createAction('contacts/deleteError');


const Filter = createAction("contacts/Filter");

export default {
  fetchRequest,
  fetchSuccess,
  fetchError,
  addRequest,
  addSuccess,
  addError,
  deleteRequest,
  deleteSuccess,
  deleteError,
 Filter
};