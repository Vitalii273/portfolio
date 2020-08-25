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
                    title="Express JS Certificate"
                    text="https://udemy-certificate.s3.amazonaws.com/image/UC-deead0b3-850b-486d-a94e-bb9bfe4f826f.jpg"
                />
                <CertModel
                    image={require('../img/tel-ran-cert.jpeg')}
                    title="Full Stack Developer Certificate"
                    text="Tel-Ran Education Center of Computer Science"

                />
                <CertModel
                    image={require('../img/linkedin-cert.jpg')}
                    title="LinkedIn Certificate, React+Redux"
                    text="Building Modern Projects with React."

                />
            </CardColumns>
        </>
    )
}

