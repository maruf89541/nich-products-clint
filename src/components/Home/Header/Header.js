
import React from 'react';
import { Button, Col, Container, Nav, Navbar, Row, Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hook/useAuth';
import './Header.css'



const Header = () => {
    const { user, logout } = useAuth();
    return (
        <div>
            <Navbar collapseOnSelect style={{ backgroundColor: 'white' }} expand="lg" bg="#061a3a" variant="darkvb ">
                <Container>
                    <Navbar.Brand href="#home" className="bg-white pe-2 border rounded"><img style={{ height: '35px', width: '150px' }} src="https://i.ibb.co/LtB9qW2/logo-color.webp" alt=""></img></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end ms-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/services">service</Nav.Link>
                        {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
                        {
                            user?.email &&
                            <Navbar.Text className="signin-text">
                                <Nav.Link as={Link} to="myOrder">{user.displayName}</Nav.Link>
                            </Navbar.Text>}


                        {user?.email ?
                            <Stack direction="horizontal" gap={2}>
                                < Nav.Link as={Link} to="/aDashBoard" className="d-inline" ><Button className="regular-btn" variant="outline-secondary">Admin<i class="fas fa-angle-right"></i></Button>{' '}</Nav.Link>
                                < Nav.Link className="d-inline"><Button className="d-inline" onClick={logout} variant="outline-secondary">Log out</Button>{' '}</Nav.Link>
                            </Stack> :
                            <Nav.Link as={Link} to="/login"><Button variant="outline-secondary">Login</Button>{' '}</Nav.Link>

                        }


                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    );
};

export default Header;