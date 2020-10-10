import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CreateSubscriber from "../components/create-subscriber.component";
import EditSubscriber from "../components//edit-subscriber.component";
import SubscriberList from "../components//subscriber-list.component";
import AppContent from "../components/AppContent";
import Header from "../components/Header";
import logo from "../logo.svg";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

class App extends React.Component {
  public render() {
    return (
      <Router>
        <Header
          pageTitle="React CRUD Client with Orchard Core OIDC"
          logoSrc={logo}
        />
        <br></br>
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <AppContent />
            </div>
          </div>
        </div>
        <Container>
        <Row>
          <Col md={12}>
            <div className="wrapper">
              <Switch>
                <Route exact path='/' component={CreateSubscriber} />
                <Route path="/create-subscriber" component={CreateSubscriber} />
                <Route path="/edit-subscriber/:id" component={EditSubscriber} />
                <Route path="/subscriber-list" component={SubscriberList} />
              </Switch>
            </div>
          </Col>
        </Row>
        </Container>        
      </Router>
    );
  }
}

export default App;
