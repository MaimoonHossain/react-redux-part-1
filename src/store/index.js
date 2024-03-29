import { configureStore, createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { counter: 0 },
  reducers: {
    increment(state, action) {
      state.counter += 1;
    },
    decrement(state, action) {
      state.counter -= 1;
    },
    addBy(state, action) {
      state.counter += action.payload;
    },
  },
});

export const actions = counterSlice.actions;
const store = configureStore({ reducer: counterSlice.reducer });
export default store;

// import { createStore } from 'redux';

// const reducerFn = (state = { counter: 0 }, action) => {
//   if (action.type === 'INCREMENT') {
//     return { counter: state.counter + 1 };
//   }

//   if (action.type === 'DECREMENT' && state.counter > 0) {
//     return { counter: state.counter - 1 };
//   }

//   if (action.type === 'ADD_BY_TEN') {
//     return { counter: state.counter + action.payload };
//   }

//   return state;
// };

// const store = createStore(reducerFn);

// export default store;
