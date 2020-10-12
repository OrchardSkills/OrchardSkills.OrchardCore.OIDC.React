import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { AuthService } from '../services/AuthService';
import { ApiService } from '../services/ApiService';

export default class SubscriberTableRow extends Component {

    constructor(props) {
        super(props);
        this.authService = new AuthService()
        this.apiService = new ApiService()        
        this.deleteSubscriber = this.deleteSubscriber.bind(this);
        this.state = {
            subscribers: []
          };
    }

    deleteSubscriber() {
        this.apiService.deleteSubscriber(this.props.obj.contentItemId).then(() => {
            window.location.reload()
        });
    }

    render() {
        return (
            <tr>
                <td>{this.props.obj.firstName}</td>
                <td>{this.props.obj.lastName}</td>
                <td>{this.props.obj.email}</td>
                <td>
                    <Link className="edit-link" to={"/edit-subscriber/" + this.props.obj.contentItemId}>
                    &nbsp;&nbsp;Edit&nbsp;&nbsp;
                    </Link>
                    <Button onClick={this.deleteSubscriber} size="sm" variant="danger">Delete</Button>
                </td>
            </tr>
        );
    }
}