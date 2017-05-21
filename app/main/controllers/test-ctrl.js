'use strict';
angular.module('main')
  .controller('TestCtrl', function ($log, Auth, $state, Principal, LoginService, Tezt, TeztItem, Answer) {
    var vm = this;

    vm.startTest = startTest;

    function startTest() {
      var tezt = JSON.parse(localStorage.getItem('currentTest'));

      loadAllTeztItems(tezt.id);

      function loadAllTeztItems(id) {
        TeztItem.query({ id: id }, onSuccess, onError);

        function onSuccess(data, headers) {
          localStorage.setItem('teztItems', JSON.stringify(data));
          for (var t in data) {
            loadAllAnswers(t.id);
          }
        }

        function onError(error) {
          AlertService.error(error.data.message);
        }
      }

      function loadAllAnswers(id) {
        Answer.query({ id: id }, onSuccess, onError);

        function onSuccess(data, headers) {
          localStorage.setItem('answers', JSON.stringify(data));
        }

        function onError() {
          AlertService.error(error.data.message);
        }

      }

    };

  });
