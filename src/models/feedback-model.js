import React from "react"
import {Row, Button, Col} from "react-bootstrap";

class FeedbackModel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            fullForm: true,
        }
    }

    resetForm() {
        this.setState({name: '', email: '', message: '', fullForm: false})
    }


    render() {
        return (
            this.state.fullForm ?
                <div className="Feed-Back-Form">
                    <br/>
                    <Row className="justify-content-md-center">
                        <Col md="auto">
                            <h5>Want to get in touch with me? Fill out the form below to send me a message and I
                                will try to
                                get back to you within 24 hours!</h5>
                        </Col>
                    </Row>
                    <br/>
                    <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" className="form-control" value={this.state.name}
                                   onChange={this.onNameChange.bind(this)}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" aria-describedby="emailHelp"
                                   value={this.state.email} onChange={this.onEmailChange.bind(this)}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea className="form-control" rows="5" value={this.state.message}
                                      onChange={this.onMessageChange.bind(this)}/>
                        </div>
                        {/*<CustomizedSnackbars/>*/}
                        <Button variant="outline-secondary" type="submit">Submit</Button>
                    </form>
                </div>
                :
                <div className="submitted">
                    <br/>
                    <h3>Your for has been successful submitted!</h3>
                </div>
        )
    }

    onNameChange(event) {
        this.setState({name: event.target.value})
    }

    onEmailChange(event) {
        this.setState({email: event.target.value})
    }

    onMessageChange(event) {
        this.setState({message: event.target.value})
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state);

        fetch('http://localhost:3002/send', {
            method: "POST",
            body: JSON.stringify(this.state),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }).then(
            (response) => (response.json())
        ).then((response) => {
            if (response.status === 'success') {
                this.resetForm()
            } else if (response.status === 'fail') {
                alert("Message failed to send.")
            }
        })
    }
}

export default FeedbackModel;