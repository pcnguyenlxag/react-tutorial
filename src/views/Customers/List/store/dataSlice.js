import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { apiGetCustomerList, apiDeleteCustomer } from 'services/CustomersService'

export const getCustomers = createAsyncThunk('customerListSlice/customer/getCustomers', async (data) => {
    const response = await apiGetCustomerList(data)
    return response.data
})

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
        key: 'createdAt'
    }
}


const dataCustomerSlice = createSlice({
    name: 'customerListSlice/customer',
    initialState: {
        loading: false,
        customerList: [],
        tableData: initialTableData,

    },
    reducers: {
        updateCustomerList: (state, action) => {
            state.customerList = action.payload
        },
        setTableData: (state, action) => {
            state.tableData = action.payload
        },
    },
    extraReducers: {
        [getCustomers.fulfilled]: (state, action) => {
            state.customerList = action.payload.data
            state.tableData.total = action.payload.total
            state.loading = false
        },
        [getCustomers.pending]: (state) => {
            state.loading = true
        },
    }
})

export const { updateCustomerList, setTableData, setFilterData, setSortedColumn } = dataCustomerSlice.actions

export default dataCustomerSlice.reducer
