import React, { useState } from 'react'
import { Formik, Field, Form, FieldArray } from 'formik'
import TagItem from '../TagItem'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useRouteMatch } from 'react-router-dom'
import { updateUserInfo } from '../../reducers/userReducer'
import * as yup from 'yup'

/**
 * Form for admins to add a place.s
 */
const PlaceForm = ({ place }) => {
    const dispatch = useDispatch()

    const handleSubmit = async (data) => {
        console.log('Submitted')
        console.log({ data })

    }

    const validationSchema = yup.object({
        name: yup.string()
            .required('Name is required.'),
        username: yup.string()
            .required('Username required')
            .min(6, 'Minimum length is 6 characters'),
        email: yup.string()
            .email('Must be a valid email')
            .required('Email required'),
        city: yup.string().required('Where do you live?'),
    })

    console.log('Place in place form', { place })


    return (
        <Formik
            validateOnChange={true}
            // validationSchema={validationSchema}
            initialValues={place}
            enableReinitialize
            onSubmit={(data, { setSubmitting }) => {
                setSubmitting(true)
                console.log('Tapahtuu')

                handleSubmit(data)
                setSubmitting(false)
            }}
        >
            {({ errors, values, isSubmitting }) => (
                <Form action="" className="account-settings-form form">

                    <label htmlFor="Name">Name</label><br />
                    <div>
                        <Field name='name' value={values.name} type='input' />
                    </div>
                    {errors.username ? <div className='form-error-message'>{errors.username}</div> : null}

                    <label htmlFor="description">Description</label><br />
                    <div>
                        <Field name='description' value={values.description} component='textarea' multiline='true' rows={3} />
                    </div>

                    <h4>Opening hours</h4>

                    <label htmlFor="mon-open mon-close">Monday</label><br />
                    <div>
                        <Field name='mon-open' value={values.openingHours.mon.open} type='input' /> - <Field name='mon-close' value={values.openingHours.mon.close} type='input' />
                    </div>

                    <label htmlFor="tue-open tue-close">Tuesday</label><br />
                    <div>
                        <Field name='tue-open' value={values.openingHours.tue.open} type='input' /> - <Field name='tue-close' value={values.openingHours.tue.close} type='input' />
                    </div>

                    <label htmlFor="wed-open wed-close">Wednesday</label><br />
                    <div>
                        <Field name='wed-open' value={values.openingHours.wed.open} type='input' /> - <Field name='wed-close' value={values.openingHours.wed.close} type='input' />
                    </div>

                    <label htmlFor="thu-open thu-close">Thursday</label><br />
                    <div>
                        <Field name='thu-open' value={values.openingHours.thu.open} type='input' /> - <Field name='thu-close' value={values.openingHours.thu.close} type='input' />
                    </div>

                    <label htmlFor="fri-open fri-close">Friday</label><br />
                    <div>
                        <Field name='fri-open' value={values.openingHours.fri.open} type='input' /> - <Field name='fri-close' value={values.openingHours.fri.close} type='input' />
                    </div>

                    <label htmlFor="sat-open sat-close">Saturday</label><br />
                    <div>
                        <Field name='sat-open' value={values.openingHours.sat.open} type='input' /> - <Field name='sat-close' value={values.openingHours.sat.close} type='input' />
                    </div>

                    <label htmlFor="sun-open sun-close">Sunday</label><br />
                    <div>
                        <Field name='sun-open' value={values.openingHours.sun.open} type='input' /> - <Field name='sun-close' value={values.openingHours.sun.close} type='input' />
                    </div>

                    <h4>Pricing</h4>

                    <FieldArray name='prices'>
                        {arrayHelpers => (
                            <div>
                                <button
                                    type="button"
                                    className="secondary"
                                    onClick={() => arrayHelpers.push({ name: '', onetime: '', tentime: '', month: '' })}
                                >Add</button>
                                {values.prices.map((price, index) => {
                                    console.log({ price })

                                    return (
                                        <div key={index}>
                                            <Field name={`prices[${index}].name`} />
                                            <Field name={`prices[${index}].onetime`} />
                                            <Field name={`prices[${index}].tentime`} />
                                            <Field name={`prices[${index}].month`} />
                                            <button
                                                type="button"
                                                className="secondary"
                                                onClick={() => arrayHelpers.remove(index)}
                                            >remove</button>
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
                        <Field name='address' value={values.address} type='input' />
                    </div>

                    <label htmlFor="city">City</label><br />
                    <div>
                        <Field name='city' value={values.city} type='input' />
                    </div>

                    <label htmlFor="phone">Phone</label><br />
                    <div>
                        <Field name='phone' value={values.phone} type='input' />
                    </div>

                    <label htmlFor="email">Email</label><br />
                    <div>
                        <Field name='email' value={values.email} type='input' />
                    </div>

                    <label htmlFor="url">Url</label><br />
                    <div>
                        <Field name='url' value={values.url} type='input' />
                    </div>

                    <label htmlFor="tags">Tags</label><br />
                    <FieldArray name='tags'>
                        {arrayHelpers => (
                            <div>
                                {values.tags.map((tag, index) => {
                                    console.log({ tag })

                                    const name = `tags.${index}`
                                    return (
                                        <div key={index}>
                                            <Field name={name} />

                                            <button
                                                type="button"
                                                className="secondary"
                                                onClick={() => arrayHelpers.remove(index)}
                                            >x</button>
                                        </div>
                                    )
                                })}
                                <button type="button" onClick={() => arrayHelpers.push('')}>
                                    Add a tag
                            </button>
                            </div>
                        )}
                    </FieldArray>

                    <button disabled={isSubmitting} type="submit" className="submit" >Save</button>
                    <pre style={{ color: 'blue' }}>{JSON.stringify(values, null, 2)}</pre>
                    <pre style={{ color: 'blue' }}>{JSON.stringify(errors, null, 2)}</pre>
                </Form>
            )
            }</Formik >
    )
}

export default PlaceForm
