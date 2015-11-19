define([
  'angular',
  './other'
],
function (angular, other) {
  'use strict';

  var module = angular.module('grafana.services');

  module.factory('TestDatasource', function($q) {

    function TestDatasource(datasource) {
      console.log(other);
    }

    TestDatasource.prototype.testDatasource = function() {
      return $q.when({status: "success", message: 'OK', title: "OK" });
    };

    return TestDatasource;
  });
});
