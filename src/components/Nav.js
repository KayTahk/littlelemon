import {React, useState} from 'react';
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


function Nav() {
    const [isNavExpanded, setIsNavExpanded] = useState(false);


    return (
        <header className="main">
            <nav className='navigation'>
                <div className={isNavExpanded ? "navigation expanded" : "navigation"}>
                <button className='hamburger'><img src={hamburger} alt="hamburger menu" onClick={() => {setIsNavExpanded(!isNavExpanded)}}></img></button>
                <Link to="/" className="nav-item"><button className='Logo'><img src={logo} alt="Little Lemon Logo" /></button></Link>
                <Link to="/order-online" className='basket'><button className='basket-button'><img src={basket} alt="basket"></img></button></Link>
                    <ul><li><Link to="/" className="nav-item" onClick={() => {setIsNavExpanded(!isNavExpanded)}}>HOME</Link></li>
                    <li><LinkScroll to="about" smooth={true}><Link to="/about" className="nav-item" onClick={() => {setIsNavExpanded(!isNavExpanded)}}>ABOUT</Link></LinkScroll></li>
                    <li><Link to="/menu" className="nav-item" onClick={() => {setIsNavExpanded(!isNavExpanded)}}>MENU</Link></li>
                    <li><Link to="/reservations" className="nav-item" onClick={() => {setIsNavExpanded(!isNavExpanded)}}>RESERVATIONS</Link></li>
                    <li><Link to="/order-online" className="nav-item" onClick={() => {setIsNavExpanded(!isNavExpanded)}}>ORDER ONLINE</Link></li>
                    <li><Link to="/login" className="nav-item" onClick={() => {setIsNavExpanded(!isNavExpanded)}}>LOGIN</Link></li>
            </ul></div></nav>
        <Routes>
            <Route path='/' element={<><Hero /><Highlights /><About /><Testimonials /></>}></Route>
            <Route path='/about' element={<><Hero /><Highlights /><About /><Testimonials /></>}></Route>
            <Route path="/menu" element={<Menu />}></Route>
            <Route path="/reservations" element={<Reservations />}></Route>
            <Route path="/order-online" element={<OrderOnline />}></Route>
            <Route path="/login" element={<Login />}></Route>
        </Routes>
        </header>
    );
}

export default Nav;