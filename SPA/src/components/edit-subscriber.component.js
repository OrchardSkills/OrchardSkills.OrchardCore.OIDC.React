import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class EditSubscriber extends Component {

  constructor(props) {
    super(props)

    this.onChangeSubscriberFirstName = this.onChangeSubscriberFirstName.bind(this);
    this.onChangeSubscriberLastName = this.onChangeSubscriberLastName.bind(this);
    this.onChangeSubscriberEmail = this.onChangeStudentEmail.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // State
    this.state = {
      firstName: '',
      lastName: '',
      email: ''
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3000/subscriber/edit-subscriber/' + this.props.match.params.id)
      .then(res => {
        this.setState({
          firstName: res.data.firstName,
          lastName: res.data.lastName,
          email: res.data.email
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  onChangeSubscriberFirstName(e) {
    this.setState({ firstName: e.target.value })
  }

  onChangeSubscriberLastName(e) {
    this.setState({ lastName: e.target.value })
  }

  onChangeSubscriberEmail(e) {
    this.setState({ email: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()

    const subscriberObject = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email
      
    };

    axios.put('http://localhost:3000/subscriber/update-subscriber/' + this.props.match.params.id, subscriberObject)
      .then((res) => {
        console.log(res.data)
        console.log('Subscriber successfully updated')
      }).catch((error) => {
        console.log(error)
      })

    // Redirect to Student List 
    this.props.history.push('/subscriber-list')
  }


  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="FirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" value={this.state.firstName} onChange={this.onChangeSubscriberFirstName} />
        </Form.Group>

        <Form.Group controlId="LastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" value={this.state.lastName} onChange={this.onChangeSubscriberLastName} />
        </Form.Group>

        <Form.Group controlId="Email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" value={this.state.email} onChange={this.onChangeSubscriberEmail} />
        </Form.Group>

        <Button variant="danger" size="lg" block="block" type="submit">
          Update Subscriber
        </Button>
      </Form>
    </div>);
  }
}
