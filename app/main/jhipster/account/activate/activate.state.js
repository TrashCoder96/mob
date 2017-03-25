(function() {
    'use strict';

    angular
        .module('main')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('activate', {
            parent: 'app',
            url: '/activate?key',
            data: {
                authorities: [],
                pageTitle: 'Activation'
            },
            views: {
                'pageContent': {
                    templateUrl: 'main/jhipster/account/activate/activate.html',
                    controller: 'ActivationController',
                    controllerAs: 'vm'
                }
            }
        });
    }
})();
