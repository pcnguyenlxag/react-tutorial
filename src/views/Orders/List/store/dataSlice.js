import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {
    apiGetOrderList,
    apiPutOrder
} from 'services/OrdersService'

export const getOrders = createAsyncThunk('orderListSlice/order/getOrders', async (data) => {
    const response = await apiGetOrderList(data)
    return response.data
})

export const updateOrder = async (data) => {
    const response = await apiPutOrder(data)
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


const dataOrderSlice = createSlice({
    name: 'orderListSlice/order',
    initialState: {
        loading: false,
        orderList: [],
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
        [getOrders.fulfilled]: (state, action) => {
            state.orderList = action.payload.data
            state.tableData.total = action.payload.total
            state.loading = false
        },
        [getOrders.pending]: (state) => {
            state.loading = true
        },
    }
})

export const { updateOrderList, setTableData, setFilterData, setSortedColumn } = dataOrderSlice.actions

export default dataOrderSlice.reducer
