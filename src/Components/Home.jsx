import React, { useState } from "react";
import { accounts, cards, users } from "./Api";

export default function Home() {
  React.useEffect(() => {
    getUsers();
    getAccounts();
    getCards();
  }, []);
  const getUsers = async () => {
    try {
      const { data } = await users();
      setUser(data);
    } catch (error) {}
  };
  const getAccounts = async () => {
    try {
      const { data } = await accounts();
      setAcc(data);
    } catch (error) {}
  };
  const getCards = async () => {
    try {
      const { data } = await cards();
      setCredit(data);
    } catch (error) {}
  };
  const [user, setUser] = useState([]);
  const [acc, setAcc] = useState([]);
  const [credit, setCredit] = useState([]);

  return (
    <div className="container text-center">
      <div className=" shadow-lg p-3 mb-5 mt-3 bg-white rounded">
        <h1 className="display-4">{user.length}</h1>
        <h1>users</h1>
      </div>
      <div className="shadow-lg p-3 mb-5 bg-white rounded">
        <h1 className="display-4">{acc.length}</h1>
        <h1>Accounts</h1>
      </div>
      <div className="shadow-lg p-3 mb-5 bg-white rounded">
        <h1 className="display-4">{credit.length}</h1>
        <h1>Credit Cards</h1>
      </div>
    </div>
  );
}
