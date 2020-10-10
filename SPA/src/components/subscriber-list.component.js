import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import SubscriberTableRow from './SubscriberTableRow';
import { AuthService } from '../services/AuthService';
import { ApiService } from '../services/ApiService';
import { Constants } from '../helpers/Constants';

export default class SubscriberList extends Component {
  authService;
  apiService;
  token = '';

  constructor(props) {
    super(props)
    this.state = {
      subscribers: []
    };
    this.authService = new AuthService()
    this.apiService = new ApiService()
  }

  componentDidMount() {
    this.apiService.callApi().then(res => {
      console.log('data', res.data.data.subscriber)

    })
    this.authService.getUser().then(user => {
      this.token = user.access_token
      console.log('token', this.token)
      const headers = {
        Accept: 'application/json',
        Authorization: 'Bearer ' + this.token
      };

    })

    axios.get(Constants.apiRoot + '?query={subscriber {createdUtc, displayText email firstName lastName modifiedUtc publishedUtc contentItemId }}')
      .then(res => {
        console.log('data', res)
        this.setState({
          subscribers: res.data.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  DataTable() {
    return this.state.subscribers.map((res, i) => {
      return <SubscriberTableRow obj={res} key={i} />;
    });
  }


  render() {
    return (<div className="table-wrapper">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {this.DataTable()}
        </tbody>
      </Table>
    </div>);
  }
}