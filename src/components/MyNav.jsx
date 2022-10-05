import React from 'react';
import { Navbar, Container, Nav } from "react-bootstrap"
import { Link } from "react-router-dom"

const MyNav = () => {
    return (
        // <Navbar bg="primary" variant="dark">
        //     <Container>
        //         <Navbar.Brand href="#home" to="/" as={Link} >E-commerce viejo taipi</Navbar.Brand>
        //         <Nav className="me-auto">
        //             <Nav.Link href="#login" to="/login" as={Link}>Login</Nav.Link>
        //             <Nav.Link href="#products" to="/products" as={Link}>Products</Nav.Link>
        //             <Nav.Link href="#shopping-cart" to="/" as={Link}>shopping cart</Nav.Link>
        //         </Nav>
        //     </Container>
        // </Navbar>

        <Navbar bg="primary" variant="dark" expand="lg">
            <Container>
            <Navbar.Brand href="#home" to="/" as={Link} >E-commerce viejo taipi</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#login" to="/login" as={Link}>Login</Nav.Link>
                        <Nav.Link href="#products" to="/products" as={Link}>Products</Nav.Link>
                        <Nav.Link href="#shopping-cart" to="/" as={Link}>shopping cart</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default MyNav;