(function (angular) {
    'use strict'

    angular
        .module('app')
        .directive('mainMenu', mainMenuDirective);

    function mainMenuDirective(_, $state, CONSTANTS) {
        function link(scope) {
            scope.items = _.map(CONSTANTS.MENU, function (item, key) {
                return {
                    title: item.TEXT,
                    link: CONSTANTS.STATES[key]
                };
            });

            scope.navigateTo = function (link) {
                $state.go(link);
            };
        }

        return {
            restrict: 'E',
            templateUrl: './components/directives/mainMenu/mainMenu.html',
            scope: {},
            link: link
        };
    }

})(window.angular);