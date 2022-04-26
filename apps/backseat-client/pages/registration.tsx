import React, { useEffect, useState } from 'react';
import { Field, Form, Formik, useField } from 'formik';
import axios from 'axios';

export async function getServerSideProps() {
  const res = await axios.get('http://localhost:3333/api/schools');
  const data = await res.data;
  console.log(data);

  return { props: { schools: data } };
}

const Registration = ({ schools }) => {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted

  async function submitUserData(values) {
    alert(JSON.stringify(values, null, 2));
    await axios
      .post('http://localhost:3333/api/user/create', values)
      .then(() => {
        console.log('success');
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        school_name: '',
        first_name: '',
        last_name: '',
        phone_number: '',
      }}
      onSubmit={(values) => {
        submitUserData(values);
      }}
    >
      <Form>
        <Field label="email" name="email" type="text" placeholder="email" />
        <Field
          label="password"
          name="password"
          type="password"
          placeholder="password"
        />
        <Field
          label="First Name"
          name="first_name"
          type="text"
          placeholder="first name"
        />
        <Field
          label="Last Name"
          name="last_name"
          type="text"
          placeholder="last name"
        />
        <Field
          label="Phone Number"
          name="phone_number"
          type="text"
          placeholder="phone number"
        />
        <Field
          component="select"
          name="school_name"
          placeholder="select school"
        >
          {schools.map((school) => (
            <option key={school.school_id} value={school.school_name}>
              {school.school_name}
            </option>
          ))}
        </Field>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default Registration;
