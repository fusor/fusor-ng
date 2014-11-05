/**
 Copyright 2014 Red Hat, Inc.

 This software is licensed to you under the GNU General Public
 License as published by the Free Software Foundation; either version
 2 of the License (GPLv2) or (at your option) any later version.
 There is NO WARRANTY for this software, express or implied,
 including the implied warranties of MERCHANTABILITY,
 NON-INFRINGEMENT, or FITNESS FOR A PARTICULAR PURPOSE. You should
 have received a copy of GPLv2 along with this software; if not, see
 http://www.gnu.org/licenses/old-licenses/gpl-2.0.txt.
 **/

BASTION_MODULES.push('FusorNg.fusor-ng');

/**
 * @ngdoc module
 * @name  FusorNg.fusor-ng
 *
 * @description
 *   Module for fusor-ng
 */
angular.module('FusorNg.fusor-ng', [
    'ngResource',
    'alchemy',
    'alch-templates',
    'ui.router',
    'Bastion.widgets'
]);

/**
 * @ngdoc object
 * @name FusorNg.fusor-ng.config
 *
 * @requires $stateProvider
 *
 * @description
 *   Used for hostgroups level configuration such as setting up the ui state machine.
 */

angular.module('FusorNg.fusor-ng').config(['$stateProvider', function ($stateProvider) {
    $stateProvider.state('hostgroups', {
        abstract: true,
        controller: 'HostgroupsController',
        templateUrl: 'fusor-ng/views/hostgroups.html'
    });

    $stateProvider.state('hostgroups.index', {
        url: '/hostgroups',
        permission: 'view_hostgroups',
        views: {
            'table': {
                templateUrl: 'fusor-ng/views/hostgroups-table-full.html'
            }
        }
    })
    .state('hostgroups.new', {
        url: '/hostgroups/new',
        permission: 'view_hostgroups',
        collapsed: true,
        views: {
            'table': {
                templateUrl: 'fusor-ng/views/hostgroups-table-collapsed.html'
            },
            'action-panel': {
                controller: 'NewHostgroupController',
                templateUrl: 'fusor-ng/new/views/hostgroup-new.html'
            }
        }
    });

    $stateProvider.state('hostgroups.details', {
        abstract: true,
        url: '/hostgroups/:hostgroupId',
        permission: 'view_hostgroups',
        collapsed: true,
        views: {
            'table': {
                templateUrl: 'fusor-ng/views/hostgroups-table-collapsed.html'
            },
            'action-panel': {
                controller: 'HostgroupDetailsController',
                templateUrl: 'fusor-ng/details/views/hostgroup-details.html'
            }
        }
    });

}]);
