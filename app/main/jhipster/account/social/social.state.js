(function() {
    'use strict';

    angular
        .module('main')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('social-register', {
            parent: 'app',
            url: '/social-register/:provider?{success:boolean}',
            data: {
                authorities: [],
                pageTitle: 'Register with {{ label }}'
            },
            views: {
                'pageContent': {
                    templateUrl: 'main/jhipster/account/social/social-register.html',
                    controller: 'SocialRegisterController',
                    controllerAs: 'vm'
                }
            }
        })
        .state('social-auth', {
            parent: 'account',
            url: '/social-auth',
            data: {
                authorities: []
            },
            views: {
                'content@': {
                    controller: 'SocialAuthController'
                }
            }
        });
    }
})();
