import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Routes as Switch, Route } from "react-router-dom";
import Home from "./Home";
import User from "./User";
import Account from "./Account";
import Card from "./Card";
import Statement from "./Statement";
import Withdraw from "./Withdraw";
import Deposit from "./Deposit";
import Registered from "./Registered";
import CardDetails from "./CardDetails";
import ConfirmDeposit from "./ConfirmDeposit";
export default function Dashboard() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-md-3 p-3">
            <Sidebar />
          </div>
          <div className="col-md-9">
            <Switch>
              <Route path="/newcard/:card_no" element={<CardDetails />}></Route>
              <Route
                path="/deposit/:account_no"
                element={<ConfirmDeposit />}
              ></Route>
              <Route path="/user/:id" element={<Registered />}></Route>
              <Route path="/user" element={<User />}></Route>
              <Route path="/account" element={<Account />}></Route>
              <Route path="/card" element={<Card />}></Route>
              <Route path="/statement" element={<Statement />}></Route>
              <Route path="/withdraw" element={<Withdraw />}></Route>
              <Route path="/deposit" element={<Deposit />}></Route>
              <Route path="/" element={<Home />}></Route>
            </Switch>
          </div>
        </div>
      </div>
    </>
  );
}
