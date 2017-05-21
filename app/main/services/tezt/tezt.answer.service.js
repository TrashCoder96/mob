(function() {
  'use strict';
  angular
    .module('main')
    .factory('Answer', Answer);

  Answer.$inject = ['$resource', 'Config'];

  function Answer($resource, Config) {

    var resourceUrl = Config.ENV.SERVER_URL + '/api/answers/:id';

    return $resource(resourceUrl, {}, {
      'query': { method: 'GET', isArray: true},
      'get': {
        method: 'GET',
        transformResponse: function (data) {
          if (data) {
            data = angular.fromJson(data);
          }
          return data;
        }
      }
    });
  }
})();
