import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../logo.png';
import './Header.css';


const Header = () => {
    return (
        <Navbar collapseOnSelect expand="md" className='py-3'>
            <Container>
                <Link to='/'><Navbar.Brand><img src={logo} alt="" /></Navbar.Brand></Link>
                <h4>BUZZ QUIZ</h4>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ms-auto">
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to='/'>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/statistics'>Statistics</Link>
                        </li>     
                        <li className="nav-item">
                            <Link className="nav-link" to='/blog'>Blog</Link>
                        </li>
                    </ul>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;