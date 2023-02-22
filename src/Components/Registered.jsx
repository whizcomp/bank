import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAccount } from "./Api";

export default function Registered() {
  let { id } = useParams();
  useEffect(() => {
    getUser();
  }, []);
  const getUser = async () => {
    const { data } = await getAccount(id);
    setUser(data[0]);
  };
  const [user, setUser] = useState({});
  return (
    <div>
      <h3 className="text-center pt-5 pb-3 text-capitalize">
        Welcome {user && user.firstname}
      </h3>

      <table class="table p-3">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <td scope="col">
              <p className="text-capitalize">
                {" "}
                {user && user.firstname} {user && user.lastname}
              </p>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>National ID</td>
            <td>{user && user.nationalId}</td>
          </tr>
          <tr>
            <td>New Account Number</td>
            <td>{user && user.account_no}</td>
          </tr>
          <tr>
            <td>Balance</td>
            <td>{user && user.amount}</td>
          </tr>
        </tbody>
      </table>
      <h5 className="text-center text-success pt-5">
        Account created successful
      </h5>
    </div>
  );
}
