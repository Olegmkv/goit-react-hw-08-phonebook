import { createSlice } from "@reduxjs/toolkit";
import { logIn, logOut, refreshUser, register } from "./operations";


const handlePending = state => {
    state.isLoggedIn = false;
};

const handleRejected = (state, action) => {
    state.isLoggedIn = false;
    state.errorLogged = action.payload;
};

const handleRegisterFulfield = (state, action) => {
    state.user = action.payload.user;
    state.token = action.payload.token;
    state.isLoggedIn = true;
}

const handleFulfieldLogin = (state, action) => {
    state.user = action.payload.user;
    state.token = action.payload.token;
    state.isLoggedIn = true;
}

const handleLogOut = state => {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
}

const handleRefreshPending = (state) => {
    state.isRefreshing = true;    
}

const handleRefreshFulfilled = (state, action) => {
    state.user = action.payload;
    state.isLoggedIn = true;
    state.isRefreshing = false;
}

const handleRefreshRejected = (state) => {
    state.user = { name: null, email: null };
    state.isLoggedIn = false;
    state.isRefreshing = false;
}


const authSlice = createSlice({
  name: "auth",
  initialState: {
      user: { name: null, email: null },
      token: null,
      isLoggedIn: false,
      isRefreshing: true,
      errorLogged: null,
    },
    extraReducers:
        (builder) => {
            builder.addCase(register.pending, handlePending
            ).addCase(register.fulfilled, handleRegisterFulfield
            ).addCase(register.rejected, handleRejected
            ).addCase(logIn.pending,handlePending
            ).addCase(logIn.fulfilled, handleFulfieldLogin
            ).addCase(logIn.rejected,handleRejected
            ).addCase(logOut.fulfilled, handleLogOut
            ).addCase(refreshUser.pending, handleRefreshPending
            ).addCase(refreshUser.fulfilled, handleRefreshFulfilled
            ).addCase(refreshUser.rejected, handleRefreshRejected)
        }
});
// Експортуємо редюсер
export const authReducer = authSlice.reducer;
