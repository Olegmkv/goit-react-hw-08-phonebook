import { createSlice } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchContacts } from "./operations";

const handlePending = state => {
    state.isLoading = true;
};

const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};

const handleFetchFulfilled = (state, action) => {
    state.isLoading = false;
    state.error = null;
    state.items = action.payload;
};

const handleAddFulfilled = (state, action) => {
    state.isLoading = false;
    state.error = null;
    state.items.push(action.payload);
};

const handleDeleteFulfilled = (state, action) => {
    state.isLoading = false;
    state.error = null;
    const index = state.items.findIndex(
        task => task.id === action.payload.id
    );
    state.items.splice(index, 1);
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    },
    extraReducers:
        (builder) => {
            builder.addCase(fetchContacts.pending, handlePending
            ).addCase(fetchContacts.fulfilled, handleFetchFulfilled
            ).addCase(fetchContacts.rejected, handleRejected
            ).addCase(addContact.pending, handlePending
            ).addCase(addContact.fulfilled, handleAddFulfilled
            ).addCase(addContact.rejected, handleRejected
            ).addCase(deleteContact.pending, handlePending
            ).addCase(deleteContact.fulfilled, handleDeleteFulfilled
            ).addCase(deleteContact.rejected, handleRejected)
        }
});
// Експортуємо редюсер
export const contactsReducer = contactsSlice.reducer;
