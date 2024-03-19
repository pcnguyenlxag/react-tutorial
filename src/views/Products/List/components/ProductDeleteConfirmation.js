import React from 'react'
import { toast, Notification } from 'components/ui'
import { ConfirmDialog } from 'components/shared'
import { useSelector, useDispatch } from 'react-redux'
import { toggleDeleteConfirmation } from '../store/stateSlice'
import { deleteProduct, getProducts } from '../store/dataSlice'

const ProductDeleteConfirmation = () => {

	const dispatch = useDispatch()
	const dialogOpen = useSelector((state) => state.productListSlice.state.deleteConfirmation)
	const selectedProduct = useSelector((state) => state.productListSlice.state.selectedProduct)
	const tableData = useSelector((state) => state.productListSlice.data.tableData)

	const onDialogClose = () => {
		dispatch(toggleDeleteConfirmation(false))
	}

	const onDelete = async () => {
		dispatch(toggleDeleteConfirmation(false))
		const success = await deleteProduct({ id: selectedProduct })

		if (success) {
			dispatch(getProducts(tableData))
			toast.push(
				<Notification title={"Đã xoá thành công"} type="success" duration={2500}>
					Đã xoá sản phẩm thành công
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
			title="Xoá sản phẩm"
			onCancel={onDialogClose}
			onConfirm={onDelete}
			confirmButtonColor="red-600"
		>
			<p>
				Bạn có chắc chắn muốn xóa sản phẩm này? Tất cả hồ sơ liên quan đến sản phẩm này cũng sẽ bị xóa. Hành động này không thể được hoàn tác.
			</p>
		</ConfirmDialog>
	)
}

export default ProductDeleteConfirmation