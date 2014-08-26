'use strict';

/**
 * @ngdoc function
 * @name taskBlocsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the taskBlocsApp
 */


// {{todo.age}}
//




angular.module('taskBlocsApp')
  .controller('MainCtrl',['$scope', function ($scope) {
    $scope.todos = [];
    setInterval(function () {
      //loop over $scope.todos and set age (every minute right now)
    }, 60000);
    $scope.addTodo = function() {
      var creationDate = moment();
//      var expirationDate = moment().add(7, 'days');
      var today = moment('08-25-2014', 'MM-DD-YYYY');
      var age = today.diff(creationDate, 'days');

      //$scope.todo.name = $scope.title;
      //$scope.todo.age = age;

      $scope.todos.sort(function (a, b) {
        return a.i > b.i;
      });

      $scope.todos.push(
      {
        name: $scope.title,
        creationDate: creationDate,
        age: age
      }
      );
      $scope.title = '';
 //
      $scope.todos.each(function(item) {
        item.age = today.diff(item.creationDate, 'days');
      });

    };
    $scope.removeTodo = function (index) {
      $scope.todos.splice(index, 1);
    };
  }]);


