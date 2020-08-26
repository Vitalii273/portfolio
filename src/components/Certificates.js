import React from 'react';
import {CardColumns} from "react-bootstrap";
import CertModel from "../models/cert-model";

export default function Certificates(props) {
    return (
        // Render a ProjectModel component
        <>
            <br/>
            <h1>Certificates</h1>
            <br/>
            <CardColumns>
                <CertModel
                    image={require('../img/udemy-expressJS-cert.jpg')}
                    title="Express.JS"
                    text="Udemy online academy"
                />
                <CertModel
                    image={require('../img/tel-ran-cert.jpeg')}
                    title="Full Stack Developer Certificate"
                    text="Tel-Ran Education Center of Computer Science"
                />
                <CertModel
                    image={require('../img/linkedin-cert.jpg')}
                    title="Building Modern Projects with React"
                    text="LinkedIn Certificate, React+Redux"
                />
            </CardColumns>
        </>
    )
}

