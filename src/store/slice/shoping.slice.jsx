import { createSlice } from '@reduxjs/toolkit';
import { setLoadingScreen } from './loading.screen.slice';
import axios from 'axios';
import getConfig from '../../utils/getConfig';

export const shopingSlice = createSlice({
    name: 'sohping',
    initialState: [],
    reducers: {
        setFavorites: (state, action) => {
            const favorites = action.payload
            return favorites
        }

    }
})

export const getShopingThunk = () => (dispatch) => {
    dispatch(setLoadingScreen(true));
     axios
        .get(`https://ecommerce-api-react.herokuapp.com/api/v1/purchases`,getConfig())
        .then(res => dispatch(setFavorites(res.data.data.purchases)))
        .finally(() => dispatch(setLoadingScreen(false)));
}

export const { setFavorites } = shopingSlice.actions;

export default shopingSlice.reducer;
