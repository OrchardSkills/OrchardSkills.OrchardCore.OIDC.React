import axios from 'axios';
import { Constants } from '../helpers/Constants';
import { AuthService } from './AuthService';

export class ApiService {
  private authService: AuthService;

  constructor() {
    this.authService = new AuthService();
  }

  public callApi(): Promise<any> {
    return this.authService.getUser().then(user => {
      if (user && user.access_token) {
        return this._callApi(user.access_token).catch(error => {
          if (error.response.status === 401) {
            return this.authService.renewToken().then(renewedUser => {
              return this._callApi(renewedUser.access_token);
            });
          }
          throw error;
        });
      } else if (user) {
        return this.authService.renewToken().then(renewedUser => {
          return this._callApi(renewedUser.access_token);
        });
      } else {
        throw new Error('user is not logged in');
      }
    });
  }

  private _callApi(token: string) {
    const headers = {
      Accept: 'application/json',
      Authorization: 'Bearer ' + token
    };

    return axios.get(Constants.apiRoot + '?query={subscriber {createdUtc, displayText email firstName lastName modifiedUtc publishedUtc contentItemId }}', { headers }).then(res => {
      return res.data.data.subscriber
    });
  }

  public getSubscriber(id: string): Promise<any> {
    return this.authService.getUser().then(user => {
      if (user && user.access_token) {
        return this._getSubscriber(id, user.access_token).catch(error => {
          if (error.response.status === 401) {
            return this.authService.renewToken().then(renewedUser => {
              return this._getSubscriber(id, renewedUser.access_token);
            });
          }
          throw error;
        });
      } else if (user) {
        return this.authService.renewToken().then(renewedUser => {
          return this._getSubscriber(id, renewedUser.access_token);
        });
      } else {
        throw new Error('user is not logged in');
      }
    });
  }

  private _getSubscriber(id: string, token: string) {
    const headers = {
      Accept: 'application/json',
      Authorization: 'Bearer ' + token
    };

    return axios.get(Constants.apiContent + '/' + id, { headers });
  }

  public updateSubscriber(id: string, firstName: string, lastName: string, email: string): Promise<any> {
    return this.authService.getUser().then(user => {
      if (user && user.access_token) {
        return this._updateSubscriber(id, firstName, lastName, email, user.access_token).catch(error => {
          if (error.response.status === 401) {
            return this.authService.renewToken().then(renewedUser => {
              return this._updateSubscriber(id, firstName, lastName, email, renewedUser.access_token);
            });
          }
          throw error;
        });
      } else if (user) {
        return this.authService.renewToken().then(renewedUser => {
          return this._updateSubscriber(id, firstName, lastName, email, renewedUser.access_token);
        });
      } else {
        throw new Error('user is not logged in');
      }
    });
  }

  private _updateSubscriber(id: string, firstName: string, lastName: string, email: string, token: string) {
    const headers = {
      Accept: 'application/json',
      Authorization: 'Bearer ' + token
    };

    const body = {
      ContentItemId: id,
      DisplayText: firstName + ' ' + lastName,
      TitlePart: {
        Title: firstName + ' ' + lastName
      },
      Subscriber: {
        FirstName: {
          Text: firstName
        },
        LastName: {
          Text: lastName
        },
        Email: {
          Text: email
        }
      },
      ContainedPart: {
        ListContentItemId: '462m1ps5kkzkp2k5da5pfhh2ww',
        Order: 0
      }
    }

    return axios.post(Constants.apiContent, body, { headers });
  }

  public deleteSubscriber(id: string): Promise<any> {
    return this.authService.getUser().then(user => {
      if (user && user.access_token) {
        return this._deleteSubscriber(id, user.access_token).catch(error => {
          if (error.response.status === 401) {
            return this.authService.renewToken().then(renewedUser => {
              return this._deleteSubscriber(id, renewedUser.access_token);
            });
          }
          throw error;
        });
      } else if (user) {
        return this.authService.renewToken().then(renewedUser => {
          return this._deleteSubscriber(id, renewedUser.access_token);
        });
      } else {
        throw new Error('user is not logged in');
      }
    });
  }

  private _deleteSubscriber(id: string, token: string) {
    const headers = {
      Accept: 'application/json',
      Authorization: 'Bearer ' + token
    };

    return axios.delete(Constants.apiContent + '/' + id, { headers });
  }  

  public createSubscriber(firstName: string, lastName: string, email: string): Promise<any> {
    return this.authService.getUser().then(user => {
      if (user && user.access_token) {
        return this._createSubscriber(firstName, lastName, email, user.access_token).catch(error => {
          if (error.response.status === 401) {
            return this.authService.renewToken().then(renewedUser => {
              return this._createSubscriber(firstName, lastName, email, renewedUser.access_token);
            });
          }
          throw error;
        });
      } else if (user) {
        return this.authService.renewToken().then(renewedUser => {
          return this._createSubscriber(firstName, lastName, email, renewedUser.access_token);
        });
      } else {
        throw new Error('user is not logged in');
      }
    });
  }

  private _createSubscriber(firstName: string, lastName: string, email: string, token: string) {
    const headers = {
      Accept: 'application/json',
      Authorization: 'Bearer ' + token
    };

    const body = {
      ContentType: 'Subscriber',
      Latest: true,
      Published: true,
      Owner: 'sales',
      Author: 'sales',
      DisplayText: firstName + ' ' + lastName,
      TitlePart: {
        Title: firstName + ' ' + lastName
      },
      Subscriber: {
        FirstName: {
          Text: firstName
        },
        LastName: {
          Text: lastName
        },
        Email: {
          Text: email
        }
      },
      ContainedPart: {
        ListContentItemId: '462m1ps5kkzkp2k5da5pfhh2ww',
        Order: 0
      }
    }

    return axios.post(Constants.apiContent, body, { headers });
  }  

}
