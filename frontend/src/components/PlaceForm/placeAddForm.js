import React from 'react'
import { Formik, Field, Form, FieldArray } from 'formik'
import { useDispatch} from 'react-redux'
import * as yup from 'yup'
import { addPlace } from '../../reducers/placeReducer'

/**
 * Form for admins to add a place.s
 */
const PlaceAddForm = () => {
    const dispatch = useDispatch()

    const handleSubmit = async (data) => {
        dispatch(addPlace(data)).then(() => {
            // history.go(0)
            console.log('Place update onnistu')

        })
    }

    const lazy = yup.lazy(value => {
        switch (value) {
            case 'Closed':
                return yup.string().required()
            default:
                return yup.string().matches(/\d\d:\d\d/, 'The opening hour should be in the format of => ##:## or Closed (if the place is closed for the day.')
        }
    })

    const validationSchema = yup.object({
        name: yup.string()
            .required('Name is required.'),
        description: yup.string().required().min(10, 'The description should be atleast 10 characters.').max(350, 'The description should be max 350 characters.'),
        openingHours: yup.object({
            mon: yup.object({
                open: lazy,
                close: lazy
            }),
            tue: yup.object({
                open: lazy,
                close: lazy
            }),
            wed: yup.object({
                open: lazy,
                close: lazy
            }),
            thu: yup.object({
                open: lazy,
                close: lazy
            }),
            fri: yup.object({
                open: lazy,
                close: lazy
            }),
            sat: yup.object({
                open: lazy,
                close: lazy
            }),
            sun: yup.object({
                open: lazy,
                close: lazy
            })
        }),
        prices: yup.array().of(
            yup.object().shape({
                name: yup.string().min(4, 'Name must be atleast 4 chararcters.').required(),
                onetime: yup.number().required().min(0),
                tentime: yup.number().required().min(0),
                month: yup.number().required().min(0),
            })
        ),
        address: yup.string().min(20).required(),
        city: yup.string().required(),
        phone: yup.string().min(10).required(),
        email: yup.string().email().required(),
        url: yup.string().url().required(),
        tags: yup.array().of(yup.string().min(3, 'The tag should be atleast 3 characters.'))
    })



    return (
        <Formik
            validateOnChange={true}
            validationSchema={validationSchema}
            initialValues={{
                name: '',
                description: '',
                openingHours: {
                    mon: { open: '10:00', close: '18:00' },
                    tue: { open: '10:00', close: '18:00' },
                    wed: { open: '10:00', close: '18:00' },
                    thu: { open: '10:00', close: '18:00' },
                    fri: { open: '10:00', close: '18:00' },
                    sat: { open: '10:00', close: '18:00' },
                    sun: { open: '10:00', close: '18:00' },
                },
                prices: [
                    {
                        name: 'Alle 15v',
                        onetime: 0,
                        tentime: 0,
                        month: 0
                    }
                ],
                address: '',
                city: '',
                phone: '',
                email: '',
                url: '',
                tags: ['']
            }}
            enableReinitialize={true}
            onSubmit={(values, { setSubmitting }) => {
                setSubmitting(true)
                handleSubmit(values)
                setSubmitting(false)
            }}
        >
            {({ errors, values, isSubmitting, handleChange, setFieldValue }) => (

                <Form action="" className="account-settings-form form">

                    <label htmlFor="Name">Name</label><br />
                    <div>
                        <Field onChange={handleChange} name='name' value={values.name} type='input' />
                    </div>
                    {errors.name ? <div className='form-error-message'>{errors.name}</div> : null}

                    <label htmlFor="description">Description</label><br />
                    <div>
                        <Field onChange={handleChange} name='description' value={values.description} component='textarea' multiline='true' rows={3} />
                    </div>
                    {errors.description ? <div className='form-error-message'>{errors.description}</div> : null}

                    {/* <label htmlFor="file">Image</label><br />
                    <div>
                        <input id="file" name="file" type="file" onChange={(event) => {
                            setFieldValue("file", event.currentTarget.files[0]);
                        }} />
                    </div> */}

                    <h4>Opening hours</h4>

                    <label htmlFor="openingHours.mon.open openingHours.mon.close">Monday</label><br />
                    <div>
                        <Field onChange={handleChange} value={values.openingHours.mon.open} name='openingHours.mon.open' /> - <Field onChange={handleChange} name='openingHours.mon.close' value={values.openingHours.mon.close} />
                        {(errors?.openingHours?.mon?.open) ? <div className='form-error-message'>{errors.openingHours.mon.open}</div> : null}
                        {(errors?.openingHours?.mon?.close) ? <div className='form-error-message'>{errors.openingHours.mon.close}</div> : null}

                    </div>

                    <label htmlFor="openingHours.tue.open openingHours.tue.close">Tuesday</label><br />
                    <div>
                        <Field onChange={handleChange} name='openingHours.tue.open' value={values.openingHours.tue.open} type='input' /> - <Field onChange={handleChange} name='openingHours.tue.close' value={values.openingHours.tue.close} type='input' />
                        {(errors?.openingHours?.tue?.open) ? <div className='form-error-message'>{errors.openingHours.tue.open}</div> : null}
                        {(errors?.openingHours?.tue?.close) ? <div className='form-error-message'>{errors.openingHours.tue.close}</div> : null}
                    </div>

                    <label htmlFor="openingHours.wed.close openingHours.wed.close">Wednesday</label><br />
                    <div>
                        <Field onChange={handleChange} name='openingHours.wed.close' value={values.openingHours.wed.open} type='input' /> - <Field onChange={handleChange} name='openingHours.wed.close' value={values.openingHours.wed.close} type='input' />
                        {(errors?.openingHours?.wed?.open) ? <div className='form-error-message'>{errors.openingHours.wed.open}</div> : null}
                        {(errors?.openingHours?.wed?.close) ? <div className='form-error-message'>{errors.openingHours.wed.close}</div> : null}
                    </div>

                    <label htmlFor="openingHours.thu.open openingHours.thu.close">Thursday</label><br />
                    <div>
                        <Field onChange={handleChange} name='openingHours.thu.open' value={values.openingHours.thu.open} type='input' /> - <Field onChange={handleChange} name='openingHours.thu.close' value={values.openingHours.thu.close} type='input' />
                        {(errors?.openingHours?.thu?.open) ? <div className='form-error-message'>{errors.openingHours.thu.open}</div> : null}
                        {(errors?.openingHours?.thu?.close) ? <div className='form-error-message'>{errors.openingHours.thu.close}</div> : null}
                    </div>

                    <label htmlFor="openingHours.fri.open openingHours.fri.close">Friday</label><br />
                    <div>
                        <Field onChange={handleChange} name='openingHours.fri.open' value={values.openingHours.fri.open} type='input' /> - <Field onChange={handleChange} name='openingHours.fri.close' value={values.openingHours.fri.close} type='input' />
                        {(errors?.openingHours?.fri?.open) ? <div className='form-error-message'>{errors.openingHours.fri.open}</div> : null}
                        {(errors?.openingHours?.fri?.close) ? <div className='form-error-message'>{errors.openingHours.fri.close}</div> : null}
                    </div>

                    <label htmlFor="openingHours.sat.open openingHours.sat.close">Saturday</label><br />
                    <div>
                        <Field onChange={handleChange} name='openingHours.sat.open' value={values.openingHours.sat.open} type='input' /> - <Field onChange={handleChange} name='openingHours.sat.close' value={values.openingHours.sat.close} type='input' />
                        {(errors?.openingHours?.sat?.open) ? <div className='form-error-message'>{errors.openingHours.sat.open}</div> : null}
                        {(errors?.openingHours?.sat?.close) ? <div className='form-error-message'>{errors.openingHours.sat.close}</div> : null}
                    </div>

                    <label htmlFor="openingHours.sun.open openingHours.sun.close">Sunday</label><br />
                    <div>
                        <Field onChange={handleChange} name='openingHours.sun.open' value={values.openingHours.sun.open} type='input' /> - <Field onChange={handleChange} name='openingHours.sun.close' value={values.openingHours.sun.close} type='input' />
                        {(errors?.openingHours?.sun?.open) ? <div className='form-error-message'>{errors.openingHours.sun.open}</div> : null}
                        {(errors?.openingHours?.sun?.close) ? <div className='form-error-message'>{errors.openingHours.sun.close}</div> : null}
                    </div>




                    <FieldArray name='prices'>
                        {arrayHelpers => (
                            <div>
                                <h4>Pricing</h4>
                                <button
                                    type="button"
                                    className="submit"
                                    onClick={() => arrayHelpers.push({ name: '', onetime: '', tentime: '', month: '' })}
                                >Add</button>
                                {values.prices.map((price, index) => {
                                    return (
                                        <div key={index}>
                                            <label htmlFor={`prices[${index}].name`}>Name</label><br />
                                            <Field onChange={handleChange} name={`prices[${index}].name`} /><br />
                                            {errors?.prices && errors?.prices[index]?.name ? <div className='form-error-message'>{errors.prices[index].name}</div> : null}

                                            <label htmlFor={`prices[${index}].onetime`}>1x </label><br />
                                            <Field onChange={handleChange} name={`prices[${index}].onetime`} type="number" /><br />
                                            {errors?.prices && errors?.prices[index]?.onetime ? <div className='form-error-message'>{errors.prices[index].onetime}</div> : null}

                                            <label htmlFor={`prices[${index}].tentime`}>10x </label><br />
                                            <Field onChange={handleChange} name={`prices[${index}].tentime`} type="number" /><br />
                                            {errors?.prices && errors?.prices[index]?.tentime ? <div className='form-error-message'>{errors.prices[index].tentime}</div> : null}

                                            <label htmlFor={`prices[${index}].month`}>Month </label><br />
                                            <Field onChange={handleChange} name={`prices[${index}].month`} type="number" /><br />
                                            {errors?.prices && errors?.prices[index]?.month ? <div className='form-error-message'>{errors.prices[index].month}</div> : null}

                                            <button
                                                type="button"
                                                className="submit"
                                                onClick={() => arrayHelpers.remove(index)}
                                            >remove</button> <br />
                                        </div>
                                    )
                                })}
                            </div>
                        )}
                    </FieldArray>

                    <h4>
                        Info
                    </h4>

                    <label htmlFor="address">Address</label><br />
                    <div>
                        <Field onChange={handleChange} name='address' value={values.address} type='input' />
                        {errors.address ? <div className='form-error-message'>{errors.address}</div> : null}

                    </div>

                    <label htmlFor="city">City</label><br />
                    <div>
                        <Field onChange={handleChange} name='city' value={values.city} type='input' />
                        {errors.city ? <div className='form-error-message'>{errors.city}</div> : null}
                    </div>

                    <label htmlFor="phone">Phone</label><br />
                    <div>
                        <Field onChange={handleChange} name='phone' value={values.phone} type='input' />
                        {errors.phone ? <div className='form-error-message'>{errors.phone}</div> : null}
                    </div>

                    <label htmlFor="email">Email</label><br />
                    <div>
                        <Field onChange={handleChange} name='email' value={values.email} type='input' />
                        {errors.email ? <div className='form-error-message'>{errors.email}</div> : null}
                    </div>

                    <label htmlFor="url">Url</label><br />
                    <div>
                        <Field onChange={handleChange} name='url' value={values.url} type='input' />
                        {errors.url ? <div className='form-error-message'>{errors.url}</div> : null}
                    </div>

                    <FieldArray name='tags'>
                        {arrayHelpers => (
                            <div>
                                <label htmlFor="tags">Tags</label>
                                <button className="submit" type="button" onClick={() => arrayHelpers.push('')}>
                                    add
                            </button> <br />

                                {values.tags.map((tag, index) => {
                                    const name = `tags.${index}`
                                    const tagError = `errors.tags.${name}`
                                    return (
                                        <div key={index}>
                                            <Field onChange={handleChange} name={name} />
                                            <button
                                                type="button"
                                                className="submit"
                                                onClick={() => arrayHelpers.remove(index)}
                                            >remove</button>
                                            {errors?.tags && tagError ? <div className='form-error-message'>{errors.tags[index]}</div> : null}
                                        </div>
                                    )
                                })}

                            </div>
                        )}
                    </FieldArray>

                    <button disabled={isSubmitting} type="submit" className="submit" >Save</button>

                </Form>
            )
            }</Formik >
    )
}

export default PlaceAddForm
