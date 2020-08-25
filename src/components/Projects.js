import React from 'react';
import {CardColumns} from "react-bootstrap";
import ProjectModel from "../models/project-model";


export default function Projects(props) {
    return (
        // Render a ProjectModel component
        <>
            <br/>
            <h1>Projects</h1>
            <br/>
            <CardColumns>
                <ProjectModel
                    image={require('../img/logo.ilcarro.svg')}
                    title="Car Rental Service"
                    text="Project - Car Rental Service:
- Developed controllers, services logic and data structure for storing in DB on Server side.
- Participating in design and development front-end side.
- Tools (Swagger, Java, Spring Security, Spring Data, Spring Cloud, MongoDB, JavaScript, CSS, React, Bootstrap)
" footer="Developed at Optisor LTD"
                    link="/icarro"
                />
                <ProjectModel
                    image={require('../img/learn-JavaScript.jpg')}
                    title="Javascriot  self-study project"
                    text="Contains the entire core of javascript with examples, solutions and explanations. Also examples for test questions! Good luck!"
                    footer="Included all JavaScript features and examples of interview tasks"
                    link="/gitJS"
                />
            </CardColumns>
        </>
    )
}
