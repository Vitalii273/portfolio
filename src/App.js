import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {Container, Nav, Navbar} from "react-bootstrap";
import {SiLinkedin} from "react-icons/si/index";
import {AiFillGithub} from 'react-icons/ai';
import {ImFacebook2} from 'react-icons/im';

import 'bootstrap/dist/css/bootstrap.min.css';
import Projects from "./models/Projects";
import Contacts from "./models/Contacts";
import About from "./models/About";
import LinkedIn from "./social/LinkedIn";
import Git from "./social/Git";
import FaceBook from "./social/FaceBook";
import Certificates from "./models/Certificates";
import Footer from "./components/footer";

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand href="/">About</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/projects">Projects</Nav.Link>
                            <Nav.Link href="/media">Media</Nav.Link>
                            <Nav.Link href="/contacts">Contacts</Nav.Link>
                        </Nav>
                        <Nav className="end" activeKey="/home">
                            <Nav.Link href="/faceBook"><ImFacebook2/></Nav.Link>
                            <Nav.Link href="/linkedIn"><SiLinkedin/></Nav.Link>
                            <Nav.Link href="/git"><AiFillGithub/></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Container>
                    <Route exact path="/" component={About}/>
                    <Route path="/projects" component={Projects}/>
                    <Route path="/contacts" component={Contacts}/>
                    <Route path="/media" component={Certificates}/>
                    <Route path="/facebook" component={FaceBook}/>
                    <Route path="/linkedIn" component={LinkedIn}/>
                    <Route path="/git" component={Git}/>
                    <Route path='/icarro' component={() => {
                        window.location.href = 'https://ilcarro-dev-v1.firebaseapp.com/';
                        return null;
                    }}/>
                    <Route path='/linkedIn' component={() => {
                        window.location.href = 'https://www.linkedin.com/in/vitalii-adler';
                        return null;
                    }}/>
                    <Route path='/git' component={() => {
                        window.location.href = 'https://github.com/Vitalii273';
                        return null;
                    }}/>
                    <Route path='/gitJS' component={() => {
                        window.location.href = 'https://github.com/Vitalii273/JS_Inteview';
                        return null;
                    }}/>
                    <Route path='/faceBook' component={() => {
                        window.location.href = 'https://www.facebook.com/adler.vitalii';
                        return null;
                    }}/>
                </Container>
                <Footer/>
            </BrowserRouter>
        );
    }
}

export default App;
