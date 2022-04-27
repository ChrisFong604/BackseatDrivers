import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Field, Form, Formik } from 'formik';

export default function Login() {
  const [isAuthenticated, setAuthenticated] = useState(false);

  const [userID, setUserID] = useState(null);
  const [userMetaData, setUserMetaData] = useState(null);

  async function getUserData(token) {
    await axios
      .get('http://localhost:3333/api/auth/protected?Bear', {
        headers: { Authorization: `Bearer ${token.access_token}` },
      })
      .then((res) => {
        setUserID(res.data);
        setAuthenticated(true);
      });

    await axios
      .get(`http://localhost:3333/api/user/${userID.id}`)
      .then((res) => {
        setUserMetaData(res.data);
      });

    alert(JSON.stringify(userMetaData));
  }
  async function loginWithCredentials(values) {
    const token = await axios
      .post('http://localhost:3333/api/auth/login', values)
      .then((res) => {
        setAuthenticated(true);
        return res.data;
      })
      .catch(() => {
        setAuthenticated(false);
        alert('Username or password is incorrect');
      });

    if (isAuthenticated === true) {
      getUserData(token);
    }
  }

  return (
    <>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={(values) => {
          loginWithCredentials(values);
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
    </>
  );
}
