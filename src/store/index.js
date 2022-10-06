import { configureStore } from '@reduxjs/toolkit'
import cartProductsSlice from './slice/cart.products.slice'
import loadingScreenSlice from './slice/loading.screen.slice'
import productsSlice from './slice/products.slice'
import shopingSlice from './slice/shoping.slice'

export default configureStore({
  reducer: {
    loadingScreen:loadingScreenSlice,
    products:productsSlice,
    shoping:shopingSlice,
    cartProducts:cartProductsSlice,
	}
})