import React, { useEffect } from 'react'
import OrderForm from 'views/Orders/Form'
import { useDispatch, useSelector } from 'react-redux'
import { toast, Notification } from 'components/ui'
import { useNavigate } from 'react-router-dom'
import { apiCreateOrder } from 'services/OrdersService'
import { getProducts, getCustomers } from './store/dataSlice'
import reducer from './store'
import { injectReducer } from 'store/index'

injectReducer('orderNew', reducer)

const OrderNew = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()



	const addOrder = async (data) => {
		const response = await apiCreateOrder(data)
		return response.data
	}

	const { pageIndex, pageSize, sort, query } = useSelector((state) => state.orderNew.data.tableData)

	const productData = useSelector((state) => state.orderNew.data.productList)
	const loadingProduct = useSelector((state) => state.orderNew.data.loadingProduct)
	const customerData = useSelector((state) => state.orderNew.data.customerList)
	const loadingCustomer = useSelector((state) => state.orderNew.data.loadingCustomer)


	const fetchDataProductList = () => {
		dispatch(getProducts({ pageIndex, pageSize, sort, query }))
		dispatch(getCustomers({ pageIndex, pageSize, sort, query }))
	}


	const handleFormSubmit = async (values, setSubmitting) => {
		setSubmitting(true)
		const products = values.products.map(product => product.label).toString()
		const total_price = values.products.map((_pr) => _pr.value).reduce((a, b) => a + b, 0)
		const customerName = values?.customer?.label
		const customerId = values?.customer?.value?.slice(0, values?.customer?.value?.search("-"))
		const customerEmail = values?.customer?.value?.slice(values?.customer?.value?.search("-") + 1)
		let dataValues = {
			...values,
			products,
			total_price,
			customerName,
			customerId: Number(customerId),
			customerEmail
		}
		delete dataValues.customer
		const success = await addOrder(dataValues)
		setSubmitting(false)
		if (success) {
			toast.push(
				<Notification title={'Đã thêm thành cộng'} type="success" duration={2500}>
					Đã thêm đơn hàng thành công
				</Notification>
				, {
					placement: 'top-center'
				}
			)
			navigate('/app/orders/list')
		}

	}

	const handleDiscard = () => {
		navigate('/app/orders/list')
	}

	useEffect(() => {
		fetchDataProductList()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [pageIndex, pageSize, sort])


	return (
		<>
			<OrderForm
				type="new"
				onFormSubmit={handleFormSubmit}
				onDiscard={handleDiscard}
				dataProductList={productData}
				dataCustomerList={customerData}
				loadingProduct={loadingProduct}
				loadingCustomer={loadingCustomer}
			/>
		</>
	)
}

export default OrderNew