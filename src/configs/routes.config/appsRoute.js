import React from 'react'
import { APP_PREFIX_PATH } from 'constants/route.constant'
import { ADMIN, USER } from 'constants/roles.constant'

const appsRoute = [
    {
        key: 'appsReport.dashboard',
        path: `${APP_PREFIX_PATH}/dashboard`,
        component: React.lazy(() => import('views/Dashboard')),
        authority: [ADMIN, USER],
    },
    {
        key: 'appsCustomers.customerList',
        path: `${APP_PREFIX_PATH}/customers/list`,
        component: React.lazy(() => import('views/Customers/List')),
        authority: [ADMIN, USER],

    },
    {
        key: 'appsCustomers.customerNew',
        path: `${APP_PREFIX_PATH}/customers/new`,
        component: React.lazy(() => import('views/Customers/New')),
        authority: [ADMIN, USER],
        meta: {
            header: 'Thêm khách hàng',
        }
    },
    {
        key: 'appsCustomers.customerList',
        path: `${APP_PREFIX_PATH}/customers/edit/:customerId`,
        component: React.lazy(() => import('views/Customers/Edit')),
        authority: [ADMIN, USER],
        meta: {
            header: 'Sửa khách hàng',
        }
    },
    {
        key: 'appsOrders.orderList',
        path: `${APP_PREFIX_PATH}/orders/list`,
        component: React.lazy(() => import('views/Orders/List')),
        authority: [ADMIN, USER],
    },
    {
        key: 'appsOrders.orderNew',
        path: `${APP_PREFIX_PATH}/orders/new`,
        component: React.lazy(() => import('views/Orders/New')),
        authority: [ADMIN, USER],
        meta: {
            header: 'Thêm đơn hàng',
        }
    },
    {
        key: 'appsOrders.orderList',
        path: `${APP_PREFIX_PATH}/orders/edit/:orderId`,
        component: React.lazy(() => import('views/Orders/Edit')),
        authority: [ADMIN, USER],
        meta: {
            header: 'Sửa đơn hàng',
        }
    },
    {
        key: 'appsProducts.productList',
        path: `${APP_PREFIX_PATH}/products/list`,
        component: React.lazy(() => import('views/Products/List')),
        authority: [ADMIN, USER],
    },
    {
        key: 'appsProducts.productNew',
        path: `${APP_PREFIX_PATH}/products/new`,
        component: React.lazy(() => import('views/Products/New')),
        authority: [ADMIN, USER],
        meta: {
            header: 'Thêm sản phẩm',
        }
    },
    {
        key: 'appsProducts.productList',
        path: `${APP_PREFIX_PATH}/products/edit/:productId`,
        component: React.lazy(() => import('views/Products/Edit')),
        authority: [ADMIN, USER],
        meta: {
            header: 'Sửa sản phẩm',
        }
    },
]

export default appsRoute