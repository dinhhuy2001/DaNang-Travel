import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Image from "../assets/index";
import { FiChevronDown } from "react-icons/fi";
import { BsHandbag } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { Dropdown } from "antd";

const Header = () => {
  const [isLogin, setIsLogin] = useState(localStorage.getItem("user-info"));
  const navigate = useNavigate();

  const items = [
    {
      label: (
        <p
          onClick={() => {
            navigate("/profile");
          }}
        >
          Profile
        </p>
      ),
      key: "item-1",
    }, // remember to pass the key prop
    {
      label: (
        <p
          onClick={() => {
            localStorage.removeItem("user-info");
            navigate("/");
          }}
        >
          Logout
        </p>
      ),
      key: "item-2",
    },
  ];

  return (
    <header className="header">
      <h1 className="header-logo">
        <Link to={isLogin ? "/home" : "/"} className="header-logo-image">
          <img src={Image.Logo} alt="t-hotel" />
        </Link>
      </h1>
      <nav className="nav">
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/home" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/blog" className="nav-link">
              Blog
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <div className="header-right">
        <div className="header-lang">
          <ul className="header-lang-list">
            <li className="header-lang-item">EN</li>
          </ul>
          <div className="header-lang-icon">
            <FiChevronDown />
          </div>
        </div>
        <div className="header-auth">
          <div className="header-auth-link">
            <Link to="/">
              <BsHandbag />
            </Link>
          </div>
          {!isLogin ? (
            <div className="header-auth-link">
              <Link to="/login">
                <BiUser />
              </Link>
            </div>
          ) : (
            <div className="header-auth-link" s>
              <Dropdown menu={{ items }}>
                <BiUser />
              </Dropdown>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
