import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { apiGetCustomer, apiPutCustomer, apiDeleteCustomer } from 'services/CustomersService'
import {
    apiGetOrderListByCustomerId,
    // apiDeleteOrder
} from 'services/OrdersService'
import {
    apiGetProductList,
    // apiDeleteOrder
} from 'services/ProductsService'

export const getOrdersByCustomerId = createAsyncThunk('orderListSlice/order/getOrdersByCustomerId', async (data) => {
    const response = await apiGetOrderListByCustomerId(data)
    return response.data
})

export const getProducts = createAsyncThunk('orderListSlice/order/getProducts', async (data) => {
    const response = await apiGetProductList(data)
    return response.data
})

export const getCustomer = createAsyncThunk('customerEdit/data/getCustomer', async (data) => {
    const response = await apiGetCustomer(data)
    return response.data
})

export const updateCustomer = async (data) => {
    const response = await apiPutCustomer(data)
    return response.data
}

export const deleteCustomer = async (data) => {
    const response = await apiDeleteCustomer(data)
    return response.data
}

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
    name: 'customerEdit/data',
    initialState: {
        loadingOrder: false,
        loading: false,
        customerData: null,
        orderList: [],
        productList: [],
        tableData: initialTableData,
    },
    reducers: {
        updateOrderList: (state, action) => {
            state.orderList = action.payload
        },
        setTableData: (state, action) => {
            state.tableData = action.payload
        },
    },
    extraReducers: {
        [getCustomer.fulfilled]: (state, action) => {
            state.customerData = action.payload
            state.loading = false
        },
        [getCustomer.pending]: (state) => {
            state.loading = true
        },
        [getProducts.fulfilled]: (state, action) => {
            state.productList = action.payload.data
            state.tableData.total = action.payload.total
            state.loadingOrder = false
        },
        [getProducts.pending]: (state) => {
            state.loadingOrder = true
        },
        [getOrdersByCustomerId.fulfilled]: (state, action) => {
            state.orderList = action.payload.data
            state.tableData.total = action.payload.total
            state.loadingOrder = false
        },
        [getOrdersByCustomerId.pending]: (state) => {
            state.loadingOrder = true
        },
    }
})

export default dataSlice.reducer
