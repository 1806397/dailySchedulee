import { createSlice } from "@reduxjs/toolkit";
const scheduleSlice = createSlice({
  name: "schedule",
  initialState: {
    data: [],
  },
  reducers: {
    updateData(state, action) {
      state.data = action.payload.data;
    },
  },
});
export const scheduleAction = scheduleSlice.actions;
export default scheduleSlice;
