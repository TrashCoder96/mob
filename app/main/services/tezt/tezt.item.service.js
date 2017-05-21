(function() {
  'use strict';
  angular
    .module('main')
    .factory('TeztItem', TeztItem);

  TeztItem.$inject = ['$resource', 'Config'];

  function TeztItem($resource, Config) {

    var resourceUrl = Config.ENV.SERVER_URL + '/api/tezt-items/:id';

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
