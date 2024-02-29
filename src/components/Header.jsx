import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavDropdown } from 'react-bootstrap';

const Header = () => {
    let user = JSON.parse(localStorage.getItem("user-info"));
    
    function logout() {
        localStorage.clear();
        window.location.href = "/signup";
    }
    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary" bg="light-dark" variant="light-dark">
                <Container>
                    <Navbar.Brand href="/">E-Commerce Dashboard</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                        {
                            localStorage.getItem("user-info") ?
                            <React.Fragment>
                                <Nav.Link href="/add">Add product</Nav.Link>
                                <Nav.Link href="/update">Update</Nav.Link>
                                <Nav.Link href="/">Product List</Nav.Link>
                                <Nav.Link href="/search">Search Product</Nav.Link>
                            </React.Fragment>
                            :
                            <React.Fragment>
                                <Nav.Link href="/signup">Signup</Nav.Link>
                                <Nav.Link href="/signin">Sign in</Nav.Link>
                            </React.Fragment>
                            
                        }
                        </Nav>
                        {localStorage.getItem("user-info") ?
                        <Nav>
                        <NavDropdown title={user && user.name}>
                            <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
                            <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
                        </NavDropdown>
                        </Nav>
                        : null
                        }
                            </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header
