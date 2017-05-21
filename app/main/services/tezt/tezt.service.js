(function() {
  'use strict';
  angular
    .module('main')
    .factory('Tezt', Tezt);

  Tezt.$inject = ['$resource', 'Config'];

  function Tezt($resource, Config) {

    var resourceUrl = Config.ENV.SERVER_URL + '/api/tezts/:id';

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
