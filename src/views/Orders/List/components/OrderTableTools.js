import React from 'react'
import { Button } from 'components/ui'
import {
	// HiDownload,
	HiPlusCircle
} from 'react-icons/hi'
import OrderTableSearch from './OrderTableSearch'
// import CustomerFilter from './CustomerFilter'
import { Link } from 'react-router-dom'

const CustomerTableTools = () => {
	return (
		<div className="flex flex-col lg:flex-row lg:items-center gap-2">
			<OrderTableSearch />
			{/* <CustomerFilter /> */}
			{/* <Link
				className="block lg:inline-block md:mx-2 md:mb-0 mb-4"
				to="/data/product-list.csv"
				target="_blank"
				download
			>
				<Button
					block
					size="sm"
					icon={<HiDownload />}
				>
					Xuất
				</Button>
			</Link> */}
			<Link
				className="block lg:inline-block md:mb-0 mb-4"
				to="/app/orders/new"
			>
				<Button
					block
					variant="solid"
					size="sm"
					icon={<HiPlusCircle />}
				>
					Thêm đơn hàng
				</Button>
			</Link>
		</div>
	)
}

export default CustomerTableTools