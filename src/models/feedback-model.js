import React from "react"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// import CustomizedSnackbars from "../components/SnackBar";

class FeedbackModel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: ''
        }
    }

    messageSent() {
        document.getElementById("contact-form").innerHTML = "Your for has been successful submitted!";
    }

    resetForm() {
        this.setState({name: '', email: '', message: ''})
    }


    render() {
        return (
            <div className="Feed-Back-Form">
                <br/>
                <Row className="justify-content-md-center">
                    <Col md="auto">
                        <h5>Want to get in touch with me? Fill out the form below to send me a message and I will try to
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
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
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
                this.messageSent()
                this.resetForm()
            } else if (response.status === 'fail') {
                alert("Message failed to send.")
            }
        })
    }
}

export default FeedbackModel;