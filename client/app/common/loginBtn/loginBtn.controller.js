class LoginBtnController {
  constructor(user) {
    this.user = user.getUser();
    console.log(user);
    this.name = 'loginBtn';
  }

  logIn() {
    this.user.isSignedIn = true;
  }
  
  logOut() {
    this.user.isSignedIn = false;
  }
}

LoginBtnController.$inject = ['User']
export default LoginBtnController;