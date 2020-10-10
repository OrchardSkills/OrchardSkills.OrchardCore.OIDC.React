import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

export default class SubscriberTableRow extends Component {

    constructor(props) {
        super(props);
        this.deleteSubscriber = this.deleteSubscriber.bind(this);
    }

    deleteStudent() {
        axios.delete('http://localhost:3000/subscriber/delete-subscriber/' + this.props.obj._id)
            .then((res) => {
                console.log('Subscriber successfully deleted!')
            }).catch((error) => {
                console.log(error)
            })
    }

    render() {
        return (
            <tr>
                <td>{this.props.obj.firstName}</td>
                <td>{this.props.obj.lastName}</td>
                <td>{this.props.obj.email}</td>
                <td>
                    <Link className="edit-link" to={"/edit-subscriber/" + this.props.obj._id}>
                        Edit
                    </Link>
                    <Button onClick={this.deleteSubscriber} size="sm" variant="danger">Delete</Button>
                </td>
            </tr>
        );
    }
}