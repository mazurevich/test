class LoginBtnController {
  constructor(User) {
    "ngInject";
    this.user = User.getUser();
  }

  logIn() {
    this.user.isSignedIn = true;
  }

  logOut() {
    this.user.isSignedIn = false;
  }
}

export default LoginBtnController;
