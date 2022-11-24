import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../assets/index';
import { FiChevronDown } from 'react-icons/fi';
import { BsHandbag,} from 'react-icons/bs';
import { BiUser } from 'react-icons/bi';

const Header = () => {
  return (
    <header className="header">
      <h1 className="header-logo">
        <Link to="/" className="header-logo-image">
          <img src={Image.Logo} alt="t-hotel" />
        </Link>
      </h1>
      <nav className="nav">
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">
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
          <div className="header-auth-link">
            <Link to="/login">
              <BiUser />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
