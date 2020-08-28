import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {Container} from "react-bootstrap";


import 'bootstrap/dist/css/bootstrap.min.css';
import Projects from "./models/Projects";
import Contacts from "./models/Contacts";
import About from "./models/About";
import LinkedIn from "./social/LinkedIn";
import Git from "./social/Git";
import FaceBook from "./social/FaceBook";
import Certificates from "./models/Certificates";
import Header from "./models/Navbar.js"

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Header/>
                <Container>
                    <Route exact path="/home" component={About}/>
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
            </BrowserRouter>
        );
    }
}

export default App;
