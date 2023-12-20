import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  number: 0,
};

// action creator와 reducer를 한번에 생성할 수 있다.
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addNumber: (state, action) => {
      state.number = state.number + action.payload;
    },
    minusNumber: (state, action) => {
      state.number = state.number - action.payload;
    },
  },
});

// reducer는 밖깥으로 내보냄

export default counterSlice.reducer;

// action은 addNumber와 minusNumber가 가지고 있는 객체를 의미함

export const { addNumber, minusNumber } = counterSlice.actions;
