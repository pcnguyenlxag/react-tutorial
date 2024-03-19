import React from 'react'
import { Button } from 'components/ui'
import {
	// HiDownload,
	HiPlusCircle
} from 'react-icons/hi'
import ProductTableSearch from './ProductTableSearch'
// import CustomerFilter from './CustomerFilter'
import { Link } from 'react-router-dom'

const ProductTableTools = () => {
	return (
		<div className="flex flex-col lg:flex-row lg:items-center gap-2">
			<ProductTableSearch />
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
				to="/app/products/new"
			>
				<Button
					block
					variant="solid"
					size="sm"
					icon={<HiPlusCircle />}
				>
					Thêm sản phẩm
				</Button>
			</Link>
		</div>
	)
}

export default ProductTableTools