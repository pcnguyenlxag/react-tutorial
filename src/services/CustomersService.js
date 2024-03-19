import ApiService from "./ApiService"


export async function apiGetCustomerList(data) {
    return ApiService.fetchData({
        url: '/customers/list',
        method: 'post',
        data
    })
}

export async function apiDeleteCustomer(data) {
    return ApiService.fetchData({
        url: `/customers/delete`,
        method: 'delete',
        data
    })
}

export async function apiGetCustomer(data) {
    return ApiService.fetchData({
        url: `/customers/detail`,
        method: 'post',
        data
    })
}

export async function apiPutCustomer(data) {
    return ApiService.fetchData({
        url: `/customers/update`,
        method: 'put',
        data
    })
}

export async function apiCreateCustomer(data) {
    return ApiService.fetchData({
        url: '/customers/create',
        method: 'post',
        data
    })
}
