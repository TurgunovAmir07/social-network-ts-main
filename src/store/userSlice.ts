import { createSlice } from "@reduxjs/toolkit";

interface IUserSliceState {
  user: IUser | null;
}

export interface IUser {
  mail: string;
  phone_number: string;
  user_id: number;
  name: string;
  reg_date: string;
  city: string;
}

const initialState: IUserSliceState = {
  user: null,
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    changeUser(state, action) {
      state.user = action.payload;
    },
  },
});

export default userSlice.reducer;
export const { changeUser } = userSlice.actions;
