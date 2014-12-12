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
    $scope.Point={};
     $scope.rPoint=[];
     $scope.Point.data =[];
    $scope.addPoints=function(){
      $scope.rPoint=[];
    $scope.rPoint.push(parseFloat($scope.names));
    $scope.names = '';
   $scope.rPoint;
    for(var i=0;i<$scope.rPoint.length;i++){

        $scope.Point.data.push($scope.rPoint[i]);
         }       
    }
	
  	$scope.add=function()
  	{
  	$scope.Val.push({text:$scope.txtval,done:false});
  	$scope.txtval = '';
    }
    });

