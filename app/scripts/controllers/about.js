'use strict';

/**
 * @ngdoc function
 * @name taskBlocsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the taskBlocsApp
 */
angular.module('taskBlocsApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
