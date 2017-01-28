'use strict';

function manipulateExistingDOM()
{
  $('style').remove();
  document.title = 'FooBarDOM'
  $('div').remove();

  var $appDiv = $('<div/>').appendTo('body');
  $appDiv.attr('id', 'mainDiv');
  $appDiv.attr('ng-app', 'myApp');
  $appDiv.height('100%');
  $appDiv.width('100%');

  return $appDiv;
}

function loadAngularUI()
{
  var $appDiv = manipulateExistingDOM();

  $('<span/>Type in the box and be amazed!</span>').appendTo($appDiv);

  var $ctrlDiv = $('<div/>').appendTo($appDiv);
  $ctrlDiv.attr('ng-controller', 'myCtrl');

  var $input = $('<input/>').appendTo($ctrlDiv);
  $input.attr('ng-model', 'name');
  $input.attr('ng-keyup', 'nameChanged()');

  $('<h1>Computed result: {{greeting}}</h1>').appendTo($ctrlDiv);
  $('<h2>Input value: {{name}}</h2>').appendTo($ctrlDiv);
}

loadAngularUI();
angular.module('myApp', [])
  .controller('myCtrl', function($scope) {
    $scope.nameChanged = function () {
      $scope.greeting = 'You typed: ' + $scope.name;
    };
  });