class MyButtonController {
  constructor($http) {
    const t = this;
    $http({
      type: 'GET',
      url: 'https://blockchain.info/ru/q/getdifficulty'
    }).then((res)=> {
      console.log(res);
      t.difficulty = res.data;
    }
    , (res)=> {
      console.log('error getting difficulty');
    })
    this.text = 'Here I am';
  }
}

MyButtonController.$inject = ['$http'];

export default MyButtonController;
