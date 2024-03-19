import React from 'react'
import ProductForm from 'views/Products/Form'
import { toast, Notification } from 'components/ui'
import { useNavigate } from 'react-router-dom'
import { apiCreateProduct } from 'services/ProductsService'


const ProductNew = () => {
	const navigate = useNavigate()

	const addProduct = async (data) => {
		const response = await apiCreateProduct(data)
		return response.data
	}

	const handleFormSubmit = async (values, setSubmitting) => {
		setSubmitting(true)
		const success = await addProduct(values)
		setSubmitting(false)
		if (success) {
			toast.push(
				<Notification title={'Đã thêm thành cộng'} type="success" duration={2500}>
					Đã thêm sản phẩm thành công
				</Notification>
				, {
					placement: 'top-center'
				}
			)
			navigate('/app/products/list')
		}

	}

	const handleDiscard = () => {
		navigate('/app/products/list')
	}

	return (
		<>
			<ProductForm
				type="new"
				onFormSubmit={handleFormSubmit}
				onDiscard={handleDiscard}
			/>
		</>
	)
}

export default ProductNew