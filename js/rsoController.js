angular.module('EvilrentApp')
    .controller('RsoController', RsoController);

//injecting http
RsoController.$inject = ['$http'];
// main function
function RsoController($http) {
  var self = this;
  self.newRso={};
  self.addRso= addRso;



  //post report method need to store _id from response
  function addRso(){
   $http
     .post('https://evilrentapi.herokuapp.com/rsos', self.newRso)
     .success(function(response){
       console.log(response);
       if(response=="RSO"){
       var rso = response;
       document.getElementById('rso').append("Hallelujah! Your apartment is rent-controlled and 3.0% is the legal max the landlord can increase your rent. But there’s always a catch! The devil is in the details. Does he pay for any of the following utilities?");
     }
     else{
       document.getElementById('rso').append("We're not sure if you're propety is rent controlled, follow the prompts and we will get back to you after more research!");
     }
   });
  }
}
