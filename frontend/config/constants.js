(function (angular, _) {
    'use strict'

    angular.module('app')
        .constant('CONSTANTS', {
            STATES: {
                ROOT: 'root',

                CLIENTS: 'root.clients',
                USERS: 'root.users',
                PARAMETERS: 'root.parameters',

                CLIENT_NEW: 'root.clients.new',
                CLIENT_EDIT: 'root.clients.edit',
                CLIENT_DETAILS: 'root.clients.details',

                USER_NEW: 'root.users.new',
                USER_EDIT: 'root.users.edit',
                USER_DETAILS: 'root.users.details',

                SMTP: 'root.parameters.smtp'
            },
            MENU: {
                CLIENTS: {
                    TEXT: 'Clients',
                    SUBMENU: {
                        CLIENT_NEW: 'New Client',
                        CLIENTS: 'Clients'
                    }
                },
                USERS: {
                    TEXT: 'Users',
                    SUBMENU: {
                        USER_NEW: 'New User',
                        USERS: 'Users'
                    }
                },
                PARAMETERS: {
                    TEXT: 'Parameters',
                    SUBMENU: {
                        SMTP: 'SMTP'
                    }
                }
            }
        })
        .constant('_', _);

})(window.angular, window._);