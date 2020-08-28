import React from 'react';
import {CardColumns} from "react-bootstrap";
import Certificate from "../components/certificate";
import styles from '../css/models.module.css'
import Footer from "../components/footer";


export default function Certificates() {
    return (
        // Render a Project component
        <>
            <br/>
            <h2 className={styles.h2}>Certificates</h2>
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
            <Footer/>
        </>
    )
}

