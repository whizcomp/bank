import { Formik } from "formik";
import React from "react";
import DateBuilder from "../build/DateBuilder";

export default function User() {
  return (
    <div>
      <h1 className="text-center">Register New User</h1>
      <Formik
        initialValues={{ firstname: "", lastname: "", nationalId: "", dob: "" }}
        onSubmit={(values) => console.log(values)}
      >
        {(
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          setFieldValue
        ) => (
          <form>
            <div class="mb-3">
              <label for="firstname" class="form-label">
                FirstName
              </label>
              <input
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.firstname}
                className="form-control"
                id="firstname"
              />
            </div>
            <div class="mb-3">
              <label for="lastname" class="form-label">
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
            </div>
            <div class="mb-3">
              <label htmlFor="date" class="form-label">
                Date Of Birth
              </label>
              <DateBuilder
                name="dob"
                value={values.dob}
                onChange={handleChange}
              />
            </div>
            <div class="mb-3">
              <label for="nationaId" class="form-label">
                National Id
              </label>
              <input
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.nationalId}
                className="form-control"
                id="nationaId"
              />
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}
