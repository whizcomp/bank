import { Formik, Form } from "formik";
import React from "react";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { createAccount, getAccounts } from "./Api";

export default function Account() {
  const validationSchema = Yup.object().shape({
    nationalId: Yup.string().required().min(7).max(8).label("National ID"),
  });
  const [view, setView] = React.useState(false);
  const [acc, setAcc] = React.useState([]);

  const navigate = useNavigate();
  const registered = async () => {
    const id = acc[0].nationalId;
    try {
      const { data } = await createAccount(id);
      if (data.affectedRows > 0) {
        const { insertId } = data;
        navigate(`/user/${insertId}`);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h3 className="text-center text-info pt-3">Create Account</h3>
      <Formik
        initialValues={{ nationalId: "" }}
        validationSchema={validationSchema}
        onSubmit={async ({ nationalId }) => {
          try {
            const { data } = await getAccounts(nationalId);
            console.log(data);
            setAcc(data);
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
        }) => (
          <Form onSubmit={handleSubmit}>
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
              Add New Account
            </button>
          </Form>
        )}
      </Formik>
      {view && (
        <div>
          <table className="table p-3">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Account Number</th>
                <th scope="col">National ID</th>
                <th scope="col">balance</th>
              </tr>
            </thead>
            <tbody>
              {acc.map((acc) => (
                <tr>
                  <td>
                    {acc.firstname} {acc.lastname}
                  </td>
                  <td>{acc.account_no}</td>
                  <td>{acc.nationalId}</td>
                  <td>{acc.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button
            className="btn btn-primary"
            type="submit"
            onClick={() => registered()}
          >
            Create New Account
          </button>
        </div>
      )}
    </div>
  );
}
