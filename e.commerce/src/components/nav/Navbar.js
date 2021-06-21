import {  NavLink,Link } from 'react-router-dom';
import   ShopCart from '../shopCart/ShopCart';
import {  useSelector } from 'react-redux';

import React from 'react'

export const Navbar = () => {
 
  const totalQuantity = useSelector(state => state.cartReducer.totalCartQuantity)
 
 
 
 
 
  return (
    
  
  
<nav className="navbar  navbar-light  ">
   
    <div className="">
        <a style={{color: "#3b5998"}} href="https://www.facebook.com/" role="button" ><i className="fab fa-facebook-f  mx-2"></i></a>
        <a style={{color: "#55acee"}} href="https://twitter.com/?lang=sv" role="button"><i className="fab fa-twitter f mx-2"></i  ></a>
        <a style={{color: "#dd4b39"}} href="https://www.google.com/" role="button"><i className="fab fa-google  mx-2"></i></a>
        <a style={{color: "#ac2bac"}} href="https://www.instagram.com/" role="button" ><i className="fab fa-instagram mx-3"></i></a>
    </div>

   
    <div className=" container d-flex justify-content-center align-content-center mb-1 ">
        {/* <img src="https://lh3.googleusercontent.com/proxy/5Sjh_fycEKKEcVK5GT4Q2bc5yxY-TXtTACQbzObfPhGx0KPWZwYkQAihfzs_dbxHD9dEsGIy5uc9X9t-0fat723XTzP0td4LB2KUSh0hvL0d7qh-" alt="" width="100px" /> */}
      <h3 className="text-muted">TimePice</h3>
    </div>
       
       
      
  <div className="container-fluid bg-dark  ">
        
  
  
    <div className="d-flex justify-content-center align-content-center ">
      <ul className="breadcrumb ">
        
        <li><NavLink exact activeClassName="activE" className="nav-link text-white" to="/">Home</NavLink></li>
               
        <li><NavLink exact activeClassName="activE" className="nav-link  text-white" to="/about">About</NavLink></li>
        
        <li><NavLink exact activeClassName="activE" className="nav-link  text-white" to="/products">Products</NavLink></li>
        
      </ul>
   
    </div>
     
  
    
   
    <ul className="navbar-nav flex-row d-none d-md-flex dropdown">
       
        <li className="nav-item me-3 me-lg-0 dropdown ">
              <span
                className="nav-link dropdown-toggle hidden-arrow mx-3"
                id="navbarDropdown"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fas fa-shopping-bag text-white"></i>
                { totalQuantity > 0 && <span className="badge rounded-pill badge-notification bg-danger">{totalQuantity}</span>}

              </span>
              <ul className="dropdown-menu dropdown-menu-end shopping-cart left" aria-labelledby="navbarDropdown">
                <ShopCart />
              </ul>
        </li>


      <li className="nav-item me-3 me-lg-1">
        <a className="nav-link  text-white" href="/#">
          <span><i className="fas fa-users "></i></span>
          <span className="badge rounded-pill badge-notification bg-danger">2</span>
        </a>
      </li>

      <li className="nav-item me-3 me-lg-1">
        <span className="nav-link d-sm-flex align-items-sm-center  text-white mx-3" href="/#">
          <img
            src="https://mdbootstrap.com/img/new/avatars/1.jpg"
            className="rounded-circle"
            height="22"
            alt=""
            loading="lazy"
          />
          <Link className="d-none d-sm-block ms-1 text-white" to="/LoginUser">Login</Link>
        </span>
      </li>
    </ul>
   
   
    
  </div>
</nav>

    )
}

export default Navbar