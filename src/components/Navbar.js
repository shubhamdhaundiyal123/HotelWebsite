import React ,{ useRef } from 'react'
import Logo from '../assets/images/logo.png'
import { cart } from '../Data';
const Navbar = () => {
    const searchRef = useRef();
    const cartRef = useRef();
    const navbarRef = useRef();
    const searchHandler = () => {
       searchRef.current.classList.toggle('active');
    }
    const cartHandler = () => {
        cartRef.current.classList.toggle('active');
    }
    const navbarHandler = () => {
        console.log("Welcome you are in navbarHandler")
        navbarRef.current.classList.toggle('active');
    } 
  return (
    <>
      <header className="header">
        <a href="" className="logo">
            <img src={Logo} alt="logo" />
        </a>
        <nav className='navbar' ref={navbarRef}>
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
            <div className="fas fa-shopping-cart" onClick={cartHandler}></div>
            <div className="fas fa-bars" id="menu-btn" onClick={navbarHandler} ></div>
        </div>
        <div className='search-form' ref={searchRef} >
            <input type="search" placeholder="Search Here..." id='search-box'/>
            <label htmlFor="search-box" className='fas fa-search' ></label>
        </div>
        <div className='cart-items-container' ref={cartRef} >
        {
            cart.map((item,index)=>(
                <div className='cart-item'>
                    <span className='fas fa-times' key={index} ></span>
                    <img src={item.img} alt="" />
                    <div className="content">
                        <h3>Cart Item 01</h3>
                        <div className="price">$3</div>
                    </div>
                </div>
            ))
        }
        <a className='btn' href='#'>Checkout Now</a>
        </div>
      </header>
    </>
  )
}

export default Navbar
