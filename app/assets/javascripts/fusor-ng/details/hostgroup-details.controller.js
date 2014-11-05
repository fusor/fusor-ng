/**
 * Copyright 2014 Red Hat, Inc.
 *
 * This software is licensed to you under the GNU General Public
 * License as published by the Free Software Foundation; either version
 * 2 of the License (GPLv2) or (at your option) any later version.
 * There is NO WARRANTY for this software, express or implied,
 * including the implied warranties of MERCHANTABILITY,
 * NON-INFRINGEMENT, or FITNESS FOR A PARTICULAR PURPOSE. You should
 * have received a copy of GPLv2 along with this software; if not, see
 * http://www.gnu.org/licenses/old-licenses/gpl-2.0.txt.
 */

/**
 * @ngdoc object
 * @name  FusorNg.fusor-ng.controller:HostgroupDetailsController
 *
 * @requires $scope
 * @requires $state
 * @requires Hostgroup
 *
 * @description
 *   Provides the functionality for the hostgroup details action pane.
 */
angular.module('FusorNg.fusor-ng').controller('HostgroupDetailsController',
    ['$scope', '$state', 'Hostgroup', function ($scope, $state, Hostgroup) {

        $scope.successMessages = [];
        $scope.errorMessages = [];

        if ($scope.hostgroup) {
            $scope.panel = {loading: false};
        } else {
            $scope.panel = {loading: true};
        }

        $scope.hostgroup = Hostgroup.get({id: $scope.$stateParams.hostgroupId}, function () {
            $scope.panel.loading = false;
        });

        $scope.removeHostgroup = function (hostgroup) {
            var id = hostgroup.id;

            hostgroup.$delete(function () {
                $scope.removeRow(id);
                $scope.transitionTo('hostgroups.index');
            });
        };
    }]
);
