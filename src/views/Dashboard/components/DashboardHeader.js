import React from 'react'
import { DatePicker, Button } from 'components/ui'
import { setStartDate, setEndDate } from '../store/stateSlice'
import { getDashboardData } from '../store/dataSlice'
import { HiOutlineFilter } from 'react-icons/hi'
import { useDispatch, useSelector } from 'react-redux'

const dateFormat = 'MMM DD, YYYY'

const { DatePickerRange } = DatePicker

const DashboardHeader = () => {

	const dispatch = useDispatch()

	const startDate = useSelector((state) => state.dashboard.state.startDate)
	const endDate = useSelector((state) => state.dashboard.state.endDate)

	const handleDateChange = (value) => {
		dispatch(setStartDate(value[0]))
		dispatch(setEndDate(value[1]))
	}

	const onFilter = () => {
		dispatch(getDashboardData({ startDateStr: startDate, endDateStr: endDate }))
	}

	return (
		<div className="lg:flex items-center justify-between mb-4 gap-3">
			<div className="mb-4 lg:mb-0">
				<h3>Tổng quan</h3>
			</div>
			<div className="flex flex-col lg:flex-row lg:items-center gap-3">
				<DatePickerRange
					value={[startDate, endDate]}
					onChange={handleDateChange}
					inputFormat={dateFormat}
					size="sm"
				/>
				<Button
					size="sm"
					icon={<HiOutlineFilter />}
					onClick={onFilter}
				>
					Lọc
				</Button>
			</div>
		</div>
	)
}

export default DashboardHeader