import React from 'react';
import {Card} from "react-bootstrap";
import {Link} from 'react-router-dom';


export default function ProjectModel(props) {

    return (
        <Card>
            <Card.Header style={{background: "grey"}}>
                <Card.Img variant="top" src={props.image}/>
            </Card.Header>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.text}
                </Card.Text>
                <Link to={props.link}>Project Page</Link>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">{props.footer}</small>
            </Card.Footer>
        </Card>
    )
}

