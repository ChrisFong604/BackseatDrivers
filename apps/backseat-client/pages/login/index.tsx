import axios from 'axios';
import { Field, Form, Formik } from 'formik';
import React from 'react';

export default function Login() {
  async function submitLoginData(values) {
    const res = await axios
      .post('http://localhost:3333/api/auth/login', values)
      .then((res) => res.data)
      .catch((err) => {
        console.log(err);
        return;
      });

    const userAuthenticatedData = await axios
      .get('http://localhost:3333/api/auth/protected?Bear', {
        headers: { Authorization: `Bearer ${res.access_token}` },
      })
      .then((res) => res.data);

    console.log(userAuthenticatedData);
  }

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={(values) => {
        submitLoginData(values);
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
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}
