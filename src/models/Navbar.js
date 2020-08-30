import React from 'react'
import {Link, withRouter} from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'


import {SiLinkedin} from "react-icons/si/index";
import {AiFillGithub} from 'react-icons/ai';
import {ImFacebook2} from 'react-icons/im';
import styles from '../css/models.module.css'

function Header(props) {
    const pathname = props.location.pathname
    return (
        <Navbar className={styles.bdNavbar} collapseOnSelect expand="lg" variant="dark">
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Navbar.Brand as={Link} to="/" className={styles.navLink}>
                   Home
                </Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link className={styles.navLink} as={Link} to="/about" active={pathname.startsWith('/about')}>
                        About
                    </Nav.Link>
                    <Nav.Link className={styles.navLink}as={Link} to="/projects" active={pathname.startsWith('/projects')}>Projects</Nav.Link>
                    <Nav.Link as={Link} to="/media" active={pathname.startsWith('/media')}>Media</Nav.Link>
                    <Nav.Link as={Link} to="/contacts" active={pathname.startsWith('/contacts')}>Contacts</Nav.Link>
                </Nav>
                <Nav className="end" activeKey="/home">
                    <Nav.Link as={Link} to="/faceBook"><ImFacebook2/></Nav.Link>
                    <Nav.Link as={Link} to="/linkedIn"><SiLinkedin/></Nav.Link>
                    <Nav.Link as={Link} to="/git"><AiFillGithub/></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default withRouter(Header)   // updates on every new page