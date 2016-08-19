class HomeController {

  constructor() {
    this.previewText = 'Hello! ';
    this.isDescriptionHidden = true;
    this.featuresList = [{
      name: 'Feature1',
      description: 'bla!',
      imgSrc: 'http://placekitten.com/100/100'
    }, {
      name: 'Feature2',
      description: 'bla bla!',
      imgSrc: 'http://placekitten.com/100/100'
    }, {
      name: 'Feature3',
      description: 'bla bla bla!',
      imgSrc: 'http://placekitten.com/100/100'
    }, {
      name: 'Feature4',
      description: 'bla bla bla bla!',
      imgSrc: 'http://placekitten.com/100/100'
    }, ]
  }

  $onInit() {
    console.log('init home Ctrl');
  }
  
  addPerson() {
    const ctrl = this;
    this.featuresList.push({
      name: ctrl.name,
      description: ctrl.description
    })
    ctrl.name = ctrl.description = '';
  }
  showDescr() {
    this.isDescriptionHidden = false;
  }
  hideDescr() {
    this.isDescriptionHidden = true;
  }
}

export default HomeController;