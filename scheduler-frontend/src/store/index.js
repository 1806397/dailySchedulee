import { configureStore } from "@reduxjs/toolkit";
import scheduleSlice from "./schedule-slice";
import uiSlice from "./ui-slice";
const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    schedule: scheduleSlice.reducer,
  },
});
export default store;
