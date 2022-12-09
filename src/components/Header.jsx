import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Image from '../assets/index';
import { FiChevronDown } from 'react-icons/fi';
import { BsHandbag,} from 'react-icons/bs';
import { BiUser } from 'react-icons/bi';

const Header = () => {
  const [currentLang, setCurrentLang] = useState("EN");
  
  const changeLang = (newLang) => {
    setCurrentLang(newLang)
  }
  const lang = ["EN","JP"];
  return (
    <header className="header">
      <style jsx global>{`
        select {
          border: none;
          outline: none;
          scroll-behavior: smooth;
          background: transparent;
          font-weight: bolder;
        }
      `}</style>
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
        <select onChange={(event) => changeLang(event.target.value)}
        value={currentLang} >
            {lang.map((i, index) => (
              <option key={index} value={i} >
                {i}
              </option>
            ))}
          </select>
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
