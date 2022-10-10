import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logo.png';
import './Header.css';


const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container">
                <Link className="navbar-brand" to='/'><img src={logo} alt="" /></Link>
                <h4>BUZZ QUIZ</h4>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
                        </li>
                        
                        <li className="nav-item">
                        <Link className="nav-link" to='/statistics'>Statistics</Link>
                        </li>
                        
                        <li className="nav-item">
                        <Link className="nav-link" to='/blog'>Blog</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;