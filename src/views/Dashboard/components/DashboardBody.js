import React, { useEffect } from 'react'
import { Loading } from 'components/shared'
import Statistic from './Statistic'
import DashboardReport from './DashboardReport'
// import CustomersByCategories from './CustomersByCategories'
// import LatestOrder from './LatestOrder'
// import TopProduct from './TopProduct'
import { getDashboardData } from '../store/dataSlice'
import { useDispatch, useSelector } from 'react-redux'

const DashboardBody = () => {

	const dispatch = useDispatch()

	const {
		statisticData,
		dashboardReportData,
		// topcustomersData,
		// latestOrderData,
		// salesByCategoriesData
	} = useSelector((state) => state.dashboard.data.dashboardData)
	const loading = useSelector((state) => state.dashboard.data.loading)

	useEffect(() => {
		fetchData()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const fetchData = () => {
		setTimeout(() => {
			dispatch(getDashboardData())
		})
	}

	return (
		<Loading loading={loading}>
			<Statistic data={statisticData} />
			{/* <div className="grid"> */}
			<DashboardReport data={dashboardReportData} />
			{/* <CustomersByCategories data={salesByCategoriesData} /> */}
			{/* </div> */}
			{/* <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
				<LatestOrder data={latestOrderData} className="lg:col-span-2" />
				<TopProduct data={topcustomersData} />
			</div> */}
		</Loading>
	)
}

export default DashboardBody