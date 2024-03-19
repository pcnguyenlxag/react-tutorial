import React from 'react'
import {
	AdaptableCard,
} from 'components/shared'
import { Input, FormItem } from 'components/ui'
import { Field } from 'formik'


const BasicInformationFields = props => {
	const { touched, errors } = props
	return (
		<AdaptableCard className="mb-4" divider>
			<h5 className="mb-3">Thông tin khách hàng</h5>
			<div className="grid lg:grid-cols-3 gap-4">
				<div className="cols-span-1">

					<FormItem
						label="Tên khách hàng"
						invalid={errors.name && touched.name}
						errorMessage={errors.name}
					>
						<Field
							type="text"
							autoComplete="off"
							name="name"
							placeholder="Nhập tên khách hàng"
							component={Input}
						/>
					</FormItem>
				</div>
				<div className="cols-span-1">

					<FormItem
						label="Email"
						invalid={errors.email && touched.email}
						errorMessage={errors.email}
					>
						<Field
							type="text"
							autoComplete="off"
							name="email"
							placeholder="Nhập email"
							component={Input}
						/>
					</FormItem>
				</div>
				{/* <div className="cols-span-1">
					{type === 'edit' &&
						<FormItem
							label="Tổng đơn hàng"
							invalid={errors.total_order && touched.total_order}
							errorMessage={errors.total_order}
						>
							<Field name="total_order" >
								{({ field, form }) => {
									return (
										<NumberFormatInput
											form={form}
											field={field}
											value={values.total_order}
											placeholder="Nhập tổng đơn hàng"
											customInput={PriceInput}
											onValueChange={e => {
												form.setFieldValue(field.name, e.value)
											}}
										/>
									)
								}}
							</Field>
						</FormItem>
					}
				</div> */}
			</div>

		</AdaptableCard>
	)
}

export default BasicInformationFields