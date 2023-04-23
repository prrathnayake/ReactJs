import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface User {
  id: number;
  first_name: string;
  last_name: string;
}

interface UserState {
  users: User[];
}

const initialState: UserState = {
  users: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (
      state,
      action: PayloadAction<{ first_name: string; last_name: string }>
    ) => {
      state.users.push({
        id: state.users.length,
        first_name: action.payload.first_name,
        last_name: action.payload.last_name,
      });
    },
  },
});

export default userSlice.reducer;
export const { addUser } = userSlice.actions;
