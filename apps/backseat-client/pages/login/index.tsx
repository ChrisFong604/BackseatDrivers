import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Field, Form, Formik } from 'formik';

export default function Login() {
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [token, setToken] = useState('');

  const [userID, setUserID] = useState(null);
  const [userMetaData, setUserMetaData] = useState(null);

  async function fetchAccessToken(values) {
    await axios
      .post('http://localhost:3333/api/auth/login', values)
      .then((res) => setToken(res.data))
      .catch((err) => {
        console.log(err);
      });

    setAuthenticated(true);
  }

  useEffect(() => {
    async function validateAccessToken(res) {
      await axios
        .get('http://localhost:3333/api/auth/protected?Bear', {
          headers: { Authorization: `Bearer ${res.access_token}` },
        })
        .then((res) => {
          setUserID(res.data);
        });
    }
    if (isAuthenticated) {
      validateAccessToken(token);
    }
  }, [isAuthenticated]);

  useEffect(() => {
    async function getUserMetaData() {
      await axios
        .get(`http://localhost:3333/api/user/${userID.id}`)
        .then((res) => {
          setUserMetaData(res.data);
        });
      console.log(userMetaData);
    }
    if (isAuthenticated) {
      setUserMetaData(getUserMetaData());
    }
    console.log(userMetaData);
  }, [userID]);

  return (
    <>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={(values) => {
          fetchAccessToken(values);
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
