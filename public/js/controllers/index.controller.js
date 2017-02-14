angular.module('myApp.controllers')
    .controller('IndexCtrl', function($http, $scope) {
        $scope.top5PetLifes = [];
        $scope.top3PetInformations = [];
        $http.get('/petLife/top5').then(function(rtn) {
            $scope.top5PetLifes = rtn.data;
        });

        $http.get('/petInformation/top3').then(function(rtn) {
            $scope.top3PetInformations = rtn.data;
        });
    });