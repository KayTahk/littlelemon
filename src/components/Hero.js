import { Routes, Route, Link } from 'react-router-dom';
import Menu from './Menu';

function Hero() {
    return (
        <>
        <div className='hero'>
            <div className="hero-text">
                <header>
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                </header>
                <article>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</article>
            </div>
                <Link to="/reservations" className="reserve-button"><button>Reserve a Table</button></Link>
                <Routes>
                    <Route path="/reservations" element={<Menu />}></Route>
                </Routes>
        </div>
        </>
    );
}

export default Hero;