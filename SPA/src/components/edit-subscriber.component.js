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
      firstname: '',
      lastname: '',
      email: ''
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3000/subscriber/edit-subscriber/' + this.props.match.params.id)
      .then(res => {
        this.setState({
          firstname: res.data.firstname,
          lastname: res.data.lastname,
          email: res.data.email
        });
      })
      .catch((error) => {
        console.log(error);
      })
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
      name: this.state.name,
      email: this.state.email,
      rollno: this.state.rollno
    };

    axios.put('http://localhost:3000/subscriber/update-subscriber/' + this.props.match.params.id, studentObject)
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
          Update Subscriber
        </Button>
      </Form>
    </div>);
  }
}
