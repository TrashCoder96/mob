(function() {
    'use strict';

    angular
        .module('main')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('password', {
            parent: 'app',
            url: '/password',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'Password'
            },
            views: {
                'pageContent': {
                    templateUrl: 'main/jhipster/account/password/password.html',
                    controller: 'PasswordController',
                    controllerAs: 'vm'
                }
            }
        });
    }
})();
