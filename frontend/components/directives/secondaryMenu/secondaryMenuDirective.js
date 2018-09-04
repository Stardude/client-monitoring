(function (angular) {
    'use strict'

    angular
        .module('app')
        .directive('secondaryMenu', secondaryMenuDirective);

    function secondaryMenuDirective(_, $state, CONSTANTS) {
        function link(scope) {
            scope.items = _.map(CONSTANTS.MENU[scope.type].SUBMENU, function (item, key) {
                return {
                    title: item,
                    link: CONSTANTS.STATES[key]
                };
            });

            scope.navigateTo = function (link) {
                $state.go(link);
            };
        }

        return {
            restrict: 'E',
            templateUrl: './components/directives/secondaryMenu/secondaryMenu.html',
            scope: {
                type: '@'
            },
            link: link
        };
    }

})(window.angular);