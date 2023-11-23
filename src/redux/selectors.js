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

export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectIsRefreshing = state => state.auth.isRefreshing;

export const selectUser = state => state.auth.user;

export const selectErrorLogged = state => state.auth.errorLogged; 