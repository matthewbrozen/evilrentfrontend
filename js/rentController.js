angular.module('EvilrentApp')
    .controller('RentController', RentController);

//injecting http
RentController.$inject = ['$http'];
// main function
function RentController($http) {
  var self = this;
  self.newRent={};
  self.addRent= addRent;



  //post report method need to store _id from response
  function addRent(){
   $http
     .post('https://evilrentapi.herokuapp.com/rents', self.newRent)
     .success(function(response){
       console.log(response);
   });
  }
}
