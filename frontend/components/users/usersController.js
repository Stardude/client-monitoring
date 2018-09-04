(function (angular) {
    'use strict'

    angular
        .module('app')
        .config(config)
        .controller('UsersController', UsersController);

    function config($stateProvider, CONSTANTS) {
        $stateProvider.state(CONSTANTS.STATES.USERS, {
            url: '/users',
            views: {
                'center': {
                    templateUrl: './components/users/users.html',
                    controller: 'UsersController'
                }
            }
        });
    }

    function UsersController($scope) {
        $scope.users = ['Yurii', 'Andy', 'Chris', 'Tomas', 'Qwe', 'Asd', 'ZXc', 'GGG'];
    }

})(window.angular);