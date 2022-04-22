import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3333/api/schools');
  const data = await res.json();
  console.log(data);

  return { props: { schools: data } };
}

const Registration = ({ schools }) => {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      first_name: '',
      last_name: '',
      phone_number: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        id="email"
        name="email"
        type="email"
        placeholder="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <input
        id="password"
        name="password"
        type="text"
        placeholder="password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />

      <input
        id="first_name"
        name="first_name"
        type="text"
        placeholder="first name"
        onChange={formik.handleChange}
        value={formik.values.first_name}
      />
      <input
        id="last_name"
        name="last_name"
        type="text"
        placeholder="last name"
        onChange={formik.handleChange}
        value={formik.values.last_name}
      />
      <input
        id="phone_number"
        name="phone_number"
        type="text"
        placeholder="phone number"
        onChange={formik.handleChange}
        value={formik.values.phone_number}
      />

      <input list="school-dropdown" placeholder="select school"></input>
      <datalist id="school-dropdown">
        {schools.map((school) => (
          <option key={school.school_id} value={school.school_name}></option>
        ))}
      </datalist>

      <button type="submit">Submit</button>
    </form>
  );
};

export default Registration;
