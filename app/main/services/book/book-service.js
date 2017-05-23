'use strict';

angular
  .module('main')
  .factory('Book', Book);

Book.$inject = ['$state', '$resource'];

function Book ($state, $resource) {
  var resourceUrl =  'api/books/:id';

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
    'update': { method: 'PUT' }
  });
}
