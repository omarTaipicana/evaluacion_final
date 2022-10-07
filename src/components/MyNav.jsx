import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { Navbar, Container, Nav, Offcanvas } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import ShopingCard from './ShopingCard';

const MyNav = () => {

    const navigate = useNavigate()

    const logOut = () => {
        localStorage.setItem("token", "")
        localStorage.setItem("name", "")
        navigate("/login")
    }

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <>
            <Navbar bg="primary" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#home" to="/" as={Link} >E-commerce</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#" to="/" as={Link}>Products</Nav.Link>
                            <Nav.Link href="#purchases" to="/purchases" as={Link}>Purchases</Nav.Link>
                            <Nav.Link onClick={handleShow} >Shopping cart</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#login" to="/login" as={Link}>{(localStorage.getItem("name")) ? "Bienvenido: " + localStorage.getItem("name") : "login"}</Nav.Link>
                            <Nav.Link onClick={logOut}>logg out</Nav.Link>
                            <Nav.Link onClick={logOut} href="#sigin" to="/sigin" as={Link}>Sig in</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <ShopingCard show={show} handleClose={handleClose} />
        </>
    );
};

export default MyNav;