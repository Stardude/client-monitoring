(function (angular) {
    'use strict'

    angular
        .module('app')
        .config(config)
        .controller('ParametersController', ParametersController);

    function config($stateProvider, CONSTANTS) {
        $stateProvider.state(CONSTANTS.STATES.PARAMETERS, {
            url: '/parameters',
            views: {
                'center': {
                    templateUrl: './components/parameters/parameters.html',
                    controller: 'ParametersController'
                }
            }
        });
    }

    function ParametersController($state, CONSTANTS) {
        
    }

})(window.angular);