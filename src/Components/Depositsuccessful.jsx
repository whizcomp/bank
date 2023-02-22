import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAccount } from "./Api";

export default function Depositsuccessful() {
  const { account_no } = useParams();
  useEffect(() => {
    getDetails();
  }, []);
  const getDetails = async () => {
    const { data } = await getAccount(account_no);
    setUser(data[0]);
  };
  const [user, setUser] = useState({});

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
    </div>
  );
}
