'use strict';
angular.module('main')
  .controller('BookCtrl', function ($log, $window, Auth, $state, Principal, LoginService, Book) {
    var vm = this;

    vm.book = {
      title: '',
      author: ''
    }

    vm.delete = deleteBook;
    vm.create = createBook;

    loadAllBooks();

    function loadAllBooks() {
      Book.query({}, function (data, headers) {
        vm.books = data;
      });
    }

    function deleteBook(id) {
      Book.delete({id: id}, function () {
        $window.location.reload();
      });
    }

    function createBook(book) {
      Book.update(vm.book, function () {
        $window.location.reload();
      });
    }

  });
