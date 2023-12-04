import { createSlice } from "@reduxjs/toolkit";

interface IAuthSliceState {
  setUser: IAuthUser | null;
}

export interface IAuthUser {
  mail: string;
  phone_number: string;
  setUser_id: number;
  name: string;
  reg_date: string;
  password: string;
  city: string;
}

const initialState: IAuthSliceState = {
  setUser: null,
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    changeUser(state, action) {
      state.setUser = action.payload;
    },
  },
});

export default authSlice.reducer;
export const { changeUser } = authSlice.actions;
