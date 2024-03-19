import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {
    apiGetProductList,
    // apiDeleteOrder
} from 'services/ProductsService'

import {
    apiGetCustomerList
    // apiDeleteOrder
} from 'services/CustomersService'

export const getProducts = createAsyncThunk('orderNew/order/getProducts', async (data) => {
    const response = await apiGetProductList(data)
    return response.data
})

export const getCustomers = createAsyncThunk('orderNew/order/getCustomers', async (data) => {
    const response = await apiGetCustomerList(data)
    return response.data
})



export const initialTableData = {
    total: 0,
    pageIndex: 1,
    pageSize: 10,
    query: '',
    sort: {
        order: 'desc',
        key: ''
    }
}

const dataSlice = createSlice({
    name: 'orderNew/data',
    initialState: {
        loadingProduct: false,
        loadingCustomer: false,
        productList: [],
        customerList: [],
        tableData: initialTableData,
    },
    reducers: {},
    extraReducers: {
        [getProducts.fulfilled]: (state, action) => {
            state.productList = action.payload.data
            state.tableData.total = action.payload.total
            state.loadingProduct = false
        },
        [getProducts.pending]: (state) => {
            state.loadingProduct = true
        },
        [getCustomers.fulfilled]: (state, action) => {
            state.customerList = action.payload.data
            state.tableData.total = action.payload.total
            state.loadingCustomer = false
        },
        [getCustomers.pending]: (state) => {
            state.loadingCustomer = true
        }
    }
})

export default dataSlice.reducer
