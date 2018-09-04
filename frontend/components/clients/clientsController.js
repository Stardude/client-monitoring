(function (angular) {
    'use strict'

    angular
        .module('app')
        .config(config)
        .controller('ClientsController', ClientsController);

    function config($stateProvider, CONSTANTS) {
        $stateProvider.state(CONSTANTS.STATES.CLIENTS, {
            url: '/clients',
            views: {
                'center': {
                    templateUrl: './components/clients/clients.html',
                    controller: 'ClientsController'
                }
            }
        });
    }

    function ClientsController($scope, User) {
        User.getAllUsers().then(function (result) {
            $scope.users = result;
        });

        $scope.users = ['Yurii', 'Andy', 'Chris', 'Tomas', 'Qwe', 'Asd', 'ZXc', 'GGG'];
    }

})(window.angular);