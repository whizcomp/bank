import { Formik, Form } from "formik";
import React from "react";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

export default function Deposit() {
  const validationSchema = Yup.object().shape({
    nationalId: Yup.string().required().min(7).max(8).label("National ID"),
  });

  const [view, setView] = React.useState(false);
  return (
    <div>
      <h4 className="text-center text-info pt-3">Deposit</h4>
      <Formik
        initialValues={{ nationalId: "" }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          setView(true);
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
              <label htmlFor="nationalId" className="form-label">
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
              Submit
            </button>
          </Form>
        )}
      </Formik>
      {view && (
        <div>
          <h3>Victor kipkoech</h3>
          <table className="table p-3">
            <thead>
              <tr>
                <th scope="col">Account No</th>
                <th scope="col">Balance</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>10</td>
                <td>3400</td>
                <td>
                  {" "}
                  <button
                    className="btn btn-primary"
                    type="submit"
                    onClick={() => console.log("heey")}
                  >
                    Deposit
                  </button>
                </td>
              </tr>
              <tr>
                <td>10</td>
                <td>3400</td>
                <td>
                  {" "}
                  <button
                    className="btn btn-primary"
                    type="submit"
                    onClick={() => console.log("heey")}
                  >
                    Deposit
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
