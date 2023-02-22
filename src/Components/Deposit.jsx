import { Formik, Form } from "formik";
import React from "react";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { getAccounts } from "./Api";

export default function Deposit() {
  const validationSchema = Yup.object().shape({
    nationalId: Yup.string().required().min(7).max(8).label("National ID"),
  });
  const navigate = useNavigate();
  const [view, setView] = React.useState(false);
  const [accounts, setAccounts] = React.useState([]);
  const next = (acc) => {
    const { account_no } = acc;
    navigate(`/deposit/${account_no}`);
  };
  return (
    <div>
      <h4 className="text-center text-info pt-3">Deposit</h4>
      <Formik
        initialValues={{ nationalId: "" }}
        validationSchema={validationSchema}
        onSubmit={async ({ nationalId }) => {
          try {
            const { data } = await getAccounts(nationalId);
            setAccounts(data);
            setView(true);
          } catch (error) {
            console.log(error);
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
        <div className="pt-3">
          <h3 className="text-capitalize">
            {accounts && accounts[0].firstname}{" "}
            {accounts && accounts[0].lastname}
          </h3>
          <table className="table p-3">
            <thead>
              <tr>
                <th scope="col">Account No</th>
                <th scope="col">Balance</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {accounts.map((acc) => (
                <tr>
                  <td>{acc.account_no}</td>
                  <td>{acc.amount}</td>
                  <td>
                    {" "}
                    <button
                      className="btn btn-primary"
                      type="submit"
                      onClick={() => next(acc)}
                    >
                      Deposit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
