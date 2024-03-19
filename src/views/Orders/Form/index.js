import React, { forwardRef, useState } from 'react'
import {
	FormContainer, Button,
} from 'components/ui'
import { StickyFooter, ConfirmDialog } from 'components/shared'
import { Form, Formik } from 'formik'
import BasicInformationFields from './components/BasicInformationFields'
import cloneDeep from 'lodash/cloneDeep'
import { HiOutlineTrash } from 'react-icons/hi'
import { AiOutlineSave } from 'react-icons/ai'
import { v4 as uuidv4 } from 'uuid';
import DynamicFormField from './components/DynamicFormField'
import * as Yup from 'yup'

const validationSchema = Yup.object({
	products: Yup.array().min(0, 'Sản phẩm không được để trống'),
	customer: Yup.string().required('Khách hàng không được để trống vui lòng chọn sản phẩm'),
	pay_date: Yup.date().required('Ngày bán không được để trống vui lòng chọn sản phẩm').nullable(),
	active: Yup.array().of(
		Yup.object().shape({
			id_client: Yup.string().required('ID không được để trống'),
			active: Yup.string().required('Active không được để trống'),
			pccheck: Yup.string().required('PCcheck không được để trống'),
			key_type: Yup.string().required('Loại key không được để trống')
		})
	),
})

const DeleteOrderButton = ({ onDelete }) => {

	const [dialogOpen, setDialogOpen] = useState(false)

	const onConfirmDialogOpen = () => {
		setDialogOpen(true)
	}

	const onConfirmDialogClose = () => {
		setDialogOpen(false)
	}

	const handleConfirm = () => {
		onDelete?.(setDialogOpen)
	}

	return (
		<>
			<Button
				className="text-red-600"
				variant="plain"
				size="sm"
				icon={<HiOutlineTrash />}
				type="button"
				onClick={onConfirmDialogOpen}
			>
				Xoá
			</Button>
			<ConfirmDialog
				isOpen={dialogOpen}
				onClose={onConfirmDialogClose}
				onRequestClose={onConfirmDialogClose}
				type="danger"
				title="Cảnh báo"
				onCancel={onConfirmDialogClose}
				onConfirm={handleConfirm}
				confirmButtonColor="red-600"
			>
				<p>
					Bạn có chắc xoá đơn hàng này không?
				</p>
			</ConfirmDialog>
		</>
	)
}

const OrderForm = forwardRef((props, ref) => {
	const [payDate, setPayDate] = useState(null)
	const { type, initialData, onFormSubmit, onDiscard, onDelete } = props

	return (
		<>
			<Formik
				innerRef={ref}
				initialValues={{
					...initialData,
				}}
				validationSchema={validationSchema}
				onSubmit={(values, { setSubmitting }) => {
					const formData = cloneDeep(values)
					formData.code = uuidv4()
					formData.active = formData?.active?.map(item => {
						return `${item.id_client}-${item.active}-${item.pccheck}-${item.key_type}`
					}).toString()
					formData.pay_date = payDate.toString()
					onFormSubmit?.(formData, setSubmitting)
				}}
			>
				{({ values, touched, errors, isSubmitting }) => {
					const active = values.active
					return (<Form className="h-full">
						<FormContainer className="h-full flex flex-col justify-between">
							<div>
								<BasicInformationFields setPayDate={setPayDate} values={values} touched={touched} errors={errors} {...props} />

								<div className="flex items-center gap-10">
									<h5>Danh sách ID - Key active</h5>
								</div>
								<small>Lưu ý: Vui lòng thêm key active mới lưu dữ liệu</small>
								<div className="grid grid-cols-1 py-5">
									<DynamicFormField active={active} />
								</div>
							</div>
							<StickyFooter
								className="px-8 flex items-center justify-between  py-4"
								stickyClass="border-t bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
							>
								<div>
									{type === 'edit' && <DeleteOrderButton onDelete={onDelete} />}
								</div>
								<div className="flex items-center">
									<Button
										size="sm"
										className="ltr:mr-3 rtl:ml-3"
										onClick={() => onDiscard?.()}
										type="button"
									>
										Quay lại
									</Button>
									{active && active.length > 0 && <Button
										size="sm"
										variant="solid"
										loading={isSubmitting}
										icon={<AiOutlineSave />}
										type="submit"
									>
										Lưu
									</Button>
									}
								</div>
							</StickyFooter>
						</FormContainer>
					</Form>
					)
				}}
			</Formik>
		</>
	)
})

OrderForm.defaultProps = {
	type: 'edit',
	initialData: {
		code: '',
		products: [],
		customer: '',
		pay_date: '',
		total_price: 0
	}
}

export default OrderForm