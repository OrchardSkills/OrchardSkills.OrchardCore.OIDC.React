import * as React from 'react';

import { ToastContainer, toast } from 'react-toastify';
import { ApiService } from '../services/ApiService';
import { AuthService } from '../services/AuthService';

import AuthContent from './AuthContent';
import Buttons from './Buttons';

export default class AppContent extends React.Component<any, any> {
  public authService: AuthService;
  public apiService: ApiService;
  private shouldCancel: boolean;
  private authUser: boolean = false;
  constructor(props: any) {
    super(props);

    this.authService = new AuthService();
    this.apiService = new ApiService();
    this.shouldCancel = false;

  }

  public componentDidMount() {
    this.getUser();
    this.isLogedIn()
  }
  public isLogedIn = async () => {
   const auth = await this.authService.isLoggedIn();
   this.authUser = auth
    this.setState({
      authUser: auth
    });
    console.log('auth', auth);
  }
  public login = () => {
    this.authService.login();
  };

  public callApi = () => {
    this.apiService
      .callApi()
      .then(data => {
        this.setState({ api: data.data });
        toast.success('Api return successfully data, check in section - Api response');
      })
      .catch(error => {
        toast.error(error);
      });
  };

  public componentWillUnmount() {
    this.shouldCancel = true;
  }

  public renewToken = () => {
    this.authService
      .renewToken()
      .then(user => {
        toast.success('Token has been sucessfully renewed. :-)');
        this.getUser();
      })
      .catch(error => {
        toast.error(error);
      });
  };

  public logout = () => {
    this.authService.logout();
  };

  public getUser = () => {
    this.authService.getUser().then(user => {
      if (user) {
        return
      } else {
        toast.info('You are not logged in.');
      }

      if (!this.shouldCancel) {
        this.setState({ user });
      }
    });
  };

  public render() {
    return (
      <>
        <ToastContainer />

        <div className="row">
      <div className="col-md-12 text-center" style={{ marginTop: '30px' }}>
        {this.authUser ? (
          <button className="btn btn-dark btn-logout" style={{ margin: '10px' }} onClick={this.logout} >
          Logout
        </button>
        ) : (
          <button className="btn btn-primary btn-login" style={{ margin: '10px' }} onClick={this.login} >
          Login
          </button>
        )}

        
      </div>
    </div>
      </>
    );
  }
}

// Used for testing
// <AuthContent api={this.state.api} user={this.state.user} />