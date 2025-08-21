import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function formikForm() {
  // Define validation schema with Yup

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        // alert("Form submitted successfully: " + JSON.stringify(values, null, 2)); OR
        console.log(values);
        resetForm();
      }}
    >
      {() => (
        <Form>
          <Field type="text" name="username" placeholder="Username" />
          <ErrorMessage name="username" component="div" />
          <Field type="emailt" name="email" placeholder="Email" />
          <ErrorMessage name="email" component="div" />
          <Field type="password" name="password" placeholder="Password" />
          <ErrorMessage name="password" component="div" />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
}

export default formikForm;
