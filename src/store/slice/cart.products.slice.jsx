import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { setLoadingScreen } from './loading.screen.slice';
import getConfig from '../../utils/getConfig';

export const cartProductsSlice = createSlice({
    name: 'carProductsSlice',
    initialState: [],
    reducers: {
        setCartProducts: (state, action) => {
            return action.payload

        }

    }
})

export const getCarProductsThunk = () => (dispatch) => {
    dispatch(setLoadingScreen(true));
    return axios
        .get(`https://ecommerce-api-react.herokuapp.com/api/v1/cart`, getConfig())
        .then(res => dispatch(setCartProducts(res.data.data.cart.products)))
        .finally(() => dispatch(setLoadingScreen(false)));
}

export const { setCartProducts } = cartProductsSlice.actions;

export default cartProductsSlice.reducer;
