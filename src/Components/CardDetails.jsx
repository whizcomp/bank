import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { creditCardList } from "./Api";

export default function CardDetails() {
  const { card_no } = useParams();
  useEffect(() => {
    getCardDetails();
  }, []);
  const getCardDetails = async () => {
    try {
      const { data } = await creditCardList(card_no);
      setCredits(data);
    } catch (error) {
      console.log(error);
    }
  };
  const [credits, setCredits] = useState([]);
  return (
    <div>
      <h1>Credit card lists</h1>
      <table className="table p-3">
        <thead>
          <tr>
            <th scope="col">Account No</th>
            <th scope="col">Credit Card no</th>
            <th scope="col">CVC</th>
            <th scope="col">Balance</th>
          </tr>
        </thead>
        <tbody>
          {credits.map((credit) => (
            <tr>
              <td>{credit.account_no}</td>
              <td>{credit.card_no}</td>
              <td>{credit.cvc}</td>
              <td>{credit.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
