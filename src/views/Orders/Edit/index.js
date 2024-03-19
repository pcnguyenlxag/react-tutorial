import React
	//  { useEffect }
	from 'react'
// import { Loading, DoubleSidedImage } from 'components/shared'
// import { toast, Notification } from 'components/ui'
// import { useDispatch, useSelector } from 'react-redux'
// import { getProducts } from './store/dataProductsSlice'
// import { getOrders } from './store/dataOrdersSlice'

// import { useLocation, useNavigate, useParams } from 'react-router-dom'
// import { getCustomer, updateCustomer, deleteCustomer } from './store/dataSlice'
// import ProductForm from 'views/Customers/Form'
// import isEmpty from 'lodash/isEmpty'



const CustomerEdit = () => {
	// const dispatch = useDispatch()

	// const location = useLocation()
	// const navigate = useNavigate()

	// const { pageIndex, pageSize, sort, query } = useSelector((state) => state.productListSlice.product.tableData)
	// const customerData = useSelector((state) => state.customerEdit.data.customerData)
	// const loading = useSelector((state) => state.customerEdit.data.loading)
	// const loadingProduct = useSelector((state) => state.productListSlice.product.loading)
	// const loadingOrder = useSelector((state) => state.orderListSlice.order.loading)
	// const dataProduct = useSelector((state) => state.productListSlice.product.productList)
	// const dataOrder = useSelector((state) => state.orderListSlice.order.orderList)

	// const fetchData = (data) => {
	// 	dispatch(getCustomer(data))
	// 	dispatch(getProducts({ pageIndex, pageSize, sort, query }))
	// 	dispatch(getOrders({ pageIndex, pageSize, sort, query, data }))
	// }

	// const handleFormSubmit = async (values, setSubmitting) => {
	// 	setSubmitting(true)
	// 	const success = await updateCustomer(values)
	// 	setSubmitting(false)
	// 	if (success) {
	// 		popNotification('updated')
	// 	}
	// }

	// const handleDiscard = () => {
	// 	navigate('/app/list')
	// }

	// const handleDelete = async (setDialogOpen) => {
	// 	setDialogOpen(false)
	// 	const success = await deleteCustomer({ id: customerData.id })
	// 	if (success) {
	// 		popNotification('deleted')
	// 	}
	// }

	// const popNotification = (keyword) => {
	// 	toast.push(
	// 		<Notification title={`Successfuly ${keyword}`} type="success" duration={2500}>
	// 			Product successfuly {keyword}
	// 		</Notification>
	// 		, {
	// 			placement: 'top-center'
	// 		}
	// 	)
	// 	navigate('/app/list')
	// }

	// useEffect(() => {
	// 	const path = location.pathname.substring(location.pathname.lastIndexOf('/') + 1)
	// 	const rquestParam = { id: path }
	// 	fetchData(rquestParam)
	// 	// eslint-disable-next-line react-hooks/exhaustive-deps
	// }, [location.pathname])

	return (
		<>
			{/* <Loading loading={loading}>
				{!isEmpty(customerData) && (
					<>
						<ProductForm
							type="edit"
							initialData={customerData}
							dataProductList={dataProduct}
							loadingProduct={loadingProduct}
							loadingOrder={loadingOrder}
							dataOrderList={dataOrder}
							onFormSubmit={handleFormSubmit}
							onDiscard={handleDiscard}
							onDelete={handleDelete}
						/>
					</>
				)}
			</Loading>
			{(!loading && isEmpty(customerData)) && (
				<div className="h-full flex flex-col items-center justify-center">
					<DoubleSidedImage
						src="/img/others/img-2.png"
						darkModeSrc="/img/others/img-2-dark.png"
						alt="No product found!"
					/>
					<h3 className="mt-8">No product found!</h3>
				</div>
			)} */}
		</>
	)
}

export default CustomerEdit