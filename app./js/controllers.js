'use strict';

/* Controllers */
var chemPTEApp = angular.module('chemPTEApp', []);

chemPTEApp.controller('ElementListCtrl', function($scope, $http) {
  $http.get('elements/jquery.pte.json').success(function(data) {
    $scope.elements = data;
  });

  $scope.orderProp = 'ATOMIC_NUMBER';
});