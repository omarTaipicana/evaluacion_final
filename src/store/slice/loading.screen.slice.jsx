import { createSlice } from '@reduxjs/toolkit';

export const loadingScreen = createSlice({
    name: 'loadingScreen',
    initialState: true,
    reducers: {
        setLoadingScreen:(state, actions)=>{
               return actions.payload
        }
    }
})

export const { setLoadingScreen } = loadingScreen.actions;

export default loadingScreen.reducer;
