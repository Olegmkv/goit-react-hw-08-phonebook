import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://655097947d203ab6626df475.mockapi.io";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
    async (_, thunkAPI) => {
        try {
            const response = await axios.get("/contacts");
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (obj, thunkAPI) => {
      try {
          const response = await axios.post("/contacts", obj);
          return response.data;
      } catch (e) {
          return thunkAPI.rejectWithValue(e.message);
      }
    }
);

export const deleteContact = createAsyncThunk(
    "contacts/deleteContact",
    async (taskId, thunkAPI) => {
        try {
            const response = await axios.delete(`/contacts/${taskId}`);
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);
