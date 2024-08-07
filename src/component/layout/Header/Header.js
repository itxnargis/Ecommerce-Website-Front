// Header.js

import React, { useState } from 'react';
import Search from '../../Product/Search.js';
import { FaBars, FaTimes, FaChevronCircleDown, FaUser, FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import FilterModal from '../../Product/FilterModal';
import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };
  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <header>
      <div className='header'>
        <div className='header-component'>
          <Link to="#" className="bar-logo" onClick={toggleSidebar}><FaBars /></Link>
          <div className='links'>
            <Link to="/" className="link-details">Home</Link>
            <Link to="/products" className="link-details">Products</Link>
            <Link to="/about" className="link-details">About</Link>
            <Link to="/contact" className="link-details">Contact</Link>
          </div>
          <div className="social">
            <Link to="/login" className="login-icon">
              <FaUser />
            </Link>
            <Link to="/cart" className="cart-icon">
              <FaShoppingCart />
            </Link>
          </div>
        </div>
      </div>
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className='sidebar-content'>
          <Link to="#" className="close-icon" onClick={toggleSidebar}><FaTimes /></Link>
          <div className='sidebar-links'>
            <Link to="/" className="sidebar-link" onClick={closeSidebar}>Home</Link>
            <Link to="/products" className="sidebar-link" onClick={closeSidebar}>Products</Link>
            <Link to="/about" className="sidebar-link" onClick={closeSidebar}>About</Link>
            <Link to="/contact" className="sidebar-link" onClick={closeSidebar}>Contact</Link>
          </div>
        </div>
      </div>

      <div className='header-bottom'>
        <div className='header-bottom-box'>
          <button className="sort-btn" onClick={handleOpenModal}>
            Sort By <FaChevronCircleDown />
          </button>
          <div className='search'>
            <Search />
          </div>
        </div>
      </div>

      <FilterModal open={openModal} handleClose={handleCloseModal} />
    </header>
  );
};

export default Header;
