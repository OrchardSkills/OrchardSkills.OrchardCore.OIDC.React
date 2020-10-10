import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import SubscriberTableRow from './SubscriberTableRow';


export default class SubscriberList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      subscribers: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3000/subscriber/')
      .then(res => {
        this.setState({
          subscribers: res.data
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