import React from 'react'
import reducer from './store'
import { injectReducer } from 'store/index'
import { AdaptableCard } from 'components/shared'
import ProductTable from './components/ProductTable'
import ProductTableTools from './components/ProductTableTools'

injectReducer('productListSlice', reducer)

const CustomerList = () => {
	return (
		<AdaptableCard className="h-full" bodyClass="h-full">
			<div className="lg:flex items-center justify-between mb-4">
				<h3 className="mb-4 lg:mb-0">Danh sách sản phẩm</h3>
				<ProductTableTools />
			</div>
			<ProductTable />
		</AdaptableCard>
	)
}

export default CustomerList