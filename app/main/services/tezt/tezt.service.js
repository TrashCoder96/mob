(function() {
  'use strict';
  angular
    .module('main')
    .factory('Tezt', Tezt);

  Tezt.$inject = ['$resource'];

  function Tezt ($resource) {
    var resourceUrl =  'api/tezts/:id';

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
      },
      'update': { method:'PUT' }
    });
  }
})();
