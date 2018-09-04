(function (angular) {
    'use strict'

    angular
        .module('app')
        .config(config)
        .controller('RootController', RootController);

    function config($stateProvider, CONSTANTS) {
        $stateProvider.state(CONSTANTS.STATES.ROOT, {
            url: '',
            views: {
                '': {
                    templateUrl: './components/root/root.html',
                    controller: 'RootController'
                }
            }
        });
    }

    function RootController($state, CONSTANTS) {
        $state.go(CONSTANTS.STATES.CLIENTS);
    }

})(window.angular);