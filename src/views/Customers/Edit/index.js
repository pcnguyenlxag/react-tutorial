import React, { useEffect } from 'react'
import { Loading, DoubleSidedImage } from 'components/shared'
import { toast, Notification } from 'components/ui'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { getCustomer, updateCustomer, deleteCustomer } from './store/dataSlice'
import CustomerForm from 'views/Customers/Form'
import isEmpty from 'lodash/isEmpty'
import reducer from './store'
import { injectReducer } from 'store/index'

injectReducer('customerEdit', reducer)

const CustomerEdit = () => {
	const dispatch = useDispatch()

	const location = useLocation()
	const navigate = useNavigate()

	const customerData = useSelector((state) => state.customerEdit.data.customerData)
	const loading = useSelector((state) => state.customerEdit.data.loading)

	const fetchData = (data) => {
		dispatch(getCustomer(data))
	}

	const handleFormSubmit = async (values, setSubmitting) => {
		setSubmitting(true)
		const success = await updateCustomer(values)
		setSubmitting(false)
		if (success) {
			popNotification('updated')
		}
	}

	const handleDiscard = () => {
		navigate('/app/customers/list')
	}

	const handleDelete = async (setDialogOpen) => {
		setDialogOpen(false)
		const success = await deleteCustomer({ id: customerData.id })
		if (success) {
			popNotification('deleted')
		}
	}

	const popNotification = (keyword) => {
		toast.push(
			<Notification title={`Đã thêm ${keyword} thành công`} type="success" duration={2500}>
				Đã thêm khách hàng {keyword} thành công
			</Notification>
			, {
				placement: 'top-center'
			}
		)
		navigate('/app/customers/list')
	}

	useEffect(() => {
		const path = location.pathname.substring(location.pathname.lastIndexOf('/') + 1)
		const rquestParam = { id: path }
		fetchData(rquestParam)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [location.pathname])

	return (
		<>
			<Loading loading={loading}>
				{!isEmpty(customerData) && (
					<>
						<CustomerForm
							type="edit"
							initialData={customerData}
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
			)}
		</>
	)
}

export default CustomerEdit