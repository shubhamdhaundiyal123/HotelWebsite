import React ,{ useRef } from 'react'
import Logo from '../assets/images/logo.png'
const Navbar = () => {
    const searchRef = useRef();
    const searchHandler = () => {
       searchRef.current.classList.toggle('active');
    }
  return (
    <>
      <header className="header">
        <a href="" className="logo">
            <img src={Logo} alt="logo" />
        </a>
        <nav className='navbar' >
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#menu">Menu</a>
            <a href="#product">Products</a>
            <a href="#review">Review</a>
            <a href="#contact">Contact</a>
            <a href="#blogs">Blogs</a>
        </nav>
        <div className="icons">
            <div className="fas fa-search" onClick={searchHandler}></div>
            <div className="fas fa-shopping-cart"></div>
            <div className="fas ba-bars" id="menu-btn" ></div>
        </div>
        <div className='search-form' ref={searchRef} >
            <input type="search" placeholder="Search Here..." id='search-box'/>
            <label htmlFor="search-box" className='fas fa-search' ></label>
        </div>
      </header>
    </>
  )
}

export default Navbar
