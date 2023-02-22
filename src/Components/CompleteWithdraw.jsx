import React from "react";
import { getAccount } from "./Api";
import { useParams } from "react-router-dom";

export default function CompleteWithdraw() {
  const { account_no } = useParams();
  useEffect(() => {
    getDetails;
  }, []);
  const getDetails = async () => {
    const { data } = await getAccount();
    console.log(data);
  };
  return <div></div>;
}
