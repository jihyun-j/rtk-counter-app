import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// 2개의 input
// (1)이름: 의미는 크게 없음
// (2)함수
export const __addNumber = createAsyncThunk(
  "ADD_NUMBER_WAIT",
  (payload, thunkAPI) => {
    // 수행하고싶은 동잗: 3초를 기다리게 할 예정
    setTimeout(() => {
      thunkAPI.dispatch(addNumber(payload));
    }, 3000);
  }
);

export const __minusNumber = createAsyncThunk(
  "MINUS_NUMBER_WAIT",
  (payload, thunkAPI) => {
    // 수행하고싶은 동잗: 3초를 기다리게 할 예정
    setTimeout(() => {
      thunkAPI.dispatch(minusNumber(payload));
    }, 3000);
  }
);

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
