import { Formik, Form } from "formik";
import React from "react";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { createUser } from "./Api";

const validationSchema = Yup.object().shape({
  firstname: Yup.string().required().min(2).max(50).label("Firstname"),
  lastname: Yup.string().required().min(2).max(50).label("Lastname"),
  dob: Yup.date().required().label("Date of birth"),
  nationalId: Yup.string().required().min(7).max(8).label("National ID"),
});
export default function User() {
  const navigate = useNavigate();
  const [error, setError] = React.useState();
  return (
    <div>
      <h1 className="text-center">Register New User</h1>
      {error && (
        <div class="alert alert-danger" role="alert">
          {error}
        </div>
      )}
      <Formik
        initialValues={{ firstname: "", lastname: "", nationalId: "", dob: "" }}
        validationSchema={validationSchema}
        onSubmit={async (values) => {
          try {
            const { data } = await createUser(values);

            console.log(data);
            const { insertId: id } = data;
            navigate(`/user/${id}`);
          } catch (error) {
            setError(error.response.data);
          }
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          setFieldValue,
        }) => (
          <Form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="firstname" className="form-label">
                FirstName
              </label>
              <input
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.firstname}
                className="form-control"
                id="firstname"
                name="firstname"
              />
              {errors.firstname && touched.firstname ? (
                <small className="text-danger">{errors.firstname}</small>
              ) : null}
            </div>
            <div className="mb-3">
              <label htmlFor="lastname" className="form-label">
                LastName
              </label>
              <input
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.lastname}
                className="form-control"
                id="lastname"
              />
              {errors.lastname && touched.lastname ? (
                <small className="text-danger">{errors.lastname}</small>
              ) : null}
            </div>
            <div className="mb-3">
              <label htmlFor="date" className="form-label">
                Date Of Birth
              </label>
              <input
                type="date"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.dob}
                className="form-control"
                id="dob"
                max="2005-01-01"
              />
              {errors.dob && touched.dob ? (
                <small className="text-danger">{errors.dob}</small>
              ) : null}
            </div>
            <div className="mb-3">
              <label htmlFor="nationaId" className="form-label">
                National Id
              </label>
              <input
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.nationalId}
                className="form-control"
                id="nationalId"
              />
              {errors.nationalId && touched.nationalId ? (
                <small className="text-danger">{errors.nationalId}</small>
              ) : null}
            </div>
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
