import React, { Component } from "react";
import { Navbar, Nav, Container } from 'react-bootstrap';
import epicGamesLogo from './images/logotipo.png';
import Vector from './images/Vector.svg';
import './header.css'; // Подключаем файл стилей для дополнительного оформления

export default class Header extends Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="md" variant="dark" className="custom-navbar">
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            src={epicGamesLogo}
                            height="40"
                            width="40"
                            className="d-inline-block align-top logo"
                            alt="Epic Games"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-between">
                        <Nav>
                            <Nav.Link href="/Games">STORE</Nav.Link>
                            <Nav.Link href="/giveaway">GIVEAWAY</Nav.Link>
                            <Nav.Link href="/sale">SALE!</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="/profile">
                                <img
                                    src={Vector}
                                    height="20"
                                    width="16"
                                    className="vector"
                                    alt="Profile"
                                />
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}
