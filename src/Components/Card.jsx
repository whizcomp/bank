import { Formik, Form } from "formik";
import React from "react";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { createCard, getAccounts } from "./Api";

export default function Card() {
  const validationSchema = Yup.object().shape({
    nationalId: Yup.string().required().min(7).max(8).label("National ID"),
  });
  const navigate = useNavigate();
  const [view, setView] = React.useState(false);
  const [acc, setAcc] = React.useState([]);
  const addCard = async (acc) => {
    const { account_no, nationalId } = acc;
    try {
      const { data } = await createCard(nationalId, account_no);
      const cardId = data.insertId;
      console.log(cardId);
      navigate(`/newcard/${cardId}`);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h1 className="text-center text-info pt-3">Create Card</h1>
      <Formik
        initialValues={{ nationalId: "" }}
        validationSchema={validationSchema}
        onSubmit={async ({ nationalId }) => {
          try {
            const { data } = await getAccounts(nationalId);
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
          isSubmitting,
          setFieldValue,
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
          <h5>Account Lists</h5>
          <table className="table p-3">
            <thead>
              <tr>
                <th scope="col">Account No</th>
                <th scope="col">Balance</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {acc.map((acc) => (
                <tr>
                  <td>{acc.account_no}</td>
                  <td>{acc.amount}</td>
                  <td>
                    {" "}
                    <button
                      className="btn btn-primary"
                      type="submit"
                      onClick={() => addCard(acc)}
                    >
                      New Card
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
