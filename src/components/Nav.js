import {React, useState, useReducer} from 'react';
import logo from './images/Logo.svg';
import hamburger from './images/icon _hamburger menu.svg';
import basket from './images/basket.svg';
import { Routes, Route, Link } from 'react-router-dom';
import Menu from "./Menu";
import Hero from './Hero';
import Highlights from './Highlights';
import About from './About';
import Testimonials from './Testimonials';
import Reservations from './Reservations';
import OrderOnline from './OrderOnline';
import Login from './login';
import { Link as LinkScroll } from 'react-scroll/modules';
import ScrollToTop from './ScrollToTop';
import { HashLink } from 'react-router-hash-link';
import {fetchAPI, submitAPI} from './ReserveApi'
import ReservationConfirmed from './ReservationConfirmed';

function Nav() {
    const [isNavExpanded, setIsNavExpanded] = useState(false);
    function handleNavOnClick() {
        setIsNavExpanded(!isNavExpanded);
    }

    /* https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js */

   function updateTimes(availableTimes, date) {
    if (date !== null ) return fetchAPI(date);
    return availableTimes;
    };

    const initializeTimes = [];

    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes);

    function submitForm(formdata) {
        if (submitAPI(formdata) === true) {
            window.location.href = '/reservation-confirmed';
        }

    }

    return (
        <header className="main">
            <nav className='navigation'>
                <div className={isNavExpanded ? "navigation expanded" : "navigation"}>
                <button className='hamburger'><img src={hamburger} alt="hamburger menu" onClick={handleNavOnClick}></img></button>
                <LinkScroll to="hero" spy={true} smooth={true} offset={-200}><Link to="/" className="nav-item"><button className='Logo'><img src={logo} alt="Little Lemon Logo" /></button></Link></LinkScroll>
                <Link to="/order-online" className='basket'><button className='basket-button'><img src={basket} alt="basket"></img></button></Link>
                    <ul><li><LinkScroll to="hero" spy={true} smooth={true} offset={-200}><Link to="/" className="nav-item" onClick={handleNavOnClick}>HOME</Link></LinkScroll></li>
                    <li><LinkScroll to="about" smooth={true}><HashLink smooth to="/#about" className="nav-item" onClick={handleNavOnClick}>ABOUT</HashLink></LinkScroll></li>
                    <li><Link to="/menu" className="nav-item" onClick={handleNavOnClick}>MENU</Link></li>
                    <li><Link to="/reservations" className="nav-item" onClick={handleNavOnClick}>RESERVATIONS</Link></li>
                    <li><Link to="/order-online" className="nav-item" onClick={handleNavOnClick}>ORDER ONLINE</Link></li>
                    <li><Link to="/login" className="nav-item" onClick={handleNavOnClick}>LOGIN</Link></li>
            </ul></div></nav>
        <ScrollToTop />
        <Routes>
            <Route path='/' element={<><Hero /><Highlights /><About /><Testimonials /></>}></Route>
            <Route path="/menu" element={<Menu />}></Route>
            <Route path="/reservations" element={<Reservations availableTimes={availableTimes} updateTimes={dispatch} submitForm={submitForm} />}></Route>
            <Route path="/order-online" element={<OrderOnline />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/reservation-confirmed" element={<ReservationConfirmed />}></Route>
        </Routes>
        </header>
    );
}

export default Nav;