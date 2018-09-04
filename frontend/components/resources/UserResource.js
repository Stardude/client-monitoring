(function (angular) {
    'use strict'

    angular
        .module('app')
        .factory('User', UserResource);

    function UserResource($resource) {
        var basePath = '/user';
        
        function saveUserData(userData) {
            return $resource(basePath).save(userData).$promise;
        }

        function getAllUsers() {
            return $resource(basePath + '/getAllUsers').query().$promise;
        }

        return {
            saveUserData: saveUserData,
            getAllUsers: getAllUsers
        };
    }

})(window.angular);