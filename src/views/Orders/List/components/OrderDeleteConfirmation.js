import React from 'react'
import { toast, Notification } from 'components/ui'
import { ConfirmDialog } from 'components/shared'
import { useSelector, useDispatch } from 'react-redux'
import { toggleDeleteConfirmation } from '../store/stateSlice'
import { deleteCustomer, getCustomers } from '../store/dataSlice'

const CustomerDeleteConfirmation = () => {

	const dispatch = useDispatch()
	const dialogOpen = useSelector((state) => state.customerListSlice.state.deleteConfirmation)
	const selectedCustomer = useSelector((state) => state.customerListSlice.state.selectedCustomer)
	const tableData = useSelector((state) => state.customerListSlice.data.tableData)

	const onDialogClose = () => {
		dispatch(toggleDeleteConfirmation(false))
	}

	const onDelete = async () => {
		dispatch(toggleDeleteConfirmation(false))
		const success = await deleteCustomer({ id: selectedCustomer })

		if (success) {
			dispatch(getCustomers(tableData))
			toast.push(
				<Notification title={"Successfuly Deleted"} type="success" duration={2500}>
					Customer successfuly deleted
				</Notification>
				, {
					placement: 'top-center'
				}
			)
		}
	}

	return (
		<ConfirmDialog
			isOpen={dialogOpen}
			onClose={onDialogClose}
			onRequestClose={onDialogClose}
			type="danger"
			title="Xoá Khách hàng"
			onCancel={onDialogClose}
			onConfirm={onDelete}
			confirmButtonColor="red-600"
		>
			<p>
				Bạn có chắc chắn muốn xóa khách hàng này? Tất cả hồ sơ liên quan đến khách hàng này cũng sẽ bị xóa. Hành động này không thể được hoàn tác.
			</p>
		</ConfirmDialog>
	)
}

export default CustomerDeleteConfirmation