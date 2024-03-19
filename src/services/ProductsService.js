import ApiService from "./ApiService"

export async function apiGetProductList(data) {
    return ApiService.fetchData({
        url: '/products/list',
        method: 'post',
        data
    })
}

export async function apiGetProduct(data) {
    return ApiService.fetchData({
        url: '/products/detail',
        method: 'post',
        data
    })
}

export async function apiCreateProduct(data) {
    return ApiService.fetchData({
        url: '/products/create',
        method: 'post',
        data
    })
}

export async function apiPutProduct(data) {
    return ApiService.fetchData({
        url: `/products/update`,
        method: 'put',
        data
    })
}

export async function apiDeleteProduct(data) {
    return ApiService.fetchData({
        url: '/products/delete',
        method: 'delete',
        data
    })
}