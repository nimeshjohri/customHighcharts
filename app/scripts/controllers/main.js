'use strict';

/**
 * @ngdoc function
 * @name customApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the customApp
 */
angular.module('customApp')
  .controller('MainCtrl',function ($scope) {
    $scope.Val=[];
    $scope.Point=[];
    $scope.addPoints=function(){
    $scope.Point.push(parseFloat($scope.names));
    $scope.names = '';
    }
  	
  	$scope.add=function()
  	{
  	$scope.Val.push({text:$scope.txtval,done:false});
  	$scope.txtval = '';
    }
});

