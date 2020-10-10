import { Log, User, UserManager } from 'oidc-client';

import { Constants } from '../helpers/Constants';

export class AuthService {
  public userManager: UserManager;

  constructor() {
    const settings = {
      authority: Constants.stsAuthority,
      client_id: Constants.clientId,
      redirect_uri: `${Constants.clientRoot}signin-callback.html`,
      silent_redirect_uri: `${Constants.clientRoot}silent-renew.html`,
      // tslint:disable-next-line:object-literal-sort-keys
      post_logout_redirect_uri: `${Constants.clientRoot}`,
      response_type: 'code',
      scope: Constants.clientScope
    };
    this.userManager = new UserManager(settings);

    Log.logger = console;
    Log.level = Log.INFO;
  }

  public getUser(): Promise<User | null> {
    return this.userManager.getUser();
  }

  async isLoggedIn() {
   const user = await this.userManager.getUser();
    const userCurrent = !!user && !user.expired;
    return userCurrent;

  }

  public login(): Promise<void> {
    return this.userManager.signinRedirect();
  }

  public renewToken(): Promise<User> {
    return this.userManager.signinSilent();
  }

  public logout(): Promise<void> {
    return this.userManager.signoutRedirect();
  }
}
