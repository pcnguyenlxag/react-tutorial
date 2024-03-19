import React from 'react'
import CustomerForm from 'views/Customers/Form'
import { toast, Notification } from 'components/ui'
import { useNavigate } from 'react-router-dom'
import { apiCreateCustomer } from 'services/CustomersService'

const CustomerNew = () => {
	const navigate = useNavigate()


	const addCustomer = async (data) => {
		const response = await apiCreateCustomer(data)
		return response.data
	}

	const handleFormSubmit = async (values, setSubmitting) => {
		setSubmitting(true)
		const success = await addCustomer(values)

		setSubmitting(false)
		if (success) {
			toast.push(
				<Notification title={'Đã thêm thành công'} type="success" duration={2500}>
					Đã thêm khách hàng thành công
				</Notification>
				, {
					placement: 'top-center'
				}
			)
			navigate('/app/customers/list')
		}

	}

	const handleDiscard = () => {
		navigate('/app/customers/list')
	}

	return (
		<>
			<CustomerForm
				type="new"
				onFormSubmit={handleFormSubmit}
				onDiscard={handleDiscard}
			/>
		</>
	)
}

export default CustomerNew