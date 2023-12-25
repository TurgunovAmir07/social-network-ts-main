import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IUserSliceState {
  user: IChangeUserPayload | null;
}

export interface IUser {
  mail: string;
  phone_number: string;
  user_id: number;
  name: string;
  reg_date: string;
  city: string;
}

interface IChangeUserPayload {
  useremail: string;
  userpassword: string;
}

const initialState: IUserSliceState = {
  user: null,
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    changeUser(state, action: PayloadAction<IChangeUserPayload>) {
      state.user = action.payload;
    },
  },
});

export default userSlice.reducer;
export const { changeUser } = userSlice.actions;
