import React from 'react'
import {
	AdaptableCard,
	// RichTextEditor
} from 'components/shared'
import { Input, FormItem } from 'components/ui'
import NumberFormat from 'react-number-format'
import { Field } from 'formik'

const PriceInput = props => {
	return <Input {...props} value={props.field.value} prefix="VND" />
}

const NumberFormatInput = ({ onValueChange, ...rest }) => {
	return (
		<NumberFormat
			customInput={Input}
			type="text"
			onValueChange={onValueChange}
			autoComplete="off"
			{...rest}
		/>
	)
}

const BasicInformationFields = props => {
	const { touched, errors } = props


	return (
		<AdaptableCard className="mb-4" divider>
			<h5 className="mb-3">Thông tin sản phẩm</h5>
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
							placeholder="Nhập tên sản phẩm"
							component={Input}
						/>
					</FormItem>
				</div>
				<div className="cols-span-1">
					<FormItem
						label="Giá bán"
						invalid={errors.price && touched.price}
						errorMessage={errors.price}
					>
						<Field name="price" >
							{({ field, form }) => {
								return (
									<NumberFormatInput
										form={form}
										field={field}
										placeholder="Nhập giá bán"
										customInput={PriceInput}
										onValueChange={e => {
											form.setFieldValue(field.name, e.value)
										}}
									/>
								)
							}}
						</Field>
					</FormItem>
				</div>
			</div>
		</AdaptableCard>
	)
}

export default BasicInformationFields