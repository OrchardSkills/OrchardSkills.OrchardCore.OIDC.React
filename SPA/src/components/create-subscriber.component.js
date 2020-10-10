import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class CreateSubscriber extends Component {

  constructor(props) {
    super(props)

    // Setting up functions
    this.onChangeSubscriberFirstName = this.onChangeSubscriberFirstName.bind(this);
    this.onChangeSubscriberLastName = this.onChangeSSubscriberLastName.bind(this);
    this.onChangeSubscriberEmail = this.onChangeSubscriberEmail.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      firstname: '',
      lastname: '',
      email: ''
    }
  }

  onChangeSubscriberFirstName(e) {
    this.setState({ firstname: e.target.value })
  }

  onChangeSubscriberLastName(e) {
    this.setState({ lastname: e.target.value })
  }

  onChangeSubscriberEmail(e) {
    this.setState({ email: e.target.value })
  }


  onSubmit(e) {
    e.preventDefault()

    const studentObject = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email
    };

    axios.post('http://localhost:3000/subscriber/create-subscriber', studentObject)
      .then(res => console.log(res.data));

    this.setState({
      firstname: '',
      lastname: '',
      email: ''
    });
  }

  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="FirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" value={this.state.firstname} onChange={this.onChangeSubscriberFirstName} />
        </Form.Group>

        <Form.Group controlId="LastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" value={this.state.lastname} onChange={this.onChangeSubscriberLastName} />
        </Form.Group>

        <Form.Group controlId="Email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" value={this.state.email} onChange={this.onChangeSubscriberEmail} />
        </Form.Group>

        <Button variant="danger" size="lg" block="block" type="submit">
          Create Subscriber
        </Button>
      </Form>
    </div>);
  }
}
