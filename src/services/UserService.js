import ApiService from "./ApiService"

export async function apiGetUser(data) {
    return ApiService.fetchData({
        url: `/users/profile`,
        method: 'get',
    })
}