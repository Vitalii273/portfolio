import React from "react"
import {Card} from "react-bootstrap";


export default function Certificate(props) {
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
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
        </Card>
    )
}

