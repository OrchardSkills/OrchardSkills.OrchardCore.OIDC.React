import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import { AuthService } from '../services/AuthService';
import { ApiService } from '../services/ApiService';

export default class EditSubscriber extends Component {

  constructor(props) {
    super(props)

    this.authService = new AuthService()
    this.apiService = new ApiService()

    this.onChangeSubscriberFirstName = this.onChangeSubscriberFirstName.bind(this);
    this.onChangeSubscriberLastName = this.onChangeSubscriberLastName.bind(this);
    this.onChangeSubscriberEmail = this.onChangeSubscriberEmail.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // State
    this.state = {
      firstName: '',
      lastName: '',
      email: ''
    }
  }

  componentDidMount() {
    this.apiService.getSubscriber(this.props.match.params.id).then(res => {
      console.log('data', res)
         this.setState({
           firstName: res.data.Subscriber.FirstName.Text,
           lastName: res.data.Subscriber.LastName.Text,
           email: res.data.Subscriber.Email.Text
         });
    })
    .catch((error) => {
      console.log(error);
    })
    this.authService.getUser().then(user => {
      this.token = user.access_token
      console.log('token', this.token)
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

    this.apiService.updateSubscriber(this.props.match.params.id, subscriberObject.firstName, subscriberObject.lastName, subscriberObject.email);

    // Redirect to Subscriber List 
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
