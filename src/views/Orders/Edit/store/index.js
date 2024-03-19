import { combineReducers } from '@reduxjs/toolkit'
import data from './dataSlice'
import product from './dataProductsSlice'
import order from './dataOrdersSlice'

const reducer = combineReducers({
    data,
    product,
    order
})

export default reducer