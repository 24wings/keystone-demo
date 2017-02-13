angular.module('myApp.controllers')
    .controller('IndexCtrl', function($http, $scope) {
        $scope.top5PetLifes = [];
        $http.get('/petLife/top5').then(function(rtn) {
            $scope.top5PetLifes = rtn.data;
        });

    });