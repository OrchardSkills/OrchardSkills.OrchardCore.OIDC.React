import * as React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
export interface IHeaderProps {
  pageTitle: string;
  logoSrc: any;
  authUser: boolean
}

export default function Header(props: IHeaderProps) {
  return (
    <header className="App-header">
      <img src={props.logoSrc} className="App-logo" alt="logo" />
      <h1 className="App-title">{props.pageTitle}</h1>
      <Navbar bg="dark" variant="dark">
        {props.authUser ? (
          <Container>
            <Navbar.Brand>
              <Link to={"/create-subscriber"} className="nav-link">
                Subscribers
            </Link>
            </Navbar.Brand>
            <Nav className="justify-content-end">
              <Nav>
                <Link to={"/create-subscriber"} className="nav-link">
                  Create
              </Link>
                <Nav>
                  <Link to={"/subscriber-list"} className="nav-link">
                    List
                </Link>
                </Nav>
              </Nav>
            </Nav>
          </Container>
        ) : (
            <div className="text-center">
              Please login to enable CRUD operations.
            </div>
          )}

      </Navbar>
    </header>
  );
}
