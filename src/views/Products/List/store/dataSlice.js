import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {
    apiGetProductList,
    apiDeleteProduct
} from 'services/ProductsService'

export const getProducts = createAsyncThunk('productListSlice/product/getProducts', async (data) => {
    const response = await apiGetProductList(data)
    return response.data
})

export const deleteProduct = async (data) => {
    const response = await apiDeleteProduct(data)
    return response.data
}

export const initialTableData = {
    total: 0,
    pageIndex: 1,
    pageSize: 10,
    query: '',
    sort: {
        order: 'desc',
        key: 'createdAt'
    }
}


const dataCustomerSlice = createSlice({
    name: 'productListSlice/product',
    initialState: {
        loading: false,
        productList: [],
        tableData: initialTableData,

    },
    reducers: {
        updateProductList: (state, action) => {
            state.productList = action.payload
        },
        setTableData: (state, action) => {
            state.tableData = action.payload
        },
    },
    extraReducers: {
        [getProducts.fulfilled]: (state, action) => {
            state.productList = action.payload.data
            state.tableData.total = action.payload.total
            state.loading = false
        },
        [getProducts.pending]: (state) => {
            state.loading = true
        },
    }
})

export const { updateProductList, setTableData, setFilterData, setSortedColumn } = dataCustomerSlice.actions

export default dataCustomerSlice.reducer
