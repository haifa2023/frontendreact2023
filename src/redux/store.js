import { configureStore } from '@reduxjs/toolkit'
import articlesReducer from "../features/articleSlice"
import categoriesReducer from "../features/categorieSlice"
import scategoriesReducer from '../features/scategoriesSlice'
import cartSliceReducer from "../features/cartSlice"

const store = configureStore({
    reducer: {
        storearticles:articlesReducer,
        storescategories: scategoriesReducer,
        storecategories: categoriesReducer,
        storecart:cartSliceReducer,
        }
})
export default store;