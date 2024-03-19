
import { useMemo } from 'react'
import { Field, FieldArray, Form, Formik, getIn } from 'formik'
import { Input, Button, FormItem, FormContainer } from 'components/ui'
import { HiMinus } from 'react-icons/hi'
import { updateOrder } from '../store/dataSlice'
import * as Yup from 'yup'
import { toast, Notification } from 'components/ui'
import { useNavigate } from 'react-router-dom'
import cloneDeep from 'lodash/cloneDeep'
import { AiOutlineSave } from 'react-icons/ai'
import { IoIosAddCircleOutline } from "react-icons/io";


const validationSchema = Yup.object({
    active: Yup.array().of(
        Yup.object().shape({
            id_client: Yup.string().required('ID không được để trống'),
            active: Yup.string().required('Active không được để trống'),
            pccheck: Yup.string().required('PC check không được để trống'),
            key_type: Yup.string().required('Loại key không được để trống')
        })
    ),
})

const fieldFeedback = (form, name) => {
    const error = getIn(form.errors, name)
    const touch = getIn(form.touched, name)
    return {
        errorMessage: error || '',
        invalid: typeof touch === 'undefined' ? false : error && touch,
    }
}

const OrderDynamicForm = ({ activeStringList, row }) => {
    const navigate = useNavigate()
    const activeArrList = useMemo(() => activeStringList && activeStringList.map(item => {
        const activeItem = item.split("-")
        return {
            id_client: activeItem[0],
            active: activeItem[1],
            pccheck: activeItem[2],
            key_type: activeItem[3]
        }
    }), [activeStringList])

    const handleFormSubmit = async (values, setSubmitting) => {
        setSubmitting(true)
        const success = await updateOrder({
            ...row,
            active: values.active
        })
        setSubmitting(false)
        if (success) {
            toast.push(
                <Notification title={'Đã thêm thành cộng'} type="success" duration={2500}>
                    Đã thêm đơn hàng thành công
                </Notification>
                , {
                    placement: 'top-center'
                }
            )
            navigate(0)
        }

    }

    return (
        <div className="py-5">
            <Formik
                validationSchema={validationSchema}
                initialValues={{
                    active: activeArrList
                }}
                onSubmit={(values, { setSubmitting }) => {
                    const formData = cloneDeep(values)
                    formData.active = formData?.active?.map(item => {
                        return `${item.id_client}-${item.active}-${item.pccheck}-${item.key_type}`
                    }).toString()
                    handleFormSubmit?.(formData, setSubmitting)
                }}
            >
                {({ touched, errors, values, isSubmitting }) => {
                    const active = values.active
                    return (
                        <Form>
                            <FormContainer layout="inline" >
                                <div className="w-full">

                                    <FieldArray name="active">
                                        {({ form, remove, push }) => (
                                            <div className="grid gap-5">
                                                {active && active.length > 0
                                                    ? active.map((_, index) => {
                                                        const id_clientFeedBack =
                                                            fieldFeedback(
                                                                form,
                                                                `active[${index}].id_client`
                                                            )
                                                        const activeFeedBack =
                                                            fieldFeedback(
                                                                form,
                                                                `active[${index}].active`
                                                            )
                                                        const pccheckFeedBack =
                                                            fieldFeedback(
                                                                form,
                                                                `active[${index}].pccheck`
                                                            )
                                                        const key_typeFeedBack =
                                                            fieldFeedback(
                                                                form,
                                                                `active[${index}].key_type`
                                                            )

                                                        return (
                                                            <div key={index} className="border rounded-md p-3 lg:flex items-center">
                                                                <FormItem
                                                                    className="mb-0"
                                                                    label="ID"
                                                                    invalid={
                                                                        id_clientFeedBack.invalid
                                                                    }
                                                                    errorMessage={
                                                                        id_clientFeedBack.errorMessage
                                                                    }
                                                                >
                                                                    <Field
                                                                        invalid={
                                                                            id_clientFeedBack.invalid
                                                                        }
                                                                        placeholder="Nhập ID"
                                                                        name={`active[${index}].id_client`}
                                                                        type="text"
                                                                        component={
                                                                            Input
                                                                        }
                                                                    />
                                                                </FormItem>
                                                                <FormItem
                                                                    className="mb-0"
                                                                    label="Key Active"
                                                                    invalid={
                                                                        activeFeedBack.invalid
                                                                    }
                                                                    errorMessage={
                                                                        activeFeedBack.errorMessage
                                                                    }
                                                                >
                                                                    <Field
                                                                        invalid={
                                                                            activeFeedBack.invalid
                                                                        }
                                                                        placeholder="Nhập Key active"
                                                                        name={`active[${index}].active`}
                                                                        type="text"
                                                                        component={
                                                                            Input
                                                                        }
                                                                    />
                                                                </FormItem>

                                                                <FormItem
                                                                    className="mb-0"
                                                                    label="PC check"
                                                                    invalid={
                                                                        pccheckFeedBack.invalid
                                                                    }
                                                                    errorMessage={
                                                                        pccheckFeedBack.errorMessage
                                                                    }
                                                                >
                                                                    <Field
                                                                        invalid={
                                                                            pccheckFeedBack.invalid
                                                                        }
                                                                        placeholder="Nhập PC check"
                                                                        name={`active[${index}].pccheck`}
                                                                        type="text"
                                                                        component={
                                                                            Input
                                                                        }
                                                                    />
                                                                </FormItem>
                                                                <FormItem
                                                                    className="mb-0"
                                                                    label="Loại key"
                                                                    invalid={
                                                                        key_typeFeedBack.invalid
                                                                    }
                                                                    errorMessage={
                                                                        key_typeFeedBack.errorMessage
                                                                    }
                                                                >
                                                                    <Field
                                                                        invalid={
                                                                            key_typeFeedBack.invalid
                                                                        }
                                                                        placeholder="Nhập loại key"
                                                                        name={`active[${index}].key_type`}
                                                                        type="text"
                                                                        component={
                                                                            Input
                                                                        }
                                                                    />
                                                                </FormItem>
                                                                <FormItem className=" items-center justify-center p-0 mb-0">
                                                                    <Button
                                                                        shape="circle"
                                                                        size="sm"
                                                                        type="button"
                                                                        icon={
                                                                            <HiMinus />
                                                                        }
                                                                        onClick={() =>
                                                                            remove(
                                                                                index
                                                                            )
                                                                        }
                                                                    />
                                                                </FormItem>
                                                            </div>
                                                        )
                                                    })
                                                    : null}
                                                <div className="w-full sticky bottom-0 left-0 bg-white p-5 flex items-center gap-3">
                                                    <Button
                                                        type="button"
                                                        size="sm"
                                                        icon={<IoIosAddCircleOutline />}
                                                        onClick={() => {
                                                            push({
                                                                id_client: '',
                                                                active: '',
                                                                pccheck: '',
                                                                key_type: ''
                                                            })
                                                        }}
                                                    >
                                                        Thêm Key Active
                                                    </Button>
                                                    {active && active?.length > 0 && <Button
                                                        type="submit"
                                                        variant="solid"
                                                        size="sm"
                                                        icon={<AiOutlineSave />}
                                                        loading={isSubmitting}
                                                    >
                                                        Lưu
                                                    </Button>
                                                    }
                                                </div>
                                            </div>
                                        )}
                                    </FieldArray>
                                </div>
                            </FormContainer>
                        </Form>
                    )
                }}
            </Formik>
        </div>
    )
}

export default OrderDynamicForm

