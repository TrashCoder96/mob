'use strict';
angular.module('main')
  .controller('TestsCtrl', function ($log, Auth, $state, Principal, LoginService, Tezt) {
    var vm = this;
    vm.tests = Tezt.get();

    vm.redirectToTest = redirectToTest;

    function redirectToTest() {

    }

  });
