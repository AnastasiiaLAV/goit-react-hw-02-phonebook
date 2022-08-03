import React from 'react';
// import PropTypes from 'prop-types';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
    
const id = nanoid(5);

const SignupSchema = Yup.object().shape({
name: Yup.string()
    .min(2, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Please enter a name')
    .matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/, "Must be only letters"),
number: Yup.string()
    .min(6, 'Too Short!')
    .max(10, 'Too Long!')
    .required('Please enter a number')
    .matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/, "Must be only digits"),
});

const ContactForm  = () => {
    return (
        <Formik
            initialValues={{
                name: '',
                number: '',
            }}
            validationSchema={SignupSchema}
            onSubmit={(values, {resetForm}) => {
                console.log(values);
                resetForm ()
            }}
    >

    {({ errors, touched }) => (
        <Form>
        <label htmlFor="name">Name</label>
        <Field
            id={id}
            type="text"
            name="name"
            placeholder="enter name"/>
        {errors.name && touched.name ? (
            <div>{errors.name}</div>
        ) : null}
        
        <label htmlFor="number">Number</label>
        <Field
            id={id}
            type="number"
            name="number"
            placeholder="enter number" />
        {errors.number && touched.number ? (
            <div>{errors.number}</div>
        ) : null}
        
        <button type="submit">Add contact</button>
        </Form>
    )}
    </Formik>
    )
};

export default ContactForm;