import axios from 'axios';
import { useCookies } from 'react-cookie';
import cookie from 'cookie';
import React, { useState, useEffect } from 'react';
import { Field, Form, Formik } from 'formik';

//Base API url
const apiUrl = 'http://localhost:3333/api';

axios.create({
  baseURL: apiUrl,
  timeout: 1000,
  headers: {},
});

function parseCookies(req) {
  return cookie.parse(req ? req.headers.cookie || '' : document.cookie);
}

export default function Login() {
  const [authenticated, setAuthenticated] = useState(false);

  const [token, setToken] = useState(null);
  const [fetchError, setFetchError] = useState(null);

  const [cookie, setCookie] = useCookies(['user']);

  const [userMetaData, setUserMetaData] = useState(null);

  //JWT Token fetch, store in cookie
  async function fetchAccessToken(values) {
    await axios
      .post('http://localhost:3333/api/auth/login', values)
      .then((res) => {
        setFetchError(null);
        setAuthenticated(true);
        setToken(res.data.token);
        setCookie('user', JSON.stringify(res.data), {
          path: '/',
          maxAge: 3600 * 24,
          sameSite: true,
        });
      })
      .catch((err) => setFetchError(err.response.data.message));
  }

  useEffect(() => {
    async function validateAccessToken() {
      await axios
        .get('http://localhost:3333/api/auth/protected', {
          withCredentials: true,
        })
        .then((res) => {
          setUserMetaData(res.data);
          console.log(JSON.stringify(res.data));
        });
    }
    if (authenticated) {
      validateAccessToken();
    }
  });

  /* useEffect(() => {
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
  }, [userID]); */

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
      {token && (
        <pre>
          <code>{token}</code>
        </pre>
      )}
      <div>{fetchError && <p>Error: {fetchError}</p>}</div>
    </>
  );
}
