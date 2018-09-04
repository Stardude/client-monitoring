(function (angular) {
    'use strict';
    
    angular
        .module('app', [
            'ui.router',
            'ngResource'
        ])
        .run(run);
    
    function run($state, CONSTANTS) {
        $state.go(CONSTANTS.STATES.ROOT);
    }
    
})(window.angular);