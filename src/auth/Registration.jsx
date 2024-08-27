import { ErrorMessage, Field, FieldArray, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import styles from "./Form.module.css";
console.log(styles);

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

const RegistrationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short")
    .max(15, "Too Long")
    .required("Name is required"),
  email: Yup.string().email().required(),
  password: Yup.string().min(4).max(20).required(),
  phones: Yup.array().of(
    Yup.object().shape({
      number: Yup.string()
        .matches(/\+380\d{9}/, "Phone is invalid")
        .required(),
    })
  ),
});

const Registration = () => {
  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={submitHandler}
        validationSchema={RegistrationSchema}
      >
        {({ values }) => (
          <Form>
            <div>
              <Field name="name" placeholder="Name: " />
              <ErrorMessage
                name="name"
                component="div"
                className={styles.invalid}
              />
            </div>

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

            <div>
              <FieldArray name="phones">
                {({ push, remove }) =>
                  values.phones.map((phone, index) => (
                    <div key={index}>
                      <Field name={`phones.${index}.number`} />
                      {index === 0 ? (
                        <button
                          type="button"
                          onClick={() => push({ number: "+38" })}
                        >
                          Add
                        </button>
                      ) : (
                        <button type="button" onClick={() => remove(index)}>
                          Remove
                        </button>
                      )}
                      <ErrorMessage
                        name={`phones.${index}.number`}
                        component="div"
                        className={styles.invalid}
                      />
                    </div>
                  ))
                }
              </FieldArray>
            </div>

            <Field type="submit" value="Submit" id="submit" />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Registration;