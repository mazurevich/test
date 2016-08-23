class NavbarController {
  constructor() {
    this.isToggled = false;
  }

  toggleMenu(){
    this.isToggled = !this.isToggled;
  }

}

export default NavbarController;
