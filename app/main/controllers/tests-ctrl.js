'use strict';
angular.module('main')
  .controller('TestsCtrl', function ($log, Auth, $state, Principal, LoginService, Tezt, TeztItem, Answer) {
    var vm = this;

    loadAll();

    function loadAll () {
      Tezt.query({},
        onSuccess, onError);
      function onSuccess(data, headers) {
        vm.tezts = data;
      }
      function onError(error) {
        AlertService.error(error.data.message);
      }
    }

    vm.redirectToTest = redirectToTest;

    function redirectToTest(tezt) {
      Tezt.get({ id: tezt.id },
      onSuccess, onError);

      function onSuccess(data, headers) {
        localStorage.setItem('currentTest', JSON.stringify(data));
        $state.go("test");
      }

      function onError(error) {
        AlertService.error(error.data.message);
      }

    }

  });
