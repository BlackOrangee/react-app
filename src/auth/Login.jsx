import { ErrorMessage, Field, FieldArray, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import styles from "./Form.module.css";
// console.log(styles);

const initialValues = {
  name: "",
  email: "",
  password: "",
  phones: [
    {
      number: "+38",
    },
  ],
};

const submitHandler = (values, formikBag) => {
  console.log(values);
  formikBag.resetForm();
};

const LoginSchema = Yup.object().shape({
  
  email: Yup.string().email().required(),
  password: Yup.string().required(),

});

const Login = () => {
  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={submitHandler}
        validationSchema={LoginSchema}
      >
        {({ values }) => (
          <Form>
            
            <div>
              <Field type="email" name="email" placeholder="Email: " />
              <ErrorMessage
                name="email"
                component="div"
                className={styles.invalid}
              />
            </div>

            <div>
              <Field type="password" name="password" placeholder="Password: " />
              <ErrorMessage
                name="password"
                component="div"
                className={styles.invalid}
              />
            </div>

            <Field type="submit" value="Submit" id="submit" />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;