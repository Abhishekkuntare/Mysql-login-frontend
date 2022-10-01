import React from "react";
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

const Registraion = () => {
  const initialValue = {
    username: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().min(3).max(15).required(),
    password: Yup.string().min(4).max(25).required(),
  });

  const onSubmit = (data) => {
    axios.post("http://localhost:3001/auth", data).then(() => {
      console.log(data);
    });
  };
  return (
    <Formik
      initialValues={initialValue}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <Form>
        <label>Username: </label>
        <ErrorMessage name="username" component="span" />
        <Field
          id="inputCreatePost"
          name="username"
          placeholder="(Ex: Jone123)"
        />

        <label>Password: </label>
        <ErrorMessage name="password" component="span" />
        <Field
          type="password"
          id="inputCreatePost"
          name="password"
          placeholder="(******)"
        />
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
};

export default Registraion;
