import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact: (state, action) => {
      state.push(action.payload);
    },
    deleteContact: (state, action) => {
      return state.filter((contact) => contact.id !== action.payload);
    },
    setContacts: (state, action) => {
      return action.payload;
    },
    setFilter: (state, action) => {
      return action.payload;
    },
  },
});

export const { addContact, deleteContact, setContacts, setFilter } = contactsSlice.actions;
export default contactsSlice.reducer;
