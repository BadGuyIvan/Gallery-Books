import React, { Component } from "react";
import {Navbar, Nav, NavItem} from "react-bootstrap";
import { withRouter } from 'react-router';

import { Link } from 'react-router-dom'
class Menu extends Component {
    render(){
        return (
            <Navbar collapseOnSelect>
                <Navbar.Header>
                <Navbar.Brand>
                    <Link to="/">Movies</Link>
                </Navbar.Brand>
                <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem onClick={ e => this.props.history.push("/home")}>Home</NavItem>
                        <NavItem onClick={ e => this.props.history.push("/movies")}>Movies</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default withRouter(Menu);