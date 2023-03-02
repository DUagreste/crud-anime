import React,{ Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';


export class Navigation extends Component {

    render(){
        return(
            <Navbar bg="dark" expand="lg">
                <NavbarToggle aria-controls="basic-navbar-nav"/>
                <NavbarCollapse id="basic-navbar-nav">
                <Nav>
                <NavLink className="d-inline p-2 bg-dark text-white" to="/">
                    Home
                </NavLink>
                <NavLink className="d-inline p-2 bg-dark text-white" to="/anime">
                    Animes
                </NavLink>
                <NavLink className="d-inline p-2 bg-dark text-white" to="/manga">
                    Mangás
                </NavLink>
                </Nav>
                </NavbarCollapse>
            </Navbar>
        )
    }
}