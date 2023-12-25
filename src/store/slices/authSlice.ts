import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IUser {
  email: string;
}

interface AuthInitialState {
  user: IUser | null;
}

const initialState: AuthInitialState = {
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;
