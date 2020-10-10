import * as React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
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
      </Router>
    );
  }
}

// class App extends React.Component {
//   public render() {
//     return (
//       <div className="App">
//         <Header pageTitle="React CRUD Client with Orchard Core OIDC" logoSrc={logo} />
//         <div className="container-fluid">
//           <div className="row">
//             <div className="col">
//               <AppContent />
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

export default App;
