import React from 'react'
import reducer from './store'
import { injectReducer } from 'store/index'
import { AdaptableCard } from 'components/shared'
import OrderTable from './components/OrderTable'
import OrderTableTools from './components/OrderTableTools'

injectReducer('orderListSlice', reducer)

const CustomerList = () => {
	return (
		<AdaptableCard className="h-full" bodyClass="h-full">
			<div className="lg:flex items-center justify-between mb-4">
				<h3 className="mb-4 lg:mb-0">Danh sách đơn hàng</h3>
				<OrderTableTools />
			</div>
			<OrderTable />
		</AdaptableCard>
	)
}

export default CustomerList