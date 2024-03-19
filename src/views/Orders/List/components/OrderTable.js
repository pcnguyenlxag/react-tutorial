import React, { useEffect, useMemo, useState } from 'react'
import { DataTable } from 'components/shared'
import { useDispatch, useSelector } from 'react-redux'
import { getOrders, setTableData } from '../store/dataSlice'
import {
	setSortedColumn,
} from '../store/stateSlice'
import cloneDeep from 'lodash/cloneDeep'
import moment from 'moment'
import { Button, Drawer } from 'components/ui'
import OrderDynamicForm from './OrderDynamicForm'
import { MdOutlinePreview } from "react-icons/md";



const OrderColumn = ({ row }) => {
	return (
		<div className="flex items-center">
			{moment(row.pay_date?.toString()).format(process.env.REACT_APP_DAY_FORMAT_MOMENT)}
		</div>
	)
}

const OrderColumnPopup = ({ row }) => {
	const [horizontalOpen, setHorizontalOpen] = useState(false)

	const activeString = row.active.split(',')

	const onHorizontalOpen = () => {
		setHorizontalOpen(true)
	}

	const onDrawerClose = () => {
		setHorizontalOpen(false)
	}
	return (
		<>
			<Button variant="twoTone" icon={<MdOutlinePreview />} size="sm" onClick={() => onHorizontalOpen()}>
				Xem Key Active
			</Button>
			<Drawer
				title={`Cập nhật Key Active của khách hàng: ${row.customerName} có email là : ${row.customerEmail}`}
				isOpen={horizontalOpen}
				placement="bottom"
				height={700}
				onClose={onDrawerClose}
				onRequestClose={onDrawerClose}
			>
				<OrderDynamicForm activeStringList={activeString} row={row} />
			</Drawer >
		</>
	)
}

const OrderTable = () => {

	const dispatch = useDispatch()
	const { pageIndex, pageSize, sort, query, total } = useSelector((state) => state.orderListSlice.data.tableData)
	const loading = useSelector((state) => state.orderListSlice.data.loading)
	const data = useSelector((state) => state.orderListSlice.data.orderList)

	useEffect(() => {
		fetchData()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [pageIndex, pageSize, sort])

	const tableData = useMemo(() =>
		({ pageIndex, pageSize, sort, query, total }),
		[pageIndex, pageSize, sort, query, total])

	const fetchData = () => {
		dispatch(getOrders({ pageIndex, pageSize, sort, query }))
	}

	const columns = useMemo(() => [
		// {
		// 	Header: 'Mã đơn hàng',
		// 	accessor: 'code',
		// 	sortable: true,
		// },
		{
			Header: 'Sản phẩm',
			accessor: 'products',
			sortable: true,
		},
		{
			Header: 'ID - Key active',
			accessor: 'active',
			Cell: props => {
				const row = props.row.original
				return <OrderColumnPopup row={row} />
			},
		},
		{
			Header: 'Ngày bán',
			accessor: 'pay_date',
			sortable: true,
			Cell: props => {
				const row = props.row.original
				return <OrderColumn row={row} />
			},
		},
		{
			Header: 'Tên khách hàng',
			accessor: 'customerName',
			sortable: true,
		},
		{
			Header: 'Email khách hàng',
			accessor: 'customerEmail',
			sortable: true,
		},
		{
			Header: 'Tổng giá bán',
			accessor: 'total_price',
		},
		// {
		// 	Header: '',
		// 	id: 'action',
		// 	accessor: (row) => row,
		// 	Cell: props => {
		// 		return <ActionColumn row={props.row.original} />
		// 	}
		// },
	], [])

	const onPaginationChange = page => {
		if (tableData) {
			const newTableData = cloneDeep(tableData)
			newTableData.pageIndex = page
			dispatch(setTableData(newTableData))
		}
	}

	const onSelectChange = value => {
		if (tableData) {
			const newTableData = cloneDeep(tableData)
			newTableData.pageSize = Number(value)
			newTableData.pageIndex = 1
			dispatch(setTableData(newTableData))
		}
	}

	const onSort = (sort, sortingColumn) => {
		if (tableData) {
			const newTableData = cloneDeep(tableData)
			newTableData.sort = sort
			dispatch(setTableData(newTableData))
			dispatch(setSortedColumn(sortingColumn))
		}
	}

	return (
		<>
			<DataTable
				columns={columns}
				data={data}
				skeletonAvatarColumns={[0]}
				skeletonAvatarProps={{ className: 'rounded-md' }}
				loading={loading}
				isPaginate={true}
				pagingData={tableData}
				onPaginationChange={onPaginationChange}
				onSelectChange={onSelectChange}
				onSort={onSort}
			/>
			{/* <CustomerDeleteConfirmation /> */}
		</>
	)
}

export default OrderTable