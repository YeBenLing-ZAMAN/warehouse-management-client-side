import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const handleSignOut = () => {
        signOut(auth);
    }
    const handleSignUp = ()=>{
        navigate('/signup');
    }

    return (
        <div className='sticky-top'>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">Food Factory</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="home">Home</Nav.Link>
                            <Nav.Link href="#storeItems">Storage</Nav.Link>
                            <Nav.Link as={Link} to="blog">Blogs</Nav.Link>
                            
                        </Nav>
                        <Nav>
                            {
                                user ?
                                    <>
                                        <Nav.Link as={Link} to="additem">Add Item</Nav.Link>
                                        <Nav.Link as={Link} to="Manageinventories">Manage Inventories</Nav.Link>
                                        <Nav.Link as={Link} to="myitems">My items</Nav.Link>
                                        <button className='btn btn-danger rounded rounded-pill text-white text-decoration-none' onClick={handleSignOut}>sign out</button>
                                    </>
                                    :
                                    <>
                                        <Nav.Link as={Link} to="login" eventKey={2} >Log In</Nav.Link>
                                        <button className='btn btn-danger rounded rounded-pill text-white text-decoration-none' onClick={handleSignUp}>sign Up</button>
                                    </>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;