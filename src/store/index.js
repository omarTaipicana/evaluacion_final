import { configureStore } from '@reduxjs/toolkit'
import loadingScreenSlice from './slice/loading.screen.slice'
import productsSlice from './slice/products.slice'

export default configureStore({
  reducer: {
    loadingScreen:loadingScreenSlice,
    products:productsSlice
	}
})