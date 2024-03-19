import { APP_PREFIX_PATH } from 'constants/route.constant'
import { NAV_ITEM_TYPE_ITEM, NAV_ITEM_TYPE_COLLAPSE } from 'constants/navigation.constant'
import { ADMIN, USER } from 'constants/roles.constant'

const appsNavigationConfig = [
	{
		key: 'appsReport.dashboard',
		path: `${APP_PREFIX_PATH}/dashboard`,
		title: 'Thống kê',
		translateKey: 'nav.dashboard',
		icon: 'chart',
		type: NAV_ITEM_TYPE_ITEM,
		authority: [ADMIN, USER],
		subMenu: []
	},
	{
		key: 'appsCustomers.customerList',
		path: '',
		title: 'Quản lý khách hàng',
		translateKey: 'nav.appsCustomers.customerManage',
		icon: 'users',
		type: NAV_ITEM_TYPE_COLLAPSE,
		authority: [ADMIN, USER],
		subMenu: [

			{
				key: 'appsCustomers.customerList',
				path: `${APP_PREFIX_PATH}/customers/list`,
				title: 'Danh sách khách hàng',
				translateKey: 'nav.appsCustomers.customerList',
				type: NAV_ITEM_TYPE_ITEM,
				authority: [ADMIN, USER],
				subMenu: []
			},
			{
				key: 'appsCustomers.customerNew',
				path: `${APP_PREFIX_PATH}/customers/new`,
				title: 'Tạo khách hàng',
				translateKey: 'nav.appsCustomers.customerNew',
				type: NAV_ITEM_TYPE_ITEM,
				authority: [ADMIN, USER],
				subMenu: []
			},
		]
	},
	{
		key: 'appsOrders.orderList',
		path: '',
		title: 'Quản lý đơn hàng',
		translateKey: 'nav.appsOrders.orderManage',
		icon: 'orders',
		type: NAV_ITEM_TYPE_COLLAPSE,
		authority: [ADMIN, USER],
		subMenu: [

			{
				key: 'appsOrders.orderList',
				path: `${APP_PREFIX_PATH}/orders/list`,
				title: 'Danh sách đơn hàng',
				translateKey: 'nav.appsOrders.orderList',
				type: NAV_ITEM_TYPE_ITEM,
				authority: [ADMIN, USER],
				subMenu: []
			},
			{
				key: 'appsOrders.orderNew',
				path: `${APP_PREFIX_PATH}/orders/new`,
				title: 'Tạo đơn hàng',
				translateKey: 'nav.appsOrders.orderNew',
				type: NAV_ITEM_TYPE_ITEM,
				authority: [ADMIN, USER],
				subMenu: []
			},
		]
	},
	{
		key: 'appsProducts.productList',
		path: '',
		title: 'Quản lý sản phẩm',
		translateKey: 'nav.appsProducts.productManage',
		icon: 'products',
		type: NAV_ITEM_TYPE_COLLAPSE,
		authority: [ADMIN, USER],
		subMenu: [

			{
				key: 'appsProducts.productList',
				path: `${APP_PREFIX_PATH}/products/list`,
				title: 'Danh sách đơn hàng',
				translateKey: 'nav.appsProducts.productList',
				type: NAV_ITEM_TYPE_ITEM,
				authority: [ADMIN, USER],
				subMenu: []
			},
			{
				key: 'appsProducts.productNew',
				path: `${APP_PREFIX_PATH}/products/new`,
				title: 'Tạo đơn hàng',
				translateKey: 'nav.appsProducts.productNew',
				type: NAV_ITEM_TYPE_ITEM,
				authority: [ADMIN, USER],
				subMenu: []
			},
		]
	},




]

export default appsNavigationConfig