import { createSlice } from '@reduxjs/toolkit';

const initialState = {data: []};

const stateSlice = createSlice({
    name: 'state',
    initialState,
    reducers: {
        addValue: (state, action) => {
            // console.log(action.payload)
            state.data = action.payload;
            
        },
    },
});

export const { addValue } = stateSlice.actions;
export default stateSlice.reducer;