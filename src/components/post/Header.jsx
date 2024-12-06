import React from 'react';

import './assets/css/app.css';
import './assets/css/core.css';
import './assets/css/style.css';



import './assets/css2/style.css';
import './assets/css2/slick.css';
import './assets/css2/slick-theme.css';
import './assets/css2/responsive.css';
// import './assets/css2/fonts.css';
import './assets/css2/font-awesome.css';
// import './assets/css2/bootstrap.min.css';
// import './assets/css2/bootstrap.css';






import logos from './assets/img/logo/logo.png';
import avatars from './assets/img/avatars/1.jpg';

import { AiOutlineShoppingCart, AiOutlineHeart, AiOutlineBell, AiOutlineMail, AiOutlineSearch } from 'react-icons/ai';
import { FiMessageSquare } from 'react-icons/fi';
import { CgMenuGridR } from 'react-icons/cg';





const Header = () => {
    return (
        <>
            <section>
               

                <div id="main-navbar" className="navbar navbar-v1 is-inline-flex is-transparent no-shadow is-hidden-mobile">
                    <div className="container is-fluid">
                        <div className="navbar-brand">
                            <a href="index.html" className="navbar-item">
                                <img className="logo light-image" src={logos} width="112" height="28" alt="" />
                                <span className="logo-title">Edudron</span>
                            </a>
                        </div>
                        <div className="navbar-menu">

                            <div className="navbar-end">

                                <div className="navbar-item">
                                    <div id="global-search" className="control">
                                        <input id="tipue_drop_input" className="input is-rounded" type="text" placeholder="Search" required />
                                        <span id="clear-search" className="reset-search">
                                            <i data-feather="x"></i>
                                        </span>
                                        <span className="search-icon">
                                            <AiOutlineSearch style={{ color: '#999' }} />
                                            <i data-feather="search"></i>
                                        </span>

                                        <div id="tipue_drop_content" className="tipue-drop-content"></div>
                                    </div>

                                </div>

                                <div id="account-dropdown" className="navbar-item is-account drop-trigger has-caret">
                                    <div className="user-image">
                                        <img src={avatars} alt="" />
                                        <span className="indicator"></span>
                                        {/* <span className="right-logo-title">Bni Cyst</span>  */}


                                    </div>

                                    {/* card button  */}
                                    <div className="navbar-item is-cart">
                                        <div className="cart-button">
                                            <AiOutlineShoppingCart style={{ color: '#999' }} />
                                            {/* <i data-feather="shopping-cart"></i> */}
                                            <div className="cart-count">
                                            </div>
                                        </div>

                                        {/* Cart dropdown */}
                                        <div className="shopping-cart">
                                            <div className="cart-inner">

                                                {/* Loade */}
                                                <div className="navbar-cart-loader is-active">
                                                    <div className="loader is-loading"></div>
                                                </div>

                                                <div className="shopping-cart-header">
                                                    <a href="ecommerce-cart.html" className="cart-link">View Cart</a>
                                                    <div className="shopping-cart-total">
                                                        <span className="lighter-text">Total:</span>
                                                        <span className="main-color-text">$193.00</span>
                                                    </div>
                                                </div>
                                                {/* end shopping-cart-header */}

                                                <ul className="shopping-cart-items">
                                                    <li className="cart-row">
                                                        <img src="assets/img/products/2.svg" alt="" />
                                                        <span className="item-meta">
                                                            <span className="item-name">Cool Shirt</span>
                                                            <span className="meta-info">
                                                                <span className="item-price">$29.00</span>
                                                                <span className="item-quantity">Qty: 01</span>
                                                            </span>
                                                        </span>
                                                    </li>

                                                    <li className="cart-row">
                                                        <img src="assets/img/products/3.svg" alt="" />
                                                        <span className="item-meta">
                                                            <span className="item-name">Military Short</span>
                                                            <span className="meta-info">
                                                                <span className="item-price">$39.00</span>
                                                                <span className="item-quantity">Qty: 01</span>
                                                            </span>
                                                        </span>
                                                    </li>

                                                    <li className="cart-row">
                                                        <img src="assets/img/products/4.svg" alt="" />
                                                        <span className="item-meta">
                                                            <span className="item-name">Cool Backpack</span>
                                                            <span className="meta-info">
                                                                <span className="item-price">$125.00</span>
                                                                <span className="item-quantity">Qty: 01</span>
                                                            </span>
                                                        </span>
                                                    </li>
                                                </ul>

                                                <a href="#" className="button primary-button is-raised">Checkout</a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* card button  */}

                                    <div className="nav-drop is-account-dropdown">
                                        <div className="inner">
                                            <div className="nav-drop-header">
                                                <span className="username">Jenna Davis</span>
                                                <label className="theme-toggle">
                                                    <input type="checkbox" />
                                                    <span className="toggler">
                                                        <span className="dark">
                                                            <i data-feather="moon"></i>
                                                        </span>
                                                        <span className="light">
                                                            <i data-feather="sun"></i>
                                                        </span>
                                                    </span>
                                                </label>
                                            </div>
                                            <div className="nav-drop-body account-items">
                                                <a id="profile-link" href="profile-main.html" className="account-item">
                                                    <div className="media">
                                                        <div className="media-left">
                                                            <div className="image">
                                                                <img src="https://via.placeholder.com/400x400" data-demo-src="assets/img/avatars/jenna.png" alt="" />
                                                            </div>
                                                        </div>
                                                        <div className="media-content">
                                                            <h3>Jenna Davis</h3>
                                                            <small>Main account</small>
                                                        </div>
                                                        <div className="media-right">
                                                            <i data-feather="check"></i>
                                                        </div>
                                                    </div>
                                                </a>
                                                <hr className="account-divider" />
                                                <a href="pages-main.html" className="account-item">
                                                    <div className="media">
                                                        <div className="media-left">
                                                            <div className="image">
                                                                <img data-demo-src="assets/img/avatars/hanzo.svg" alt="" />
                                                            </div>
                                                        </div>
                                                        <div className="media-content">
                                                            <h3>Css Ninja</h3>
                                                            <small>Company page</small>
                                                        </div>
                                                        <div className="media-right is-hidden">
                                                            <i data-feather="check"></i>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="pages-main.html" className="account-item">
                                                    <div className="media">
                                                        <div className="media-left">
                                                            <div className="image">
                                                                <img src="assets/img/icons/logos/fastpizza.svg" alt="" />
                                                            </div>
                                                        </div>
                                                        <div className="media-content">
                                                            <h3>Fast Pizza</h3>
                                                            <small>Company page</small>
                                                        </div>
                                                        <div className="media-right is-hidden">
                                                            <i data-feather="check"></i>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="pages-main.html" className="account-item">
                                                    <div className="media">
                                                        <div className="media-left">
                                                            <div className="image">
                                                                <img data-demo-src="assets/img/icons/logos/slicer.svg" alt="" />
                                                            </div>
                                                        </div>
                                                        <div className="media-content">
                                                            <h3>Slicer</h3>
                                                            <small>Company page</small>
                                                        </div>
                                                        <div className="media-right is-hidden">
                                                            <i data-feather="check"></i>
                                                        </div>
                                                    </div>
                                                </a>
                                                <hr className="account-divider" />
                                                <a href="options-settings.html" className="account-item">
                                                    <div className="media">
                                                        <div className="icon-wrap">
                                                            <i data-feather="settings"></i>
                                                        </div>
                                                        <div className="media-content">
                                                            <h3>Settings</h3>
                                                            <small>Access widget settings.</small>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a className="account-item">
                                                    <div className="media">
                                                        <div className="icon-wrap">
                                                            <i data-feather="life-buoy"></i>
                                                        </div>
                                                        <div className="media-content">
                                                            <h3>Help</h3>
                                                            <small>Contact our support.</small>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a className="account-item">
                                                    <div className="media">
                                                        <div className="icon-wrap">
                                                            <i data-feather="power"></i>
                                                        </div>
                                                        <div className="media-content">
                                                            <h3>Log out</h3>
                                                            <small>Log out from your account.</small>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* slide itmes  */}
                                <div className="navbar-start">
                                    {/* Navbar Search  */}

                                    <div className="navbar-item is-icon drop-trigger">
                                        <a className="icon-link is-friends" href="javascript:void(0);">
                                            <AiOutlineHeart style={{ color: '#999' }} />
                                            {/* <i data-feather="heart"></i> */}
                                            <span className="indicator"></span>
                                        </a>

                                        <div className="nav-drop">
                                            <div className="inner">
                                                <div className="nav-drop-header">
                                                    <span>Friend requests</span>
                                                    <a href="#">
                                                        <i data-feather="search"></i>
                                                    </a>
                                                </div>
                                                <div className="nav-drop-body is-friend-requests">
                                                    {/* Friend request  */}
                                                    <div className="media">
                                                        <figure className="media-left">
                                                            <p className="image">
                                                                <img data-demo-src="assets/img/avatars/bobby.jpg" alt="" />
                                                            </p>
                                                        </figure>
                                                        <div className="media-content">
                                                            <a href="#">Bobby Brown</a>
                                                            <span>Najeel verwick is a common friend</span>
                                                        </div>
                                                        <div className="media-right">
                                                            <button className="button icon-button is-solid grey-button raised">
                                                                <i data-feather="user-plus"></i>
                                                            </button>
                                                            <button className="button icon-button is-solid grey-button raised">
                                                                <i data-feather="user-minus"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                    {/* Friend request  */}
                                                    <div className="media">
                                                        <figure className="media-left">
                                                            <p className="image">
                                                                <img data-demo-src="assets/img/avatars/dan.jpg" alt="" />
                                                            </p>
                                                        </figure>
                                                        <div className="media-content">
                                                            <a href="#">Dan Walker</a>
                                                            <span>You have 4 common friends</span>
                                                        </div>
                                                        <div className="media-right">
                                                            <button className="button icon-button is-solid grey-button raised">
                                                                <i data-feather="user-plus"></i>
                                                            </button>
                                                            <button className="button icon-button is-solid grey-button raised">
                                                                <i data-feather="user-minus"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                    {/* Friend request  */}
                                                    <div className="media">
                                                        <figure className="media-left">
                                                            <p className="image">
                                                                <img data-demo-src="./assets/img/avatars/nelly.png" alt="" />
                                                            </p>
                                                        </figure>
                                                        <div className="media-content">
                                                            <span>You are now friends with <a href="#">Nelly Schwartz</a>. Check her <a href="#">profile</a>.</span>
                                                        </div>
                                                        <div className="media-right">
                                                            <div className="added-icon">
                                                                <i data-feather="tag"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* Friend request  */}
                                                    <div className="media">
                                                        <figure className="media-left">
                                                            <p className="image">
                                                                <img data-demo-src="assets/img/avatars/milly.jpg" alt="" />
                                                            </p>
                                                        </figure>
                                                        <div className="media-content">
                                                            <a href="#">Milly Augustine</a>
                                                            <span>You have 8 common friends</span>
                                                        </div>
                                                        <div className="media-right">
                                                            <button className="button icon-button is-solid grey-button raised">
                                                                <i data-feather="user-plus"></i>
                                                            </button>
                                                            <button className="button icon-button is-solid grey-button raised">
                                                                <i data-feather="user-minus"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                    {/* Friend request  */}
                                                    <div className="media">
                                                        <figure className="media-left">
                                                            <p className="image">
                                                                <img data-demo-src="assets/img/avatars/elise.jpg" alt="" />
                                                            </p>
                                                        </figure>
                                                        <div className="media-content">
                                                            <span>You are now friends with <a href="#">Elise Walker</a>. Check her <a href="#">profile</a>.</span>
                                                        </div>
                                                        <div className="media-right">
                                                            <div className="added-icon">
                                                                <i data-feather="tag"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* Friend request  */}
                                                    <div className="media">
                                                        <figure className="media-left">
                                                            <p className="image">
                                                                <img data-demo-src="assets/img/avatars/edward.jpeg" alt="" />
                                                            </p>
                                                        </figure>
                                                        <div className="media-content">
                                                            <span>You are now friends with <a href="#">Edward Mayers</a>. Check his <a href="#">profile</a>.</span>
                                                        </div>
                                                        <div className="media-right">
                                                            <div className="added-icon">
                                                                <i data-feather="tag"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="nav-drop-footer">
                                                    <a href="#">View All</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="navbar-item is-icon drop-trigger">
                                        <a className="icon-link" href="javascript:void(0);">
                                            {/* <i data-feather="bell"></i> */}
                                            <AiOutlineBell style={{ color: '#999' }} />
                                            <span className="indicator"></span>
                                        </a>

                                        <div className="nav-drop">
                                            <div className="inner">
                                                <div className="nav-drop-header">
                                                    <span>Notifications</span>
                                                    <a href="#">
                                                        <i data-feather="bell"></i>
                                                    </a>
                                                </div>
                                                <div className="nav-drop-body is-notifications">
                                                    {/* <!-- Notification --> */}
                                                    <div className="media">
                                                        <figure className="media-left">
                                                            <p className="image">
                                                                <img data-demo-src="assets/img/avatars/david.jpg" alt="" />
                                                            </p>
                                                        </figure>
                                                        <div className="media-content">
                                                            <span><a href="#">David Kim</a> commented on <a href="#">your post</a>.</span>
                                                            <span className="time">30 minutes ago</span>
                                                        </div>
                                                        <div className="media-right">
                                                            <div className="added-icon">
                                                                <i data-feather="message-square"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* <!-- Notification --> */}
                                                    <div className="media">
                                                        <figure className="media-left">
                                                            <p className="image">
                                                                <img data-demo-src="assets/img/avatars/daniel.jpg" alt="" />
                                                            </p>
                                                        </figure>
                                                        <div className="media-content">
                                                            <span><a href="#">Daniel Wellington</a> liked your <a href="#">profile.</a></span>
                                                            <span className="time">43 minutes ago</span>
                                                        </div>
                                                        <div className="media-right">
                                                            <div className="added-icon">
                                                                <i data-feather="heart"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* <!-- Notification --> */}
                                                    <div className="media">
                                                        <figure className="media-left">
                                                            <p className="image">
                                                                <img data-demo-src="assets/img/avatars/stella.jpg" alt="" />
                                                            </p>
                                                        </figure>
                                                        <div className="media-content">
                                                            <span><a href="#">Stella Bergmann</a> shared a <a href="#">New video</a> on your wall.</span>
                                                            <span className="time">Yesterday</span>
                                                        </div>
                                                        <div className="media-right">
                                                            <div className="added-icon">
                                                                <i data-feather="youtube"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* <!-- Notification --> */}
                                                    <div className="media">
                                                        <figure className="media-left">
                                                            <p className="image">
                                                                <img data-demo-src="assets/img/avatars/elise.jpg" alt="" />
                                                            </p>
                                                        </figure>
                                                        <div className="media-content">
                                                            <span><a href="#">Elise Walker</a> shared an <a href="#">Image</a> with you an 2 other people.</span>
                                                            <span className="time">2 days ago</span>
                                                        </div>
                                                        <div className="media-right">
                                                            <div className="added-icon">
                                                                <i data-feather="image"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="nav-drop-footer">
                                                    <a href="#">View All</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="navbar-item is-icon drop-trigger">
                                        <a className="icon-link is-active" href="javascript:void(0);">
                                            {/* <i data-feather="mail"></i> */}
                                            <AiOutlineMail style={{ color: '#fff' }} />
                                            <span className="indicator"></span>
                                        </a>

                                        <div className="nav-drop">
                                            <div className="inner">
                                                <div className="nav-drop-header">
                                                    <span>Messages</span>
                                                    <a href="messages-inbox.html">Inbox</a>
                                                </div>
                                                <div className="nav-drop-body is-friend-requests">
                                                    {/* <!-- Message --> */}
                                                    <div className="media">
                                                        <figure className="media-left">
                                                            <p className="image">
                                                                <img data-demo-src="assets/img/avatars/nelly.png" data-user-popover="9" alt="" />
                                                            </p>
                                                        </figure>
                                                        <div className="media-content">
                                                            <a href="#">Nelly Schwartz</a>
                                                            <span>I think we should meet near the Starbucks so we can get...</span>
                                                            <span className="time">Yesterday</span>
                                                        </div>
                                                        <div className="media-right is-centered">
                                                            <div className="added-icon">
                                                                <i data-feather="message-square"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* <!-- Message --> */}
                                                    <div className="media">
                                                        <figure className="media-left">
                                                            <p className="image">
                                                                <img data-demo-src="assets/img/avatars/edward.jpeg" data-user-popover="5" alt="" />
                                                            </p>
                                                        </figure>
                                                        <div className="media-content">
                                                            <a href="#">Edward Mayers</a>
                                                            <span>That was a real pleasure seeing you last time we really should...</span>
                                                            <span className="time">last week</span>
                                                        </div>
                                                        <div className="media-right is-centered">
                                                            <div className="added-icon">
                                                                <i data-feather="message-square"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* <!-- Message --> */}
                                                    <div className="media">
                                                        <figure className="media-left">
                                                            <p className="image">
                                                                <img data-demo-src="assets/img/avatars/dan.jpg" data-user-popover="1" alt="" />
                                                            </p>
                                                        </figure>
                                                        <div className="media-content">
                                                            <a href="#">Dan Walker</a>
                                                            <span>Hey there, would it be possible to borrow your bicycle, i really need...</span>
                                                            <span className="time">Jun 03 2018</span>
                                                        </div>
                                                        <div className="media-right is-centered">
                                                            <div className="added-icon">
                                                                <i data-feather="message-square"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="nav-drop-footer">
                                                    <a href="#">Clear All</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="navbar-item is-icon open-chat">
                                        <a className="icon-link is-primary" href="javascript:void(0);">
                                            <i data-feather="message-square"></i>
                                            <FiMessageSquare style={{ color: '#999' }} />
                                            <span className="indicator"></span>
                                        </a>
                                    </div>

                                    <div id="explorer-trigger" className="navbar-item is-icon">
                                        <a className="icon-link is-primary">
                                            <CgMenuGridR style={{ color: '#999' }} />
                                            {/* <i className="mdi mdi-apps"></i> */}
                                        </a>
                                    </div>
                                </div>
                                {/* <!-- slide itmes --> */}
                            </div>

                        </div>
                    </div>
                </div>
                <nav className="navbar mobile-navbar is-hidden-desktop" aria-label="main navigation">
                    {/* <!-- Brand --> */}
                    <div className="navbar-brand">
                        <a className="navbar-item" href="index.html">
                            <img className="light-image" src="assets/img/logo/friendkit-bold.svg" alt="" />
                            <img className="dark-image" src="assets/img/logo/friendkit-white.svg" alt="" />
                        </a>

                        <div className="navbar-item is-icon drop-trigger">
                            <a className="icon-link is-friends" href="javascript:void(0);">
                                <i data-feather="heart"></i>
                                <span className="indicator"></span>
                            </a>

                            <div className="nav-drop">
                                <div className="inner">
                                    <div className="nav-drop-header">
                                        <span>Friend requests</span>
                                        <a href="#">
                                            <i data-feather="search"></i>
                                        </a>
                                    </div>
                                    <div className="nav-drop-body is-friend-requests">
                                        {/* <!-- Friend request --> */}
                                        <div className="media">
                                            <figure className="media-left">
                                                <p className="image">
                                                    <img data-demo-src="assets/img/avatars/bobby.jpg" alt="" />
                                                </p>
                                            </figure>
                                            <div className="media-content">
                                                <a href="#">Bobby Brown</a>
                                                <span>Najeel verwick is a common friend</span>
                                            </div>
                                            <div className="media-right">
                                                <button className="button icon-button is-solid grey-button raised">
                                                    <i data-feather="user-plus"></i>
                                                </button>
                                                <button className="button icon-button is-solid grey-button raised">
                                                    <i data-feather="user-minus"></i>
                                                </button>
                                            </div>
                                        </div>
                                        {/* <!-- Friend request --> */}
                                        <div className="media">
                                            <figure className="media-left">
                                                <p className="image">
                                                    <img data-demo-src="assets/img/avatars/dan.jpg" alt="" />
                                                </p>
                                            </figure>
                                            <div className="media-content">
                                                <a href="#">Dan Walker</a>
                                                <span>You have 4 common friends</span>
                                            </div>
                                            <div className="media-right">
                                                <button className="button icon-button is-solid grey-button raised">
                                                    <i data-feather="user-plus"></i>
                                                </button>
                                                <button className="button icon-button is-solid grey-button raised">
                                                    <i data-feather="user-minus"></i>
                                                </button>
                                            </div>
                                        </div>
                                        {/* <!-- Friend request --> */}
                                        <div className="media">
                                            <figure className="media-left">
                                                <p className="image">
                                                    <img data-demo-src="assets/img/avatars/nelly.png" alt="" />
                                                </p>
                                            </figure>
                                            <div className="media-content">
                                                <span>You are now friends with <a href="#">Nelly Schwartz</a>. Check her <a href="#">profile</a>.</span>
                                            </div>
                                            <div className="media-right">
                                                <div className="added-icon">
                                                    <i data-feather="tag"></i>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- Friend request --> */}
                                        <div className="media">
                                            <figure className="media-left">
                                                <p className="image">
                                                    <img data-demo-src="assets/img/avatars/milly.jpg" alt="" />
                                                </p>
                                            </figure>
                                            <div className="media-content">
                                                <a href="#">Milly Augustine</a>
                                                <span>You have 8 common friends</span>
                                            </div>
                                            <div className="media-right">
                                                <button className="button icon-button is-solid grey-button raised">
                                                    <i data-feather="user-plus"></i>
                                                </button>
                                                <button className="button icon-button is-solid grey-button raised">
                                                    <i data-feather="user-minus"></i>
                                                </button>
                                            </div>
                                        </div>
                                        {/* <!-- Friend request --> */}
                                        <div className="media">
                                            <figure className="media-left">
                                                <p className="image">
                                                    <img data-demo-src="assets/img/avatars/elise.jpg" alt="" />
                                                </p>
                                            </figure>
                                            <div className="media-content">
                                                <span>You are now friends with <a href="#">Elise Walker</a>. Check her <a href="#">profile</a>.</span>
                                            </div>
                                            <div className="media-right">
                                                <div className="added-icon">
                                                    <i data-feather="tag"></i>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- Friend request --> */}
                                        <div className="media">
                                            <figure className="media-left">
                                                <p className="image">
                                                    <img data-demo-src="assets/img/avatars/edward.jpeg" alt="" />
                                                </p>
                                            </figure>
                                            <div className="media-content">
                                                <span>You are now friends with <a href="#">Edward Mayers</a>. Check his <a href="#">profile</a>.</span>
                                            </div>
                                            <div className="media-right">
                                                <div className="added-icon">
                                                    <i data-feather="tag"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="nav-drop-footer">
                                        <a href="#">View All</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="navbar-item is-icon drop-trigger">
                            <a className="icon-link" href="javascript:void(0);">
                                <i data-feather="bell"></i>
                                <span className="indicator"></span>
                            </a>

                            <div className="nav-drop">
                                <div className="inner">
                                    <div className="nav-drop-header">
                                        <span>Notifications</span>
                                        <a href="#">
                                            <i data-feather="bell"></i>
                                        </a>
                                    </div>
                                    <div className="nav-drop-body is-notifications">
                                        {/* <!-- Notification --> */}
                                        <div className="media">
                                            <figure className="media-left">
                                                <p className="image">
                                                    <img data-demo-src="assets/img/avatars/david.jpg" alt="" />
                                                </p>
                                            </figure>
                                            <div className="media-content">
                                                <span><a href="#">David Kim</a> commented on <a href="#">your post</a>.</span>
                                                <span className="time">30 minutes ago</span>
                                            </div>
                                            <div className="media-right">
                                                <div className="added-icon">
                                                    <i data-feather="message-square"></i>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- Notification --> */}
                                        <div className="media">
                                            <figure className="media-left">
                                                <p className="image">
                                                    <img data-demo-src="assets/img/avatars/daniel.jpg" alt="" />
                                                </p>
                                            </figure>
                                            <div className="media-content">
                                                <span><a href="#">Daniel Wellington</a> liked your <a href="#">profile.</a></span>
                                                <span className="time">43 minutes ago</span>
                                            </div>
                                            <div className="media-right">
                                                <div className="added-icon">
                                                    <i data-feather="heart"></i>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- Notification --> */}
                                        <div className="media">
                                            <figure className="media-left">
                                                <p className="image">
                                                    <img data-demo-src="assets/img/avatars/stella.jpg" alt="" />
                                                </p>
                                            </figure>
                                            <div className="media-content">
                                                <span><a href="#">Stella Bergmann</a> shared a <a href="#">New video</a> on your wall.</span>
                                                <span className="time">Yesterday</span>
                                            </div>
                                            <div className="media-right">
                                                <div className="added-icon">
                                                    <i data-feather="youtube"></i>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- Notification --> */}
                                        <div className="media">
                                            <figure className="media-left">
                                                <p className="image">
                                                    <img data-demo-src="assets/img/avatars/elise.jpg" alt="" />
                                                </p>
                                            </figure>
                                            <div className="media-content">
                                                <span><a href="#">Elise Walker</a> shared an <a href="#">Image</a> with you an 2 other people.</span>
                                                <span className="time">2 days ago</span>
                                            </div>
                                            <div className="media-right">
                                                <div className="added-icon">
                                                    <i data-feather="image"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="nav-drop-footer">
                                        <a href="#">View All</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="navbar-item is-icon drop-trigger">
                            <a className="icon-link is-active" href="javascript:void(0);">
                                <i data-feather="mail"></i>
                                <span className="indicator"></span>
                            </a>

                            <div className="nav-drop">
                                <div className="inner">
                                    <div className="nav-drop-header">
                                        <span>Messages</span>
                                        <a href="messages-inbox.html">Inbox</a>
                                    </div>
                                    <div className="nav-drop-body is-friend-requests">
                                        {/* <!-- Message --> */}
                                        <div className="media">
                                            <figure className="media-left">
                                                <p className="image">
                                                    <img data-demo-src="assets/img/avatars/nelly.png" data-user-popover="9" alt="" />
                                                </p>
                                            </figure>
                                            <div className="media-content">
                                                <a href="#">Nelly Schwartz</a>
                                                <span>I think we should meet near the Starbucks so we can get...</span>
                                                <span className="time">Yesterday</span>
                                            </div>
                                            <div className="media-right is-centered">
                                                <div className="added-icon">
                                                    <i data-feather="message-square"></i>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- Message --> */}
                                        <div className="media">
                                            <figure className="media-left">
                                                <p className="image">
                                                    <img data-demo-src="assets/img/avatars/edward.jpeg" data-user-popover="5" alt="" />
                                                </p>
                                            </figure>
                                            <div className="media-content">
                                                <a href="#">Edward Mayers</a>
                                                <span>That was a real pleasure seeing you last time we really should...</span>
                                                <span className="time">last week</span>
                                            </div>
                                            <div className="media-right is-centered">
                                                <div className="added-icon">
                                                    <i data-feather="message-square"></i>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- Message --> */}
                                        <div className="media">
                                            <figure className="media-left">
                                                <p className="image">
                                                    <img data-demo-src="assets/img/avatars/dan.jpg" data-user-popover="1" alt="" />
                                                </p>
                                            </figure>
                                            <div className="media-content">
                                                <a href="#">Dan Walker</a>
                                                <span>Hey there, would it be possible to borrow your bicycle, i really need...</span>
                                                <span className="time">Jun 03 2018</span>
                                            </div>
                                            <div className="media-right is-centered">
                                                <div className="added-icon">
                                                    <i data-feather="message-square"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="nav-drop-footer">
                                        <a href="#">Clear All</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="mobile-explorer-trigger" className="navbar-item is-icon">
                            <a className="icon-link is-primary">
                                <i className="mdi mdi-apps"></i>
                            </a>
                        </div>

                        <div id="open-mobile-search" className="navbar-item is-icon">
                            <a className="icon-link is-primary" href="javascript:void(0);">
                                <i data-feather="search"></i>
                            </a>
                        </div>

                        {/* <!-- Mobile menu toggler icon --> */}
                        <div className="navbar-burger">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                    {/* <!-- Navbar mobile menu --> */}
                    <div className="navbar-menu">
                        {/* <!-- Account --> */}
                        <div className="navbar-item has-dropdown is-active">
                            <a href="profile-main.html" className="navbar-link">
                                <img data-demo-src="assets/img/avatars/jenna.png" alt="" />
                                <span className="is-heading">Jenna Davis</span>
                            </a>

                            {/* <!-- Mobile Dropdown --> */}
                            <div className="navbar-dropdown">
                                <a href="index.html" className="navbar-item is-flex is-mobile-icon">
                                    <span><i data-feather="activity"></i>Feed</span>
                                    <span className="menu-badge">87</span>
                                </a>
                                <a href="videos-home-v2.html" className="navbar-item is-flex is-mobile-icon">
                                    <span><i data-feather="play-circle"></i>Watch</span>
                                    <span className="menu-badge">21</span>
                                </a>
                                <a href="profile-friends.html" className="navbar-item is-flex is-mobile-icon">
                                    <span><i data-feather="heart"></i>Friend Requests</span>
                                    <span className="menu-badge">3</span>
                                </a>
                                <a href="profile-main.html" className="navbar-item is-flex is-mobile-icon">
                                    <span><i data-feather="user"></i>Profile</span>
                                </a>
                                <a href="ecommerce-cart.html" className="navbar-item is-flex is-mobile-icon">
                                    <span><i data-feather="shopping-cart"></i>Cart</span>
                                    <span className="menu-badge">3</span>
                                </a>
                                <a href="#" className="navbar-item is-flex is-mobile-icon">
                                    <span><i data-feather="bookmark"></i>Bookmarks</span>
                                </a>
                            </div>
                        </div>

                        {/* <!-- More --> */}
                        <div className="navbar-item has-dropdown">
                            <a href="settings.html" className="navbar-link">
                                <i data-feather="user"></i>
                                <span className="is-heading">Account</span>
                            </a>

                            {/* <!-- Mobile Dropdown --> */}
                            <div className="navbar-dropdown">
                                <a href="#" className="navbar-item is-flex is-mobile-icon">
                                    <span><i data-feather="life-buoy"></i>Support</span>
                                </a>
                                <a href="settings.html" className="navbar-item is-flex is-mobile-icon">
                                    <span><i data-feather="settings"></i>Settings</span>
                                </a>
                                <a href="#" className="navbar-item is-flex is-mobile-icon">
                                    <span><i data-feather="log-out"></i>Logout</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Search */}
                    <div className="mobile-search is-hidden">
                        <div className="control">
                            <input id="tipue_drop_input_mobile" className="input" placeholder="Search..." />
                            <div className="form-icon">
                                <i data-feather="search"></i>
                            </div>
                            <div className="close-icon">
                                <i data-feather="x"></i>
                            </div>
                            <div id="tipue_drop_content_mobile" className="tipue-drop-content"></div>
                        </div>
                    </div>
                </nav>
            </section>
        </>
    )
}

export default Header