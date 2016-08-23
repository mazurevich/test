class LoginController {
  constructor() {
    this.user = {};
  }

  login(user){
    console.log('checking user');
    if (this.form.$valid)
      console.log('submitting user', user);
    else
      return false;
  }
}

export default LoginController;
