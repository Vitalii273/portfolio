import React from 'react';
import {CardColumns} from "react-bootstrap";
import Certificate from "../components/certificate";


export default function Certificates(props) {
    return (
        // Render a Project component
        <>
            <br/>
            <h1>Certificates</h1>
            <br/>
            <CardColumns>
                <Certificate
                    image={require('../img/udemy-expressJS-cert.jpg')}
                    title="Express.JS"
                    text="Udemy online academy"
                />
                <Certificate
                    image={require('../img/tel-ran-cert.jpeg')}
                    title="Full Stack Developer Certificate"
                    text="Tel-Ran Education Center of Computer Science"
                />
                <Certificate
                    image={require('../img/linkedin-cert.jpg')}
                    title="Building Modern Projects with React"
                    text="LinkedIn Certificate, React+Redux"
                />
            </CardColumns>
        </>
    )
}

