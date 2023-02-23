import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
const Sidebar = () => {
  const navs = [
    { to: "/", title: "Dashboard", id: 1 },
    { to: "/user", title: "New User", id: 2 },
    { to: "/account", title: "New Account", id: 3 },
    { to: "/card", title: "New Card", id: 4 },
    { to: "/withdraw", title: "Withdraw", id: 6 },
    { to: "/deposit", title: "Deposit", id: 7 },
  ];
  return (
    <div className="sidebar">
      <ul className="list-unstyled">
        {navs.map((nav) => (
          <li key={nav.id} className="pt-5">
            <Link className="text-decoration-none" to={nav.to}>
              {nav.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
