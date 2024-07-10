// src/store/userSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface PermissionsState {
  user: any;
}

// Define the initial state using that type
const initialState: PermissionsState = {
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<any>) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = null;
    },
  },
});

export const { setUserData, clearUser } = userSlice.actions;
export default userSlice.reducer;
