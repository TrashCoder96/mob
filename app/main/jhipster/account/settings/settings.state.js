(function() {
    'use strict';

    angular
        .module('main')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('settings', {
            parent: 'app',
            url: '/settings',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'Settings'
            },
            views: {
                'pageContent': {
                    templateUrl: 'main/jhipster/account/settings/settings.html',
                    controller: 'SettingsController',
                    controllerAs: 'vm'
                }
            }
        });
    }
})();
