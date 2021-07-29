import { createSelector } from "@reduxjs/toolkit";


 const getContacts = state => state.contacts.items;
 const getFilter = state => state.contacts.filter;

const getFilteredContacts = createSelector(
    [getContacts, getFilter],
    (contacts, filter) => {

        const normalizedFilter = filter.toLowerCase();
        return contacts.filter(({ name }) => name.toLowerCase().includes(normalizedFilter),);
    },
       
);



export default  { getFilter, getContacts, getFilteredContacts};

