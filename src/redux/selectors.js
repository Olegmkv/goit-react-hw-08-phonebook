import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = state => state.contacts.items;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectFilter = state => state.filters.filter;

export const selectfiltredContacts = createSelector([selectContacts, selectFilter],
    (contacts, filter) => {
        const filtredContacts = contacts.filter(contact =>
            contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()));
        return filtredContacts
    }
)