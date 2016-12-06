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
       document.getElementById('rso').append("<h1>It looks like your property is rent controlled, follow the prompts and we will let you know more!</h1>");
     }
     else{
       document.getElementById('rso').append("<h1>We're not sure if you're propety is rent controlled, follow the prompts and we will get back to you after more research!</h1>");
     }
   });
  }
}
