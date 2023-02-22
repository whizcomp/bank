import React, { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { deposit, getAccount } from "./Api";
export default function ConfirmDeposit() {
  const { account_no } = useParams();
  useEffect(() => {
    getDetails();
  }, []);
  const getDetails = async () => {
    const { data } = await getAccount(account_no);
    setUser(data[0]);
  };
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const validationSchema = Yup.object().shape({
    amount: Yup.string().required().min(1).max(8).label("Amount"),
  });
  return (
    <div>
      <div className="card mt-3 mb-5">
        <div class="card-header pt-3 pb-4">Account Information</div>
        <table className="table p-3 pt-5">
          <thead>
            <tr className="pt-4">
              <td scope="col">Name</td>
              <td scope="col">
                {user && user.firstname} {user && user.lastname}
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Balance</td>
              <td>{user && user.amount}</td>
            </tr>
            <tr>
              <td>Account No</td>
              <td>{user && user.account_no}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Formik
        initialValues={{ amount: "" }}
        validationSchema={validationSchema}
        onSubmit={async ({ amount }) => {
          try {
            const { data } = await deposit(account_no, amount);
            navigate(`/successful/${account_no}`);
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
            <div className="mb-3 pt-3">
              <label htmlFor="amount" className="form-label">
                Enter Amount
              </label>
              <input
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.amount}
                className="form-control"
                id="amount"
              />
              {errors.amount && touched.amount ? (
                <small className="text-danger">{errors.amount}</small>
              ) : null}
            </div>
            <button type="submit" className="btn btn-primary">
              Deposit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
