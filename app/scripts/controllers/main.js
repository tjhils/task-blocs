'use strict';

/**
 * @ngdoc function
 * @name taskBlocsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the taskBlocsApp
 */

angular.module('taskBlocsApp')
  .controller('MainCtrl', function ($scope) {
    $scope.todos = [];

    $scope.addTodo = function() {
      var expirationDate = 'Test';
      $scope.todos.push($scope.todo);
      $scope.todo.expirationdate = expirationDate;
      console.log($scope.todo.expirationdate);
      $scope.todo = '';
    };
    $scope.removeTodo = function (index) {
      $scope.todos.splice(index, 1);
    };
  });