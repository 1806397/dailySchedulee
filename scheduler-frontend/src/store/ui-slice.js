import { createSlice } from "@reduxjs/toolkit";
const uiState = {
  setForm: false,
};
const uiSlice = createSlice({
  name: "ui",
  initialState: uiState,
  reducers: {
    toggleForm(state) {
      state.setForm = !state.setForm;
    },
  },
});
export const uiAction = uiSlice.actions;
export default uiSlice;
