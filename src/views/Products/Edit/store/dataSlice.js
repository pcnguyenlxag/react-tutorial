import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { apiGetProduct, apiPutProduct, apiDeleteProduct } from 'services/ProductsService'

export const getProduct = createAsyncThunk('productEdit/data/getProduct', async (data) => {
    const response = await apiGetProduct(data)
    return response.data
})

export const updateProduct = async (data) => {
    const response = await apiPutProduct(data)
    return response.data
}

export const deleteProduct = async (data) => {
    const response = await apiDeleteProduct(data)
    return response.data
}

const dataSlice = createSlice({
    name: 'productEdit/data',
    initialState: {
        loading: false,
        productData: null,
    },
    reducers: {
    },
    extraReducers: {
        [getProduct.fulfilled]: (state, action) => {
            state.productData = action.payload
            state.loading = false
        },
        [getProduct.pending]: (state) => {
            state.loading = true
        },
    }
})

export default dataSlice.reducer
